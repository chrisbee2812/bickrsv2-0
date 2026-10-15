import ConsentStatus from '../components/consent-status';

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-black text-white uppercase italic">Cookie Policy</h1>
            <p className="text-slate-400 max-w-2xl leading-relaxed">Last updated: 13 October 2026</p>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">1. Introduction</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              This Cookie Policy explains how my website, bickrs.com (&quot;I&quot;, &quot;me&quot;, or &quot;my&quot;), uses cookies and similar technologies. 
              I am committed to protecting your privacy and ensuring you have an informed choice about your cookie preferences. 
              This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Privacy and Electronic Communications Regulations (PECR).
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">2. What are cookies?</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. 
              They are widely used to make websites work more efficiently, enhance user experience, and provide information to site owners.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">3. How I use cookies</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              I use only one category of cookies: <strong>analytics cookies</strong> via Google Analytics. These help me understand how visitors interact with my website, 
              allowing me to improve content and user experience. I do not use any marketing, advertising, or social media cookies.
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Google Analytics uses cookies to collect information such as:
            </p>
            <ul className="list-disc list-inside mb-2 text-slate-400 max-w-2xl leading-relaxed italic">
              <li>Pages you visit and time spent on each page</li>
              <li>How you arrived at our site (referral source)</li>
              <li>Technical information about your device and browser (e.g., operating system, screen resolution)</li>
              <li>General geographic location (country or city level, based on IP address – but IP addresses are anonymised)</li>
            </ul>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              This data is aggregated and anonymised; it does not identify you personally. I use it solely for statistical analysis.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">4. Cookies I use</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              The following Google Analytics cookies may be set if you consent:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-600">
                    <th className="border border-gray-300 px-4 py-2 text-amber-300 text-left text-xl font-bold mt-6 mb-2">Cookie name</th>
                    <th className="border border-gray-300 px-4 py-2 text-amber-300 text-left text-xl font-bold mt-6 mb-2">Purpose</th>
                    <th className="border border-gray-300 px-4 py-2 text-amber-300 text-left text-xl font-bold mt-6 mb-2">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed"><code>_ga</code></td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">Used to distinguish users.</td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">2 years</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed"><code>_gid</code></td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">Used to distinguish users.</td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">24 hours</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed"><code>_gat</code></td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">Used to throttle request rate (limits data collection on high‑traffic sites).</td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">1 minute</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed"><code>_ga_&lt;container-id&gt;</code></td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">Used to persist session state.</td>
                    <td className="border border-gray-300 px-4 py-2 text-slate-400 max-w-2xl leading-relaxed">2 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              For more information on Google Analytics cookies, visit{' '}
              <a
                href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google&apos;s official documentation
              </a>.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">5. Your consent</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Under UK law, I must obtain your consent before setting any non‑essential cookies. When you first visit our website, a banner appears asking you to accept or decline analytics cookies. 
              Your choice is stored and respected for future visits.
            </p>
            <ul className="list-disc list-inside mb-2 text-slate-400 max-w-2xl leading-relaxed italic">
              <li>If you <strong>accept</strong>, we enable Google Analytics cookies as described above.</li>
              <li>If you <strong>decline</strong> or close the banner without choosing, no analytics cookies will be set.</li>
            </ul>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              You can change your preference at any time by clicking the &quot;Change cookie settings&quot; link in the footer of this website (or by clearing your cookies and reloading the site).
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              My consent mechanism uses Google Consent Mode, which signals your choice to Google and ensures that no tracking occurs until you have consented.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">6. Managing cookies in your browser</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              You can also control cookies through your browser settings. Most browsers allow you to:
            </p>
            <ul className="list-disc list-inside mb-2 text-slate-400 max-w-2xl leading-relaxed italic">
              <li>View what cookies are stored and delete them individually</li>
              <li>Block third‑party cookies</li>
              <li>Block all cookies</li>
              <li>Clear all cookies when you close the browser</li>
            </ul>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Please note that if you disable all cookies, parts of this website may not function properly. However, you will still be able to access core content.
            </p>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              For detailed instructions, refer to your browser’s help section:
            </p>
            <ul className="list-disc list-inside mb-2 text-slate-400 max-w-2xl leading-relaxed italic">
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Chrome</a>
              </li>
              <li>
                <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Firefox</a>
              </li>
              <li>
                <a href="https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Safari</a>
              </li>
              <li>
                <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Edge</a>
              </li>
            </ul>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">7. Data transfers</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Google Analytics is operated by Google LLC, which may process your personal data (e.g., anonymised IP address) in the United States. 
              The UK has adequacy regulations for certain countries; however, the US is not currently covered. Google relies on 
              <a href="https://ec.europa.eu/info/law/law-topic/data-protection/international-dimension-data-protection/standard-contractual-clauses-scc_en" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline"> Standard Contractual Clauses (SCCs)</a> 
              approved by the European Commission and adopted for the UK to ensure an adequate level of data protection. 
              By consenting to analytics cookies, you acknowledge that your data may be transferred to and processed in the US under these safeguards.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">8. Your rights</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside mb-2 text-slate-400 max-w-2xl leading-relaxed italic">
              <li>Withdraw your consent at any time (as described in section 5).</li>
              <li>Request access to the personal data I hold about you.</li>
              <li>Request erasure of your personal data (where applicable).</li>
              <li>Lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe I have not complied with data protection law.</li>
            </ul>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              Since I only collect anonymised data through Google Analytics, it is not possible to identify you or fulfil individual rights requests based on that data. 
              However, if you have any concerns, please contact me using the details below.
            </p>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">9. Contact me</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              If you have any questions about this Cookie Policy or our data practices, please contact me at:
            </p>
            <address className="not-italic mt-2">
              <a href="https://www.bickrs.com/contact" className="text-blue-600 underline">www.bickrs.com</a><br />
              Email: <a href="mailto:chris@bickrs.com" className="text-blue-600 underline">chris@bickrs.com</a><br />
            </address>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">10. Changes to this policy</h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
              I may update this Cookie Policy from time to time to reflect changes in my practices or legal requirements. 
              The &quot;Last updated&quot; date at the top of this page will indicate when it was last revised. 
              I encourage you to review this page periodically.
            </p>
            <section className="mt-8">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Your current consent</h2>

              <div className="text-slate-400 max-w-2xl leading-relaxed">
                <ConsentStatus />
              </div>

              <p className="text-slate-400 max-w-2xl leading-relaxed">
                You can change your consent at any time using the button above.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}