import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Copy, Check, ArrowUpRight, Send, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData.ts';

interface FooterProps {
  isHome?: boolean;
  onNavigate?: (tab: any) => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isHome = false, onNavigate, onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  // EMPHASIZED FOOTER FOR HOME / PROFILE PAGE
  if (isHome) {
    return (
      <footer className="mt-20 border-t border-[#d8e2eb] dark:border-[#1e2e44] bg-gradient-to-b from-transparent via-[#f0f4f9] to-[#d8e2eb]/40 dark:via-[#0c1421] dark:to-[#080d15] py-16 px-6 lg:px-12 transition-colors">
        <div className="max-w-6xl mx-auto">
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
              Get in Touch & Inquiries
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1c2b3e] dark:text-[#f1f5f9] mt-2 mb-4">
              Let’s Connect for Future Opportunities
            </h2>
            <p className="text-sm lg:text-base text-[#566c84] dark:text-[#95a7bc] leading-relaxed">
              Open to corporate financial analyst roles, accounting information systems advisory, and graduate programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* Direct Contact Cards */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-6 shadow-sm hover:border-[#95b3cd] transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-[#566c84] dark:text-[#95a7bc] font-medium">Primary Email</div>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-base font-semibold text-[#1c2b3e] dark:text-[#f1f5f9] hover:text-[#2d466f] dark:hover:text-[#adc5d9] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                      <div className="text-xs text-[#6f8399] dark:text-[#7f94aa] mt-0.5">
                        Academic: {personalInfo.alternateEmail}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => copyToClipboard(personalInfo.email, 'email')}
                      className="px-3 py-1.5 text-xs font-medium bg-[#edf2f7] hover:bg-[#d8e2eb] dark:bg-[#1a283e] dark:hover:bg-[#253954] text-[#2d466f] dark:text-[#adc5d9] rounded-md flex items-center gap-1.5 transition-colors cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      {copiedEmail ? 'Copied' : 'Copy'}
                    </button>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="px-3 py-1.5 text-xs font-medium bg-[#2d466f] hover:bg-[#223657] text-white rounded-md flex items-center gap-1 transition-colors"
                    >
                      Write <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                      className="text-xs text-[#566c84] dark:text-[#95a7bc] hover:text-[#2d466f] dark:hover:text-[#f1f5f9] flex items-center gap-1 cursor-pointer"
                    >
                      {copiedPhone ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                      {copiedPhone ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">Phone / Mobile</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-sm font-semibold text-[#1c2b3e] dark:text-[#f1f5f9] hover:underline">
                    {personalInfo.formattedPhone}
                  </a>
                </div>

                {/* LinkedIn */}
                <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <a
                      href={personalInfo.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#2d466f] dark:text-[#adc5d9] hover:underline flex items-center gap-0.5"
                    >
                      Profile <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">LinkedIn Network</div>
                  <a 
                    href={personalInfo.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#1c2b3e] dark:text-[#f1f5f9] truncate block"
                  >
                    bernice-marie-berro
                  </a>
                </div>
              </div>

              {/* Location & Institution Banner */}
              <div className="bg-[#f0f4f9] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#566c84] dark:text-[#95a7bc]">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#2d466f] dark:text-[#adc5d9] shrink-0" />
                  <span>{personalInfo.location} · Mapúa University, Makati Campus</span>
                </div>
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" /> View Official Resume
                  </button>
                )}
              </div>
            </div>

            {/* Quick Interactive Message Note */}
            <div className="lg:col-span-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-xl p-6 shadow-sm">
              <h3 className="text-base font-semibold text-[#1c2b3e] dark:text-[#f1f5f9] mb-1">
                Send a Direct Note
              </h3>
              <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mb-4">
                Leave a quick message or request a portfolio presentation.
              </p>

              {messageSent ? (
                <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs text-center space-y-1">
                  <div className="font-semibold">Message Simulated Successfully!</div>
                  <div>Thank you for reaching out to Bernice Marie Berro.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Jane Doe (Recruiter / Lead)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">Message *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Discussing an AIS role or project opportunity..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-md bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-md bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-medium flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom Attribution */}
          <div className="pt-8 border-t border-[#d8e2eb] dark:border-[#1e2e44] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#566c84] dark:text-[#95a7bc]">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">{personalInfo.fullName}</span>
              <span aria-hidden="true">·</span>
              <span>Mapúa University BS AIS</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2027</span>
            </div>
            <div className="flex items-center gap-4">
              <span>{personalInfo.email}</span>
              <span aria-hidden="true">·</span>
              <span>{personalInfo.formattedPhone}</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  // STANDARD REFINED FOOTER FOR ALL OTHER TABS
  return (
    <footer className="mt-16 border-t border-[#d8e2eb] dark:border-[#1e2e44] bg-[#f8fafc] dark:bg-[#0c1421] py-8 px-6 lg:px-12 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <div className="text-sm font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">
            {personalInfo.fullName}
          </div>
          <div className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-0.5">
            BS Accounting Information Systems · Mapúa University
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-[#566c84] dark:text-[#adc5d9]">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-[#2d466f] dark:hover:text-[#f1f5f9] flex items-center gap-1 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" /> {personalInfo.email}
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="hover:text-[#2d466f] dark:hover:text-[#f1f5f9] flex items-center gap-1 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" /> {personalInfo.formattedPhone}
          </a>
          <a
            href={personalInfo.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2d466f] dark:hover:text-[#f1f5f9] flex items-center gap-1 transition-colors"
          >
            <Linkedin className="w-3.5 h-3.5" /> LinkedIn
          </a>
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="text-[#2d466f] dark:text-[#adc5d9] font-medium hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Resume
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};
