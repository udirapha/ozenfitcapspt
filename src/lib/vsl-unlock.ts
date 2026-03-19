const TIME_KEY_PATTERN = /(current_?time|(^|_)time$|seconds?|position|played)/i;
const EVENT_KEY_PATTERN = /(event|eventname|type|status|action)/i;
const END_EVENT_PATTERN = /(ended|finish|finished|complete|completed)/i;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const parseClockStringToSeconds = (value: string): number => {
  const parts = value
    .split(":")
    .map((part) => Number(part.trim()))
    .filter((part) => Number.isFinite(part));

  if (parts.length === 0 || parts.length > 3) return 0;

  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return hours * 3600 + minutes * 60 + seconds;
  }

  if (parts.length === 2) {
    const [minutes, seconds] = parts;
    return minutes * 60 + seconds;
  }

  return parts[0];
};

const toSeconds = (value: unknown): number => {
  if (typeof value === "number" && Number.isFinite(value)) {
    if (value > 10000) return value / 1000;
    return value;
  }

  if (typeof value === "string") {
    const normalized = value.trim();
    if (!normalized) return 0;

    if (/^\d+(\.\d+)?$/.test(normalized)) {
      return toSeconds(Number(normalized));
    }

    if (normalized.includes(":")) {
      return parseClockStringToSeconds(normalized);
    }
  }

  return 0;
};

const normalizePayload = (payload: unknown): unknown => {
  let current = payload;

  for (let i = 0; i < 2; i += 1) {
    if (typeof current !== "string") break;

    const trimmed = current.trim();
    if (!trimmed) break;

    try {
      const parsed = JSON.parse(trimmed);
      if (parsed === current) break;
      current = parsed;
    } catch {
      break;
    }
  }

  return current;
};

const extractPlaybackSeconds = (payload: unknown): number => {
  const root = normalizePayload(payload);
  let maxSeconds = toSeconds(root);

  const stack: Array<{ node: unknown; depth: number }> = [{ node: root, depth: 0 }];
  const seen = new Set<object>();

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) continue;

    const { node, depth } = current;
    if (depth > 6) continue;

    if (Array.isArray(node)) {
      node.forEach((item) => stack.push({ node: item, depth: depth + 1 }));
      continue;
    }

    if (!isRecord(node)) continue;

    if (seen.has(node)) continue;
    seen.add(node);

    Object.entries(node).forEach(([key, rawValue]) => {
      const value = typeof rawValue === "string" ? normalizePayload(rawValue) : rawValue;

      if (TIME_KEY_PATTERN.test(key)) {
        maxSeconds = Math.max(maxSeconds, toSeconds(value));
      }

      if (
        typeof value === "object" ||
        /data|payload|detail|player|video|meta/i.test(key)
      ) {
        stack.push({ node: value, depth: depth + 1 });
      }
    });
  }

  return maxSeconds;
};

const hasPlaybackCompletedSignal = (payload: unknown): boolean => {
  const root = normalizePayload(payload);
  const stack: Array<unknown> = [root];
  const seen = new Set<object>();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!node) continue;

    if (Array.isArray(node)) {
      node.forEach((item) => stack.push(item));
      continue;
    }

    if (!isRecord(node)) continue;

    if (seen.has(node)) continue;
    seen.add(node);

    for (const [key, rawValue] of Object.entries(node)) {
      const value = typeof rawValue === "string" ? normalizePayload(rawValue) : rawValue;
      const lowerKey = key.toLowerCase();

      if (
        ["ended", "completed", "isended", "is_completed"].includes(lowerKey) &&
        value === true
      ) {
        return true;
      }

      if (
        EVENT_KEY_PATTERN.test(lowerKey) &&
        typeof value === "string" &&
        END_EVENT_PATTERN.test(value.toLowerCase())
      ) {
        return true;
      }

      if ((lowerKey.includes("percent") || lowerKey.includes("progress")) && toSeconds(value) >= 100) {
        return true;
      }

      if (typeof value === "object") {
        stack.push(value);
      }
    }
  }

  return false;
};

export const shouldUnlockFromPayload = (payload: unknown, unlockAtSeconds: number): boolean => {
  if (hasPlaybackCompletedSignal(payload)) return true;
  return extractPlaybackSeconds(payload) >= unlockAtSeconds;
};

export const shouldUnlockFromSmartplayer = (unlockAtSeconds: number): boolean => {
  if (typeof window === "undefined") return false;

  const smartplayer = (window as Window & { smartplayer?: { instances?: unknown } }).smartplayer;
  const instancesRaw = smartplayer?.instances;

  const instances = Array.isArray(instancesRaw)
    ? instancesRaw
    : instancesRaw && typeof instancesRaw === "object"
      ? Object.values(instancesRaw as Record<string, unknown>)
      : instancesRaw
        ? [instancesRaw]
        : [];

  return instances.some((instance) => shouldUnlockFromPayload(instance, unlockAtSeconds));
};
