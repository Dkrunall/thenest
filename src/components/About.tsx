import LazyImage from "@/components/LazyImage";


const stats = [
  { value: "2nd", label: "Floor Location", sub: "Grand Pavilion, Peninsula Grand" },
  { value: "4.5★", label: "Guest Rating", sub: "Swiggy & Zomato" },
  { value: "360°", label: "Skyline Views", sub: "Mumbai City Horizon" },
  { value: "6PM", label: "Doors Open", sub: "Every night until 1:30 AM" },
];

export default function About() {

  return (
    <section
      id="about"
      className="relative section-padding overflow-hidden bg-nest-black defer-render"
    >
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">
          
          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">01</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span 
                className="text-nest-cream/70 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium" 
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                OUR STORY
              </span>
            </div>
          </div>

          {/* Right Main Content */}
          <div>
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Story Narrative & Stats - Left column */}
              <div className="lg:col-span-7">
                <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3.75rem)] leading-tight text-nest-cream mb-8 reveal" style={{ "--ry": "30px", fontFamily: "var(--font-cormorant), serif" } as React.CSSProperties}>
                  Beneath the Skyline, <br />
                  <span className="text-gold-gradient italic font-light">Beyond the Ordinary</span>
                </h2>

                <p className="text-nest-cream/70 leading-relaxed mb-6 text-sm sm:text-base font-light reveal" style={{ "--ry": "20px", "--rd": "0.1s", fontFamily: "var(--font-inter), sans-serif" } as React.CSSProperties}>
                  The Nest at Waikiki is Mumbai&rsquo;s most breathtaking rooftop experience — a high-fashion tropical sanctuary that rises above the urban rush. We invite you to step away from the hustle of Andheri and immerse yourself in Hawaiian elegance.
                </p>

                <p className="text-nest-cream/70 leading-relaxed mb-12 text-sm sm:text-base font-light reveal" style={{ "--ry": "20px", "--rd": "0.2s", fontFamily: "var(--font-inter), sans-serif" } as React.CSSProperties}>
                  Perched on the 2nd floor, Grand Pavilion, Peninsula Grand Hotel, our signature egg-shaped bar, artisanal design elements, and panoramic skyline views create an atmosphere where every evening is a celebration of music, drinks, and fusion plates.
                </p>

                {/* Grid of Stats Cards */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, i) => (
                    <div key={stat.label} className="glass-card p-6 rounded-2xl relative overflow-hidden border border-nest-gold/10 hover:border-nest-gold/30 hover:shadow-[0_20px_40px_rgba(81,9,9,0.06)] transition-all duration-300 group/card cursor-none reveal hover:-translate-y-1.5" style={{ "--ry": "25px", "--rt": "0.6s", "--rd": `${0.15 + i * 0.08}s` } as React.CSSProperties}>
                      <div className="h-0.5 w-8 bg-nest-gold/30 mb-4 transition-all duration-300 group-hover/card:w-12 group-hover/card:bg-nest-gold" />
                      <p
                        className="text-gold-gradient font-cormorant text-3xl sm:text-4xl font-light mb-1"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {stat.value}
                      </p>
                      <p className="text-nest-cream text-xs tracking-wider uppercase mb-1 font-medium" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {stat.label}
                      </p>
                      <p className="text-nest-cream/70 text-[10px] sm:text-xs" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        {stat.sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arch Image - Right column */}
              <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[340px] aspect-[2/3] group cursor-none">
                  {/* Gold offset border outline */}
                  <div className="absolute -inset-3 border border-nest-gold/15 pointer-events-none arch-frame transform translate-x-2 translate-y-2 z-0 transition-transform duration-700 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:border-nest-gold/30" />
                  
                  {/* Masked Arched Image Container */}
                  <div className="relative w-full h-full arch-frame shadow-[0_15px_40px_rgba(36,30,21,0.05)] z-10 overflow-hidden">
                    <div className="parallax-img absolute inset-0 w-full h-[115%]">
                      <LazyImage
                        src="/interior/DSC01037.jpg"
                        alt="The Nest Twilight Scene"
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                      />
                    </div>
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-nest-black/30 to-transparent z-10" />
                  </div>

                  {/* Established Badge */}
                  <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl z-20 shadow-[0_15px_30px_rgba(81,9,9,0.06)] reveal" style={{ "--rs": 0.8, "--rt": "0.6s", "--rd": "0.3s" } as React.CSSProperties}>
                    <p className="text-nest-gold text-[9px] tracking-widest uppercase mb-0.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      ESTD
                    </p>
                    <p className="text-nest-cream font-cormorant text-4xl font-light" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                      2025
                    </p>
                    <p className="text-nest-cream/70 text-[10px] tracking-wider mt-1" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      MUMBAI
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Marquee Strip Banner */}
      <div className="mt-28 border-y border-nest-gold/10 py-6 overflow-hidden bg-nest-dark/30">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, idx) => (
            <span key={idx} className="flex items-center gap-10 pr-10">
              {[
                "Rooftop Ambience",
                "✦",
                "Golden Hour Gatherings",
                "✦",
                "Modern Tiki Mixology",
                "✦",
                "Beneath the Skyline, Beyond the Ordinary",
                "✦",
                "Gourmet Dining Nights",
                "✦",
                "Artisanal Food Experience",
                "✦",
                "Sunset to Afterhours",
                "✦",
              ].map((item, i) => (
                <span
                  key={i}
                  className={`text-[10px] tracking-[0.25em] uppercase whitespace-nowrap ${
                    item === "✦" ? "text-nest-gold" : "text-nest-cream/70"
                  }`}
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
