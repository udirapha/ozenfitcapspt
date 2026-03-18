import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// Variant mapping: form package value → Shopify variant ID
const VARIANT_MAP: Record<string, { variantId: number; price: string; title: string }> = {
  "1mes": { variantId: 52816771678544, price: "34.00", title: "1 unidade" },
  "3meses": { variantId: 52816771711312, price: "75.00", title: "3 unidades" },
  "5meses": { variantId: 52816771744080, price: "100.00", title: "5 unidades" },
};

const normalizePhone = (rawPhone: string) => {
  let phone = rawPhone.trim().replace(/[^\d+]/g, "");

  if (phone.startsWith("00")) {
    phone = `+${phone.slice(2)}`;
  }

  if (!phone.startsWith("+")) {
    phone = `+39${phone}`;
  }

  const digits = phone.slice(1).replace(/\D/g, "");
  return `+${digits}`;
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const SHOPIFY_ACCESS_TOKEN = Deno.env.get("SHOPIFY_ACCESS_TOKEN");
    if (!SHOPIFY_ACCESS_TOKEN) {
      throw new Error("SHOPIFY_ACCESS_TOKEN is not configured");
    }

    const body = await req.json();
    const { name, phone, address, city, postalCode, package: pkg } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return new Response(JSON.stringify({ error: "Nome inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!phone || typeof phone !== "string" || phone.trim().length < 7 || phone.length > 30) {
      return new Response(JSON.stringify({ error: "Telemóvel inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!address || typeof address !== "string" || address.trim().length < 5 || address.length > 200) {
      return new Response(JSON.stringify({ error: "Morada inválida" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!city || typeof city !== "string" || city.trim().length < 2 || city.length > 100) {
      return new Response(JSON.stringify({ error: "Cidade inválida" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!postalCode || typeof postalCode !== "string" || postalCode.trim().length < 4 || postalCode.length > 10) {
      return new Response(JSON.stringify({ error: "Código postal inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const variant = VARIANT_MAP[pkg];
    if (!variant) {
      return new Response(JSON.stringify({ error: "Pacote inválido" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const normalizedPhone = normalizePhone(phone);
    if (!/^\+[1-9]\d{7,14}$/.test(normalizedPhone)) {
      return new Response(
        JSON.stringify({ error: "Numero di telefono non valido. Inserisci solo le cifre senza prefisso." }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const SHOP_DOMAIN = "1ievzb-tk.myshopify.com";
    const API_VERSION = "2025-01";

    // Split name into first/last
    const nameParts = name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || firstName;

    const orderPayload = {
      order: {
        line_items: [
          {
            variant_id: variant.variantId,
            quantity: 1,
          },
        ],
        shipping_address: {
          first_name: firstName,
          last_name: lastName,
          address1: address.trim(),
          city: city.trim(),
          zip: postalCode.trim(),
          country: "IT",
          phone: normalizedPhone,
        },
        billing_address: {
          first_name: firstName,
          last_name: lastName,
          address1: address.trim(),
          city: city.trim(),
          zip: postalCode.trim(),
          country: "IT",
          phone: normalizedPhone,
        },
        financial_status: "pending",
        tags: "COD, landing-page",
        note: `Ordine COD via Landing Page - ${variant.title}`,
        send_receipt: false,
        send_fulfillment_receipt: false,
      },
    };

    const response = await fetch(
      `https://${SHOP_DOMAIN}/admin/api/${API_VERSION}/orders.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Access-Token": SHOPIFY_ACCESS_TOKEN,
        },
        body: JSON.stringify(orderPayload),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      const details = data?.errors;
      const phoneError = details?.customer?.phone_number?.[0] || details?.shipping_address?.phone?.[0] || details?.billing_address?.phone?.[0];

      if (phoneError) {
        return new Response(
          JSON.stringify({ error: "Numero di telefono non valido. Inserisci solo cifre dopo il prefisso selezionato." }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }

      console.error("Shopify order creation failed:", JSON.stringify(data));
      return new Response(
        JSON.stringify({ error: "Erro ao criar pedido na Shopify", details: data.errors }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        orderNumber: data.order?.order_number,
        orderId: data.order?.id,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (error: unknown) {
    console.error("Error creating COD order:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
