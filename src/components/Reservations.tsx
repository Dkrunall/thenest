import { ReservationFormLoader } from "@/components/islands";

export default function Reservations() {
  return (
    <section
      id="reserve"
      className="relative section-padding bg-nest-black overflow-hidden defer-render"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-nest-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="section-grid">
          
          {/* Sticky Left Sidebar */}
          <div className="section-sidebar flex flex-col justify-start lg:pt-2">
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              <span className="font-cormorant text-5xl sm:text-6xl font-light text-nest-gold leading-none">06</span>
              <div className="w-12 h-[1px] bg-nest-gold/30 lg:w-[1px] lg:h-12" />
              <span 
                className="text-nest-cream/70 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium" 
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                THE BOOKINGS
              </span>
            </div>
          </div>

          {/* Right Main Content */}
          <div>
            {/* Header */}
            <div className="max-w-xl mb-16">
              <h2 className="font-cormorant font-light text-[clamp(2rem,5vw,3.75rem)] text-nest-cream mb-6 reveal" style={{ "--ry": "25px", fontFamily: "var(--font-cormorant), serif" } as React.CSSProperties}>
                Secure Your <br />
                <span className="text-gold-gradient italic font-light">Table in the Skies</span>
              </h2>
              <p className="text-nest-cream/70 text-sm sm:text-base leading-relaxed font-light reveal" style={{ "--ry": "20px", "--rd": "0.15s", fontFamily: "var(--font-inter), sans-serif" } as React.CSSProperties}>
                Plan your evening with us. Choose your preferred seating lounge, submit your booking, and our hosting team will confirm via WhatsApp shortly.
              </p>
            </div>

            {/* Content Split: Coordinates Left, Form Right */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Pane - Coordinates & Info */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Location & Contact Block */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-nest-gold/15 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-nest-gold/20 pointer-events-none rounded-tr-2xl" />
                  
                  <h3 
                    className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Coordinates
                  </h3>

                  <div className="space-y-6 text-xs sm:text-sm font-light text-nest-cream/70">
                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Address</span>
                      </p>
                      <p className="leading-relaxed" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        2nd Floor, Grand Pavilion,<br />
                        Peninsula Grand Hotel, Andheri East,<br />
                        Mumbai, Maharashtra 400072
                      </p>
                    </div>

                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>Timing</span>
                      </p>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif" }}>Every Night: 6:00 PM – 1:30 AM</p>
                    </div>

                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.631-5.176-3.983-6.8-6.8l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span>Contact</span>
                      </p>
                      <p style={{ fontFamily: "var(--font-inter), sans-serif" }}>Direct Desk: +91 81500 00345</p>
                    </div>
                  </div>
                </div>

                {/* Booking Policies & Rules */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-nest-gold/15">
                  <h3 
                    className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Guidelines
                  </h3>
                  
                  <ul className="space-y-4 text-xs font-light text-nest-cream/70" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nest-gold/50 flex-shrink-0 mt-1.5" />
                      <span><strong>Dress Code:</strong> Smart Casual. Open footwear and athletic apparel are discouraged.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nest-gold/50 flex-shrink-0 mt-1.5" />
                      <span><strong>Reservations:</strong> Tables are held for up to 15 minutes past the booking slot.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-nest-gold/50 flex-shrink-0 mt-1.5" />
                      <span><strong>Cover Charge:</strong> Applicable on Fridays and Saturdays for skyline edge seating.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Pane - Dynamic Interactive Form */}
              <div className="lg:col-span-8">
                <ReservationFormLoader />
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
