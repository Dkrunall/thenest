"use client";

import { useState } from "react";
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

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

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
    <>
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
              <p className="text-nest-cream text-xs font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                WhatsApp Verified Booking
              </p>
              <p className="text-nest-cream/70 text-[10px]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Submitting launches WhatsApp to route directly to our table hosts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            
            {/* Name */}
            <div>
              <label htmlFor="res-name" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Your Name *
              </label>
              <input
                id="res-name" {...register("name", { required: "Name is required" })}
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
              <label htmlFor="res-phone" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Phone Number *
              </label>
              <input
                id="res-phone" {...register("phone", { required: "Phone is required" })}
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
              <label htmlFor="res-email" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Email Address *
              </label>
              <input
                id="res-email" {...register("email", {
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
              <label htmlFor="res-guests" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Guests Count *
              </label>
              <select
                id="res-guests" {...register("guests", { required: "Guest count is required" })}
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
              <label htmlFor="res-date" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Date *
              </label>
              <input
                id="res-date" {...register("date", { required: "Date is required" })}
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
              <label htmlFor="res-time" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Time Slot *
              </label>
              <select
                id="res-time" {...register("time", { required: "Time is required" })}
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
              <label htmlFor="res-area" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Seating Area
              </label>
              <select 
                id="res-area" {...register("area")} 
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
              <label htmlFor="res-occasion" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Occasion
              </label>
              <select 
                id="res-occasion" {...register("occasion")} 
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
              <label htmlFor="res-requests" className="block text-nest-gold text-[10px] tracking-[0.2em] uppercase mb-1 font-semibold" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                Special Requests
              </label>
              <textarea
                id="res-requests" {...register("requests")}
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
            <p className="text-nest-cream/70 text-[10px] tracking-wider font-light" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
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
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Request Transmitted
          </h3>
          <p 
            className="text-nest-cream/70 text-xs sm:text-sm max-w-sm mx-auto mb-8 font-light leading-relaxed"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
    </>
  );
}
