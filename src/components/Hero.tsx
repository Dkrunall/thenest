import Magnetic from "@/components/Magnetic";
import HeroSlides from "@/components/HeroSlides";

const PARTICLES_COUNT = 14;

// Deterministic particle layout (SSR-safe, no Math.random) animated purely with CSS.
const PARTICLES = Array.from({ length: PARTICLES_COUNT }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1;
  return {
    left: `${(r(1) * 100).toFixed(1)}%`,
    top: `${(r(2) * 100).toFixed(1)}%`,
    size: `${(1 + r(3) * 2).toFixed(1)}px`,
    delay: `${(r(4) * 4).toFixed(1)}s`,
    duration: `${(5 + r(5) * 5).toFixed(1)}s`,
    drift: `${((r(6) - 0.5) * 30).toFixed(0)}px`,
    rise: `-${(40 + r(7) * 50).toFixed(0)}px`,
    peak: (0.4 + r(8) * 0.4).toFixed(2),
  };
});

const HERO_IMAGES = [
  "/interior/DSC01031.jpg",
  "/interior/DSC01049.jpg",
  "/interior/DSC01057.jpg",
];

const rise = (y: number, delay = 0) =>
  ({ "--hy": `${y}px`, "--hd": `${delay}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-nest-black"
    >
      {/* Background Soft Glows */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[40vw] h-[40vw] rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />
      <div className="hidden md:block absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-nest-teal/5 blur-3xl pointer-events-none" />

      {/* Floating Particles */}
      <div className="particles-container z-10" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={
              {
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
                animationDelay: p.delay,
                animationDuration: p.duration,
                "--drift": p.drift,
                "--rise": p.rise,
                "--peak": p.peak,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Content - Spans 7 columns on large screens */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Subtitle Tagline */}
            <div className="hero-rise flex items-center gap-3 mb-6" style={rise(15)}>
              <span className="w-10 h-px bg-nest-gold" />
              <span
                className="text-nest-gold text-[10px] sm:text-xs tracking-[0.4em] uppercase font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Mumbai&rsquo;s Finest Rooftop Destination
              </span>
            </div>

            {/* Giant Title */}
            <div className="mb-6">
              <h1
                className="hero-rise font-cormorant font-light text-[clamp(3.5rem,10vw,7.5rem)] leading-none text-nest-cream tracking-wide"
                style={{ ...rise(20, 0.15), fontFamily: "var(--font-cormorant), serif" }}
              >
                THE NEST <br />
                <span className="text-gold-gradient italic font-light">AT WAIKIKI</span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="hero-rise text-nest-cream/70 text-sm sm:text-base max-w-xl leading-relaxed mb-10 font-light"
              style={{ ...rise(10, 0.35), fontFamily: "var(--font-inter), sans-serif" }}
            >
              Perched on the 2nd floor, Grand Pavilion, Peninsula Grand Hotel. A high-fashion tropical sanctuary where Hawaiian soul meets Mumbai&rsquo;s electric city skyline under the stars.
            </p>

            {/* CTAs */}
            <div className="hero-rise flex flex-row items-center gap-6" style={rise(10, 0.5)}>
              <Magnetic>
                <a
                  href="#reserve"
                  className="btn-gold inline-block text-center text-[10px] tracking-[0.25em] px-8 py-4 cursor-none"
                  style={{ borderRadius: "100px" }}
                >
                  Reserve Table
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#about"
                  className="btn-outline-gold inline-block text-center text-[10px] tracking-[0.25em] px-8 py-4 cursor-none"
                  style={{ borderRadius: "100px" }}
                >
                  <span>Explore Vibe</span>
                </a>
              </Magnetic>
            </div>
          </div>

          {/* Right Image Content - Spans 5 columns on large screens */}
          <div className="hero-frame lg:col-span-5 relative w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[3/4]">
              {/* Outer offset gold border frame */}
              <div className="absolute -inset-4 border border-nest-gold/20 pointer-events-none rounded-[32px] transform translate-x-2 translate-y-2 z-0" />

              {/* Main Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(36,30,21,0.06)] z-10">
                <HeroSlides images={HERO_IMAGES} alt="The Nest at Waikiki interior" />
              </div>

              {/* Floating hours badge */}
              <div className="hero-pop absolute -bottom-6 -left-6 glass-card px-6 py-4 rounded-2xl z-20 shadow-[0_15px_30px_rgba(81,9,9,0.08)]">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-nest-teal animate-pulse" />
                  <span
                    className="text-nest-cream text-[10px] tracking-[0.2em] uppercase font-medium"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    6:00 PM &ndash; 1:30 AM
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div
        className="hero-pop absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-none"
        style={{ "--hd": "1.5s" } as React.CSSProperties}
      >
        <span
          className="text-nest-cream/70 text-[9px] tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Scroll Down
        </span>
        <Magnetic>
          <a
            href="#about"
            className="w-[26px] h-[42px] rounded-full border border-nest-gold/30 flex items-start justify-center p-1.5 transition-colors duration-300 hover:border-nest-gold cursor-none"
            aria-label="Scroll down"
          >
            <span className="scroll-dot block w-1 h-2 rounded-full bg-nest-gold" />
          </a>
        </Magnetic>
      </div>
    </section>
  );
}
