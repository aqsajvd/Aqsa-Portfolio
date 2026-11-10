import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, ArrowUpRight, Send, CheckCircle2, MessageCircle, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const whatsappNumber = PERSONAL_INFO.whatsapp.replace(/[^0-9]/g, '');

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="py-24 sm:py-32 border-b border-[#858A65]/25 dark:border-[#858A65]/20 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Inquiries & Quick Channels (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-11 h-11 rounded-2xl overflow-hidden border border-[#858A65]/30 shrink-0 shadow-xs bg-[#242520]">
                  <img
                    src={PERSONAL_INFO.portraitImage}
                    alt="Aqsa Javed"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#242520] dark:text-[#EDE9DC]">
                    Aqsa Javed
                  </div>
                  <div className="text-[11px] font-mono text-[#263B2D] dark:text-[#D9D2E8]">
                    Direct Inquiries & Research Dialogue
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[#263B2D] dark:text-[#D9D2E8] font-bold">
                  07 / Dialogue
                </span>
                <span className="text-[#858A65]">·</span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#D9D2E8] text-[#242520] text-[10px] font-mono font-medium">
                  Open for Collaborations
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-[#242520] dark:text-[#EDE9DC] leading-[0.95]">
                Let’s create something <span className="italic font-light text-[#263B2D] dark:text-[#D9D2E8]">thoughtful</span> together.
              </h2>
            </div>

            <p className="text-base text-[#242520]/80 dark:text-[#EDE9DC]/80 leading-relaxed font-sans font-light">
              Whether you’re interested in collaborating on spatial interaction research, editorial publication design, typography systems, or exploring full-time product design opportunities—I’d love to connect.
            </p>

            {/* Quick Action Channels Grid with Hover Effects */}
            <div className="space-y-4">
              {/* WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-5 sm:p-6 rounded-3xl bg-[#263B2D] text-[#F5F2E9] border border-[#263B2D] flex items-center justify-between hover:bg-[#1E201C] hover:shadow-2xl hover:shadow-[#263B2D]/20 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 group shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F2E9] text-[#263B2D] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#D9D2E8] font-semibold block">
                      Fastest Direct Response
                    </span>
                    <strong className="text-base font-semibold text-[#F5F2E9]">
                      WhatsApp Desk ({PERSONAL_INFO.whatsapp})
                    </strong>
                  </div>
                </div>
                <ArrowUpRight size={18} className="text-[#D9D2E8] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>

              {/* Email Box with One-Click Copy */}
              <div className="p-6 rounded-3xl bg-[#EDE9DC]/80 dark:bg-[#1E201C]/80 border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-xs hover:border-[#263B2D] dark:hover:border-[#D9D2E8] transition-colors duration-200 space-y-4">
                <div>
                  <span className="text-xs text-[#858A65] dark:text-[#A2A882] font-mono uppercase tracking-wider block mb-1">
                    Direct Email
                  </span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="font-serif text-xl sm:text-2xl font-normal text-[#242520] dark:text-[#EDE9DC] hover:text-[#263B2D] dark:hover:text-[#D9D2E8] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>

                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-[#263B2D] text-[#F5F2E9] hover:bg-[#1E201C] transition-colors shrink-0 active:scale-95 cursor-pointer shadow-xs"
                    >
                      {copied ? <Check size={13} className="text-[#D9D2E8]" /> : <Copy size={13} />}
                      <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                    </button>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#858A65]/20 flex items-center justify-between text-xs text-[#858A65] dark:text-[#A2A882] font-mono">
                  <span>University Academic Inquiries:</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.universityEmail}`}
                    className="text-[#263B2D] dark:text-[#D9D2E8] hover:underline"
                  >
                    {PERSONAL_INFO.universityEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links with Hover Elevation */}
            <div className="pt-2">
              <span className="text-xs text-[#858A65] dark:text-[#A2A882] font-mono uppercase tracking-wider block mb-3 font-semibold">
                Professional Channels
              </span>
              <div className="flex flex-wrap gap-3 text-xs font-medium">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#EDE9DC]/80 dark:bg-[#1E201C]/80 border border-[#858A65]/30 text-[#242520] dark:text-[#EDE9DC] hover:bg-[#263B2D] hover:text-[#F5F2E9] hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 transition-all duration-200 shadow-2xs"
                >
                  <Linkedin size={14} />
                  <span>LinkedIn (aqsa-javed89)</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#EDE9DC]/80 dark:bg-[#1E201C]/80 border border-[#858A65]/30 text-[#242520] dark:text-[#EDE9DC] hover:bg-[#263B2D] hover:text-[#F5F2E9] hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 transition-all duration-200 shadow-2xs"
                >
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href={PERSONAL_INFO.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-full bg-[#EDE9DC]/80 dark:bg-[#1E201C]/80 border border-[#858A65]/30 text-[#242520] dark:text-[#EDE9DC] hover:bg-[#263B2D] hover:text-[#F5F2E9] hover:-translate-y-0.5 active:scale-95 inline-flex items-center gap-2 transition-all duration-200 shadow-2xs"
                >
                  <span>Behance</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Editorial Contact Form (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EDE9DC]/90 dark:bg-[#1E201C]/90 border border-[#858A65]/30 dark:border-[#858A65]/25 shadow-xl hover:shadow-2xl transition-all duration-300">
              <h3 className="font-serif text-3xl font-normal text-[#242520] dark:text-[#EDE9DC] mb-1">
                Dispatch a Message
              </h3>
              <p className="text-xs text-[#858A65] dark:text-[#A2A882] mb-8 font-light">
                Fill in the details below and I will respond to your communication within 24 hours.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#263B2D] text-[#F5F2E9] flex items-center justify-center shadow-md">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-serif text-2xl font-normal text-[#242520] dark:text-[#EDE9DC]">
                    Message Received!
                  </h4>
                  <p className="text-xs text-[#242520]/75 dark:text-[#EDE9DC]/75 max-w-xs mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-[#242520] dark:text-[#EDE9DC] font-semibold">{formData.name}</strong>. I will review your inquiry and reply to <span className="text-[#263B2D] dark:text-[#D9D2E8] font-mono font-medium">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs text-[#263B2D] dark:text-[#D9D2E8] font-semibold underline cursor-pointer"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                  <div>
                    <label className="block text-[#242520] dark:text-[#EDE9DC] font-medium mb-2 font-mono uppercase tracking-wider text-[11px]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#858A65]/30 dark:border-[#858A65]/25 bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#263B2D]/50 focus:border-[#263B2D] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#242520] dark:text-[#EDE9DC] font-medium mb-2 font-mono uppercase tracking-wider text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@studio.design"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#858A65]/30 dark:border-[#858A65]/25 bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#263B2D]/50 focus:border-[#263B2D] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[#242520] dark:text-[#EDE9DC] font-medium mb-2 font-mono uppercase tracking-wider text-[11px]">
                      Project Details / Inquiry *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your spatial publication, in-cabin system, research collaboration, or product design opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl border border-[#858A65]/30 dark:border-[#858A65]/25 bg-[#F5F2E9] dark:bg-[#242520] text-[#242520] dark:text-[#EDE9DC] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#263B2D]/50 focus:border-[#263B2D] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#263B2D] hover:bg-[#1E201C] text-[#F5F2E9] font-medium text-xs tracking-wider uppercase transition-all duration-200 hover:-translate-y-0.5 active:scale-95 inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <span>Transmit Message</span>
                    <Send size={13} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

