import { useEffect } from "react";

const VSLSection = () => {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(s);
    };
  }, []);

  return (
    <section className="bg-background py-8 md:py-12 px-4">
      <div className="container max-w-[720px] mx-auto">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div
            id="ifr_69b02f89820829989cca9ec9_wrapper"
            style={{ margin: "0 auto", width: "100%" }}
          >
            <div
              style={{ position: "relative", padding: "56.25% 0 0 0" }}
              id="ifr_69b02f89820829989cca9ec9_aspect"
            >
              <iframe
                frameBorder="0"
                allowFullScreen
                src="about:blank"
                id="ifr_69b02f89820829989cca9ec9"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                referrerPolicy="origin"
                onLoad={(e) => {
                  const iframe = e.currentTarget;
                  iframe.onload = null;
                  iframe.src =
                    "https://scripts.converteai.net/e10f2ed1-387e-42b5-add3-183c76638cc5/players/69b02f89820829989cca9ec9/v4/embed.html" +
                    (location.search || "?") +
                    "&vl=" +
                    encodeURIComponent(location.href);
                }}
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <a href="#preco" className="btn-cta pulse-animation text-base md:text-lg">
            QUERO EXPERIMENTAR AGORA! 🔥
          </a>
        </div>
      </div>
    </section>
  );
};

export default VSLSection;
