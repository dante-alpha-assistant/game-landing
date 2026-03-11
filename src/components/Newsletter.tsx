"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="newsletter" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-void-purple/5 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-void-purple/30 bg-void-purple/10 mb-8">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs tracking-[0.2em] uppercase text-void-muted font-medium">
            Pre-registration Open
          </span>
        </div>

        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Be the First to{" "}
          <span className="bg-gradient-to-r from-void-glow to-void-cyan bg-clip-text text-transparent">
            Hear the Echo
          </span>
        </h2>

        <p className="text-void-muted leading-relaxed mb-10 max-w-xl mx-auto">
          Sign up for exclusive access to the beta, behind-the-scenes content,
          and early pre-order bonuses. Join over 500,000 Driftborn waiting for
          launch.
        </p>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-4 rounded-full bg-void-surface border border-void-purple/20 text-white placeholder:text-void-muted/50 focus:outline-none focus:border-void-glow focus:ring-1 focus:ring-void-glow/30 transition-all text-sm"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-void-purple to-void-blue text-white font-bold rounded-full text-sm tracking-wider uppercase hover:shadow-lg hover:shadow-void-purple/30 hover:scale-105 transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-green-500/10 border border-green-500/30">
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-green-300 text-sm font-medium">
              Welcome, Driftborn. We&apos;ll be in touch.
            </span>
          </div>
        )}

        <p className="text-xs text-void-muted/50 mt-4">
          No spam. Unsubscribe anytime. Your data stays in this galaxy.
        </p>
      </div>
    </section>
  );
}
