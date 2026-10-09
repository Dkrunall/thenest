"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for subscribing to The Nest's newsletter!");
      }}
      className="w-full"
    >
      <div className="relative flex items-center border-b border-nest-gold/30 focus-within:border-nest-gold transition-colors duration-300 py-1">
        <input
          type="email"
          aria-label="Your email address"
          autoComplete="email"
          placeholder="Your Email"
          required
          className="bg-transparent text-xs font-light text-nest-cream placeholder-nest-cream/40 focus:outline-none w-full pr-10 py-1"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        />
        <button
          type="submit"
          className="absolute right-0 text-nest-gold hover:text-nest-gold-light transition-colors cursor-none p-1"
          aria-label="Subscribe"
        >
          <span className="text-lg font-medium">→</span>
        </button>
      </div>
    </form>
  );
}
