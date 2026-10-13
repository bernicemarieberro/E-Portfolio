import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData.ts';
import { CertificationItem } from '../../types/portfolio.ts';

export const CertificationsTab: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Data & Analytics', 'Business & Communication', 'Ethics & Leadership', 'Digital Media'];

  const filteredCerts = certificationsData.filter(cert => {
    return filterCategory === 'All' || cert.credentialCategory === filterCategory;
  });

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Header */}
      <div className="border-b border-[#d8e2eb] dark:border-[#1e2e44] pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2d466f] dark:text-[#adc5d9]">
          <Award className="w-4 h-4" />
          <span>Professional Verification</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
          Certifications & Credentials
        </h1>
        <p className="text-xs sm:text-sm text-[#566c84] dark:text-[#95a7bc] mt-1">
          Accredited credentials across data science, corporate communication, ethical leadership, and visual information design.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filterCategory === cat
                  ? 'bg-[#2d466f] text-white shadow-xs font-semibold'
                  : 'bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:border-[#95b3cd]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl p-6 shadow-sm hover:border-[#95b3cd] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#d8e2eb] dark:bg-[#1a283e] flex items-center justify-center text-[#2d466f] dark:text-[#adc5d9] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#566c84] dark:text-[#95a7bc]">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{cert.issueDate}</span>
                </div>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-[#2d466f] dark:text-[#adc5d9] uppercase tracking-wider">
                  {cert.credentialCategory}
                </span>
                <h3 className="text-lg font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
                  {cert.title}
                </h3>
                <div className="text-xs text-[#6f8399] dark:text-[#7f94aa] mt-0.5">
                  Issued by {cert.issuer}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#42556b] dark:text-[#adc5d9] leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <div className="text-[11px] font-semibold text-[#566c84] dark:text-[#95a7bc]">
                  Competencies Mastered:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsAcquired.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 text-[11px] rounded bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-[#33465b] dark:text-[#c3d1de]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-[#edf2f7] dark:border-[#1e2e44] flex items-center justify-between gap-2">
              <span className="text-[11px] font-mono text-[#6f8399] dark:text-[#7f94aa] truncate">
                ID: {cert.credentialId}
              </span>
              <div className="flex items-center gap-2 shrink-0">
                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-[#2d466f] hover:bg-[#223657] text-white shadow-xs transition-colors"
                  >
                    <span>Verify on Coursera</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-semibold text-[#566c84] dark:text-[#adc5d9] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div 
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-[#121c2d] border border-[#d8e2eb] dark:border-[#1e2e44] rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-xl relative animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-1.5 rounded-md text-[#566c84] dark:text-[#95a7bc] hover:bg-[#edf2f7] dark:hover:bg-[#1a283e] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-[#d8e2eb] dark:bg-[#1a283e] text-[#2d466f] dark:text-[#adc5d9] mx-auto flex items-center justify-center border border-[#d8e2eb] dark:border-[#1e2e44]">
                <Award className="w-7 h-7" />
              </div>

              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Verified Credential
                </div>
                <h3 className="text-xl font-bold text-[#1c2b3e] dark:text-[#f1f5f9] mt-1">
                  {selectedCert.title}
                </h3>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc] mt-1">
                  Issued to <strong>Bernice Marie M. Berro</strong> · {selectedCert.issueDate}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#f6f8fb] dark:bg-[#0c1421] border border-[#d8e2eb] dark:border-[#1e2e44] text-xs text-[#42556b] dark:text-[#adc5d9] text-left leading-relaxed">
                {selectedCert.description}
              </div>

              <div className="text-left space-y-2">
                <div className="text-xs font-semibold text-[#1c2b3e] dark:text-[#f1f5f9]">
                  Verification Details:
                </div>
                <div className="text-xs text-[#566c84] dark:text-[#95a7bc] space-y-1">
                  <div>· Credential ID: <span className="font-mono">{selectedCert.credentialId}</span></div>
                  <div>· Issuer: {selectedCert.issuer}</div>
                  <div>· Status: Officially Completed & Validated by Coursera</div>
                  {selectedCert.verificationUrl && (
                    <div className="pt-1">
                      · Official Verification Link:{' '}
                      <a
                        href={selectedCert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#2d466f] dark:text-[#adc5d9] font-medium underline inline-flex items-center gap-0.5 break-all"
                      >
                        {selectedCert.verificationUrl}
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#2d466f] hover:bg-[#223657] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View on Coursera</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="py-2.5 px-4 rounded-lg border border-[#d8e2eb] dark:border-[#1e2e44] text-[#566c84] dark:text-[#95a7bc] hover:bg-[#f6f8fb] dark:hover:bg-[#1a283e] text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
