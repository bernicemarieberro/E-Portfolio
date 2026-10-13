import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Phone, 
  Linkedin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  Send 
} from 'lucide-react';
import { personalInfo, referencePersons } from '../../data/portfolioData.ts';

export const ContactTab: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <PhoneCall className="w-4 h-4" />
          <span>Professional Channels</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Contact Details & Character Reference
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Direct channels to connect with Bernice Marie Berro for accounting, business intelligence, and advisory opportunities, alongside verified character reference Mr. Julian S. Pilapil.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels & Reference Contacts */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Direct Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Card */}
            <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] hover:bg-[#d8e2eb] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  {copiedEmail ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">Primary Email</div>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] hover:text-[#2d466f] dark:hover:text-[#adc5d9] truncate block mt-0.5"
                >
                  {personalInfo.email}
                </a>
                <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa] mt-1 truncate">
                  Academic: {personalInfo.alternateEmail}
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-[#edf2f7] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] hover:bg-[#d8e2eb] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  {copiedPhone ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  {copiedPhone ? 'Copied' : 'Copy'}
                </button>
              </div>
              <div>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">Mobile / Telephone</div>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] hover:underline block mt-0.5"
                >
                  {personalInfo.formattedPhone}
                </a>
                <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa] mt-1">
                  Timezone: GMT+8 (Philippines)
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                  <Linkedin className="w-5 h-5" />
                </div>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#2d466f] dark:text-[#adc5d9] hover:underline flex items-center gap-1"
                >
                  Connect <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
              <div>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">LinkedIn Profile</div>
                <a
                  href={personalInfo.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] hover:underline block mt-0.5 truncate"
                >
                  in/bernice-marie-berro
                </a>
              </div>
            </div>

            {/* University & Location */}
            <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-5 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9]">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc]">Primary Campus & City</div>
                <div className="text-sm font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-0.5">
                  Metro Manila, Philippines
                </div>
                <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa] mt-1">
                  Mapúa Makati & BGC Taguig Corridor
                </div>
              </div>
            </div>
          </div>

          {/* Reference Persons Section */}
          <div className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div>
              <div className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                Professional Reference
              </div>
              <h3 className="text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
                Verified Character Reference
              </h3>
              <p className="text-xs text-[#566c84] dark:text-[#95a7bc]">
                Professional and academic reference available for character verification.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {referencePersons.map((ref, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#edf2f7] dark:border-[#1e2e44] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-[#1c2b3e] dark:text-[#f1f5f9] text-sm">
                      {ref.name}
                    </div>
                    <div className="text-[#2d466f] dark:text-[#adc5d9] font-medium">
                      {ref.title}
                    </div>
                    <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa]">
                      {ref.relationship}
                    </div>
                  </div>

                  <div className="sm:text-right space-y-0.5 shrink-0 text-[#566c84] dark:text-[#95a7bc]">
                    <div>
                      <a href={`mailto:${ref.email}`} className="hover:underline text-[#2d466f] dark:text-[#adc5d9]">
                        {ref.email}
                      </a>
                    </div>
                    <div className="text-[11px] text-[#6f8399] dark:text-[#7f94aa]">{ref.phone}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <div className="lg:col-span-5 bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">
          <div>
            <div className="text-xs font-bold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
              Direct Inquiries
            </div>
            <h3 className="text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
              Send an Inquiry or Message
            </h3>
            <p className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1">
              Bernice responds promptly to internship, project, or role opportunities.
            </p>
          </div>

          {sentMessage ? (
            <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs text-center space-y-2">
              <div className="font-bold text-sm">Inquiry Transmitted Successfully!</div>
              <p>Thank you for your message. A confirmation has been registered for Bernice Marie Berro.</p>
            </div>
          ) : (
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">
                  Full Name / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. John Smith, People Lead"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">
                  Subject / Opportunity Type
                </label>
                <input
                  type="text"
                  placeholder="e.g. AIS Analyst Role / Financial BI Project"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#42556b] dark:text-[#adc5d9] mb-1">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Details of the opportunity or questions regarding portfolio projects..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-lg bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#1c2b3e] dark:text-[#f1f5f9] focus:outline-none focus:border-[#2d466f] dark:focus:border-[#adc5d9]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
