"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import Magnetic from "@/components/Magnetic";

// WhatsApp number with country code, no + or spaces
const WHATSAPP_NUMBER = "918150000345";

type BookingForm = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
  area: string;
};

const occasions = [
  "Regular Dining",
  "Birthday Celebration",
  "Anniversary",
  "Corporate Event",
  "Proposal",
  "Bachelorette / Bachelor Party",
  "Private Event",
  "Other",
];

const timeSlots = [
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
  "9:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
  "11:30 PM",
  "12:00 AM",
];

const seatingAreas = [
  "Tropical Arch Cabana",
  "Signature Egg Bar Counter",
  "Skyline Edge Seating",
  "Garden Lounge (Standard)",
];

export default function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>();

  const onSubmit = (data: BookingForm) => {
    // Build WhatsApp message
    const message = `🌺 *Reservation Request – The Nest at Waikiki*

*Name:* ${data.name}
*Email:* ${data.email}
*Phone:* ${data.phone}

*Date:* ${data.date}
*Time:* ${data.time}
*Guests:* ${data.guests}
*Seating Area:* ${data.area || "No preference"}
*Occasion:* ${data.occasion || "Regular dining"}

*Special Requests:*
${data.requests || "None"}

_Sent from thenestbywaikiki.com_`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp URL in new window
    window.open(whatsappURL, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      ref={sectionRef}
      id="reserve"
      className="relative section-padding bg-nest-black overflow-hidden"
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
                className="text-nest-cream/40 text-[9px] sm:text-[10px] tracking-[0.4em] uppercase whitespace-nowrap lg:transform lg:rotate-90 lg:origin-left lg:translate-x-[6px] lg:translate-y-[20px] font-medium" 
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                THE BOOKINGS
              </span>
            </div>
          </div>

          {/* Right Main Content */}
          <div>
            {/* Header */}
            <div className="max-w-xl mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-cormorant font-light text-[clamp(2rem,5vw,3.75rem)] text-nest-cream mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Secure Your <br />
                <span className="text-gold-gradient italic font-light">Table in the Skies</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-nest-cream/60 text-sm sm:text-base leading-relaxed font-light"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Plan your evening with us. Choose your preferred seating lounge, submit your booking, and our hosting team will confirm via WhatsApp shortly.
              </motion.p>
            </div>

            {/* Content Split: Coordinates Left, Form Right */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Pane - Coordinates & Info */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                
                {/* Location & Contact Block */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-nest-gold/15 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-nest-gold/20 pointer-events-none rounded-tr-2xl" />
                  
                  <h4 
                    className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Coordinates
                  </h4>

                  <div className="space-y-6 text-xs sm:text-sm font-light text-nest-cream/70">
                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>Address</span>
                      </p>
                      <p className="leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        6th Floor, Peninsula Grand Hotel,<br />
                        Sakinaka Junction, Andheri East,<br />
                        Mumbai, Maharashtra 400072
                      </p>
                    </div>

                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>Timing</span>
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif" }}>Every Night: 6:00 PM – 3:00 AM</p>
                    </div>

                    <div>
                      <p className="text-nest-cream font-medium mb-1.5 flex items-center gap-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <svg className="w-4 h-4 text-nest-gold flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.631-5.176-3.983-6.8-6.8l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        <span>Contact</span>
                      </p>
                      <p style={{ fontFamily: "'Inter', sans-serif" }}>Direct Desk: +91 81500 00345</p>
                    </div>
                  </div>
                </div>

                {/* Booking Policies & Rules */}
                <div className="glass-card rounded-2xl p-6 sm:p-8 border border-nest-gold/15">
                  <h4 
                    className="text-nest-gold text-[10px] tracking-[0.25em] uppercase mb-6 font-semibold"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Guidelines
                  </h4>
                  
                  <ul className="space-y-4 text-xs font-light text-nest-cream/60" style={{ fontFamily: "'Inter', sans-serif" }}>
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
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      onSubmit={handleSubmit(onSubmit)}
                      className="glass-card rounded-3xl p-10 sm:p-14 border border-nest-gold/20 shadow-[0_20px_50px_rgba(81,9,9,0.04)] cursor-none"
                    >
                      {/* WhatsApp Notification Tag */}
                      <div className="flex items-center gap-3.5 mb-8 pb-6 border-b border-nest-gold/10">
                        <div className="w-9 h-9 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-nest-cream text-xs font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            WhatsApp Verified Booking
                          </p>
                          <p className="text-nest-cream/40 text-[10px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Submitting launches WhatsApp to route directly to our table hosts.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                        
                        {/* Name */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Your Name *
                          </label>
                          <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Full Name"
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 px-1 w-full transition-colors duration-300 focus:outline-none placeholder-nest-cream/35 cursor-none"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.name.message}</p>
                          )}
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Phone Number *
                          </label>
                          <input
                            {...register("phone", { required: "Phone is required" })}
                            type="tel"
                            placeholder="+91 98765 43210"
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 px-1 w-full transition-colors duration-300 focus:outline-none placeholder-nest-cream/35 cursor-none"
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.phone.message}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Email Address *
                          </label>
                          <input
                            {...register("email", {
                              required: "Email is required",
                              pattern: { value: /^\S+@\S+$/i, message: "Enter a valid email" },
                            })}
                            type="email"
                            placeholder="you@email.com"
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 px-1 w-full transition-colors duration-300 focus:outline-none placeholder-nest-cream/35 cursor-none"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.email.message}</p>
                          )}
                        </div>

                        {/* Guests count */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Guests Count *
                          </label>
                          <select
                            {...register("guests", { required: "Guest count is required" })}
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 pr-8 pl-1 w-full transition-colors duration-300 focus:outline-none cursor-none appearance-none"
                            style={{ 
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23510909'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 4px center',
                              backgroundSize: '16px',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            <option value="" className="text-nest-cream bg-nest-dark">Select guests</option>
                            {[1, 2, 3, 4, 5, 6, 7, 8, "9+", "10+", "15+", "20+"].map((n) => (
                              <option key={n} value={n.toString()} className="text-nest-cream bg-nest-dark">
                                {n} {typeof n === "number" ? (n === 1 ? "Guest" : "Guests") : " Guests"}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Date */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Date *
                          </label>
                          <input
                            {...register("date", { required: "Date is required" })}
                            type="date"
                            min={new Date().toISOString().split("T")[0]}
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 px-1 w-full transition-colors duration-300 focus:outline-none cursor-none"
                            style={{ colorScheme: "light" }}
                          />
                          {errors.date && (
                            <p className="text-red-500 text-[10px] mt-1 font-medium">{errors.date.message}</p>
                          )}
                        </div>

                        {/* Time */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Time Slot *
                          </label>
                          <select
                            {...register("time", { required: "Time is required" })}
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 pr-8 pl-1 w-full transition-colors duration-300 focus:outline-none cursor-none appearance-none"
                            style={{ 
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23510909'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 4px center',
                              backgroundSize: '16px',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            <option value="" className="text-nest-cream bg-nest-dark">Select time</option>
                            {timeSlots.map((t) => (
                              <option key={t} value={t} className="text-nest-cream bg-nest-dark">{t}</option>
                            ))}
                          </select>
                        </div>

                        {/* Seating Area */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Seating Area
                          </label>
                          <select 
                            {...register("area")} 
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 pr-8 pl-1 w-full transition-colors duration-300 focus:outline-none cursor-none appearance-none"
                            style={{ 
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23510909'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 4px center',
                              backgroundSize: '16px',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            <option value="" className="text-nest-cream bg-nest-dark">Select area (optional)</option>
                            {seatingAreas.map((area) => (
                              <option key={area} value={area} className="text-nest-cream bg-nest-dark">{area}</option>
                            ))}
                          </select>
                        </div>

                        {/* Occasion */}
                        <div>
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Occasion
                          </label>
                          <select 
                            {...register("occasion")} 
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 pr-8 pl-1 w-full transition-colors duration-300 focus:outline-none cursor-none appearance-none"
                            style={{ 
                              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23510909'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5'/%3E%3C/svg%3E")`,
                              backgroundPosition: 'right 4px center',
                              backgroundSize: '16px',
                              backgroundRepeat: 'no-repeat'
                            }}
                          >
                            <option value="" className="text-nest-cream bg-nest-dark">Select occasion (optional)</option>
                            {occasions.map((o) => (
                              <option key={o} value={o} className="text-nest-cream bg-nest-dark">{o}</option>
                            ))}
                          </select>
                        </div>

                        {/* Special Requests */}
                        <div className="md:col-span-2">
                          <label className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Special Requests
                          </label>
                          <textarea
                            {...register("requests")}
                            placeholder="Dietary needs, special configurations, table setup requests..."
                            rows={2}
                            className="bg-transparent border-0 border-b border-nest-gold/25 focus:border-nest-gold focus:ring-0 text-nest-cream font-light text-sm py-3 px-1 w-full transition-colors duration-300 focus:outline-none resize-none cursor-none placeholder-nest-cream/35"
                          />
                        </div>
                      </div>

                      {/* Submit */}
                      <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
                        <Magnetic>
                          <button 
                            type="submit" 
                            className="btn-gold rounded-full w-full sm:w-auto flex items-center justify-center gap-2 cursor-none text-[10px] tracking-[0.25em] py-4 px-8"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
                            <span>Confirm via WhatsApp</span>
                          </button>
                        </Magnetic>
                        <p className="text-nest-cream/50 text-[10px] tracking-wider font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                          Hosts confirm status within 1 hour.
                        </p>
                      </div>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="glass-card rounded-2xl p-12 text-center border border-nest-gold/15 flex flex-col items-center justify-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-6">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                      </div>
                      
                      <h3
                        className="font-cormorant text-3xl font-light text-nest-cream mb-4"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        Request Transmitted
                      </h3>
                      <p 
                        className="text-nest-cream/60 text-xs sm:text-sm max-w-sm mx-auto mb-8 font-light leading-relaxed"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        WhatsApp has been opened with your pre-filled reservation information. Please hit send in the chat to complete your booking with our hosts.
                      </p>
                      
                      <button
                        onClick={() => setSubmitted(false)}
                        className="btn-outline-gold rounded-full px-8 py-3 cursor-none text-[10px]"
                      >
                        <span>Request Another Table</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
