import { useState, useEffect } from 'react';
import { Shield, Copyright, BookOpen, Lock, Mail, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

type Tab = 'terms' | 'privacy' | 'copyright' | 'attribution';

const TABS: { id: Tab; label: string; icon: typeof Shield }[] = [
  { id: 'terms',       label: 'Terms of Use',        icon: Shield    },
  { id: 'privacy',     label: 'Privacy Policy',       icon: Lock      },
  { id: 'copyright',   label: 'Copyright',            icon: Copyright },
  { id: 'attribution', label: 'Resource Attribution', icon: BookOpen  },
];

export function Legal() {
  const [active, setActive] = useState<Tab>('terms');

  useEffect(() => {
    document.title = 'Legal & Policies | VEDA';
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-500 mb-2">
          <span>VEDA</span>
          <ChevronRight size={12} />
          <span>Legal</span>
        </div>
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Legal &amp; Policies</h1>
        <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
          VEDA — Vital Education &amp; Data Archive · An initiative of{' '}
          <a href="mailto:contact@dhurta.org" className="text-veda-700 dark:text-veda-400 hover:underline">Dhurta.Org</a>
        </p>
        <p className="mt-0.5 text-xs text-stone-400 dark:text-stone-600">
          Virtual Education Development Association · Last updated: 15 September 2026
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-1 mb-8 bg-stone-100 dark:bg-stone-900 p-1 rounded-xl">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all',
              active === id
                ? 'bg-white dark:bg-stone-800 text-veda-700 dark:text-veda-300 shadow-sm'
                : 'text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-stone-200'
            )}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </div>

      {/* Content panels */}
      <div className="prose prose-stone dark:prose-invert max-w-none prose-sm prose-headings:font-semibold prose-a:text-veda-700 dark:prose-a:text-veda-400">

        {active === 'terms' && (
          <section>
            <h2>Terms of Use</h2>
            <p>
              By accessing or using the VEDA platform at{' '}
              <a href="https://prashantkeshr.github.io/Veda/">https://prashantkeshr.github.io/Veda/</a>{' '}
              (the "Platform"), you agree to these Terms of Use. If you do not agree, please discontinue use immediately.
            </p>

            <h3>1. About the Platform</h3>
            <p>
              VEDA (Vital Education &amp; Data Archive) is a free, non-commercial educational knowledge platform
              operated by the Virtual Education Development Association ("VEDA Association"), an educational
              initiative of Dhurta.Org. The Platform is designed to help students, engineers, and exam
              aspirants access structured learning resources for GATE, JEE, UPSC-ESE, B.Tech, and Diploma
              programmes.
            </p>

            <h3>2. Eligibility &amp; Access</h3>
            <p>
              The Platform is open to anyone for personal, non-commercial educational purposes. No registration
              is required. All user data (notes, bookmarks, progress) is stored locally in your browser and
              is never transmitted to our servers.
            </p>

            <h3>3. Acceptable Use</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Use the Platform for any commercial purpose or for any public display without prior written consent</li>
              <li>Reproduce, copy, resell, or exploit any portion of the Platform's original content</li>
              <li>Attempt to access any restricted administrative area of the Platform</li>
              <li>Use automated tools (bots, scrapers) to harvest content at scale</li>
              <li>Misrepresent affiliation with VEDA Association or Dhurta.Org</li>
            </ul>

            <h3>4. Disclaimer of Accuracy</h3>
            <p>
              Educational content on this Platform is provided in good faith for reference and study purposes.
              VEDA Association makes no warranty, express or implied, regarding the completeness, accuracy,
              or fitness for a particular purpose of any content. Always verify critical information against
              official sources, current syllabi, and authoritative textbooks.
            </p>

            <h3>5. Disclaimer of Liability</h3>
            <p>
              To the fullest extent permitted by applicable law, VEDA Association and Dhurta.Org shall not be
              liable for any direct, indirect, incidental, special, or consequential damages arising from
              your use of the Platform, reliance on its content, or inability to access the Platform.
            </p>

            <h3>6. Modifications to the Platform</h3>
            <p>
              We reserve the right to modify, suspend, or discontinue any part of the Platform at any time
              without notice. We may update these Terms periodically; continued use constitutes acceptance
              of the revised Terms.
            </p>

            <h3>7. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the courts in India.
            </p>

            <h3>8. Contact</h3>
            <p>
              For questions or concerns regarding these Terms, contact us at{' '}
              <a href="mailto:contact@dhurta.org">contact@dhurta.org</a>.
            </p>
          </section>
        )}

        {active === 'privacy' && (
          <section>
            <h2>Privacy Policy</h2>
            <p>
              This Privacy Policy explains how the VEDA Platform handles information. We are committed to
              protecting your privacy. Our core principle: <strong>we do not collect, store, or process
              any personal data on our servers.</strong>
            </p>

            <h3>1. Data We Do Not Collect</h3>
            <p>VEDA does not collect:</p>
            <ul>
              <li>Your name, email address, or any identifying information</li>
              <li>Your study progress, notes, bookmarks, or quiz scores on any server</li>
              <li>IP addresses or device identifiers for tracking purposes</li>
              <li>Browsing behaviour, clickstream data, or usage analytics</li>
            </ul>

            <h3>2. Data Stored Locally in Your Browser</h3>
            <p>
              All personalisation features (bookmarks, study notes, quiz progress, theme preferences,
              planner data) are stored exclusively in your own browser using <code>localStorage</code> and{' '}
              <code>IndexedDB</code>. This data:
            </p>
            <ul>
              <li>Never leaves your device</li>
              <li>Is not accessible to us</li>
              <li>Can be cleared at any time via your browser settings</li>
              <li>Is lost if you clear browser storage or use a different device/browser</li>
            </ul>

            <h3>3. Third-Party Services</h3>
            <p>
              The Platform loads fonts from <strong>Google Fonts</strong> (fonts.googleapis.com and
              fonts.gstatic.com). Google may receive your IP address when fonts are fetched. Please refer
              to{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>{' '}
              for details. No other third-party analytics, tracking, or advertising scripts are used.
            </p>

            <h3>4. GitHub Pages Hosting</h3>
            <p>
              The Platform is hosted on GitHub Pages. GitHub may collect server logs including IP addresses
              as part of normal hosting operations. See{' '}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                GitHub's Privacy Statement
              </a>.
            </p>

            <h3>5. Cookies</h3>
            <p>
              VEDA does not set any cookies. Browser storage (localStorage/IndexedDB) used by the Platform
              is not transmitted to any server and does not constitute a cookie under applicable regulations.
            </p>

            <h3>6. Children's Privacy</h3>
            <p>
              The Platform does not knowingly collect any personal information from children under 13.
              Since we collect no personal data at all, the Platform is safe for use by students of all ages.
            </p>

            <h3>7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy. The "last updated" date at the top of this page will
              reflect any changes. Continued use after changes constitutes acceptance.
            </p>

            <h3>8. Contact</h3>
            <p>
              For privacy-related queries, email{' '}
              <a href="mailto:contact@dhurta.org">contact@dhurta.org</a>.
            </p>
          </section>
        )}

        {active === 'copyright' && (
          <section>
            <h2>Copyright Notice</h2>

            <h3>Original Platform Content</h3>
            <p>
              Copyright &copy; 2024–2026 Virtual Education Development Association (VEDA Association),
              an initiative of <strong>Dhurta.Org</strong>. All rights reserved.
            </p>
            <p>
              The following elements of the Platform are original works owned by VEDA Association:
            </p>
            <ul>
              <li>Platform design, user interface, and visual language</li>
              <li>Original explanatory text, overviews, summaries, and descriptions written by VEDA authors</li>
              <li>The VEDA logo, wordmark, and brand assets</li>
              <li>Data architecture, knowledge graph structure, and content organisation</li>
              <li>Software source code powering the Platform</li>
            </ul>

            <h3>Permitted Uses</h3>
            <p>You may:</p>
            <ul>
              <li>Access, read, and use Platform content for personal, non-commercial study purposes</li>
              <li>Share links to VEDA pages for educational discussion</li>
              <li>Quote brief excerpts (no more than a paragraph) with clear attribution to VEDA / Dhurta.Org and a link back</li>
            </ul>

            <h3>Prohibited Uses</h3>
            <p>Without prior written permission from VEDA Association, you may not:</p>
            <ul>
              <li>Reproduce, republish, or redistribute substantial portions of Platform content</li>
              <li>Use VEDA content in commercial products, paid courses, or monetised publications</li>
              <li>Create derivative works based on original VEDA content</li>
              <li>Use the VEDA logo, name, or brand in any way that implies endorsement</li>
              <li>Mirror or cache the Platform for redistribution</li>
            </ul>

            <h3>DMCA / Takedown Requests</h3>
            <p>
              If you believe any content on this Platform infringes your copyright, please send a written
              notice to <a href="mailto:contact@dhurta.org">contact@dhurta.org</a> with:
            </p>
            <ul>
              <li>Identification of the copyrighted work claimed to be infringed</li>
              <li>The specific URL(s) of the infringing content</li>
              <li>Your contact information and a statement of good faith belief</li>
            </ul>
            <p>
              We will review all notices promptly and act in accordance with applicable law.
            </p>

            <h3>Trademark</h3>
            <p>
              "VEDA", "Vital Education &amp; Data Archive", "Virtual Education Development Association",
              and "Dhurta.Org" are names and marks of their respective owners. Unauthorised use is
              prohibited.
            </p>
          </section>
        )}

        {active === 'attribution' && (
          <section>
            <h2>Resource Attribution</h2>
            <p>
              VEDA is an educational reference platform. Some content on the Platform references, summarises,
              or is inspired by third-party educational materials. We acknowledge the following:
            </p>

            <h3>Exam Authorities</h3>
            <p>
              Syllabus content, exam patterns, and question structures referenced for the following exams
              are the intellectual property of their respective conducting bodies:
            </p>
            <ul>
              <li><strong>GATE (Graduate Aptitude Test in Engineering)</strong> — Indian Institute of Technology (IIT) on behalf of the Ministry of Education, Government of India</li>
              <li><strong>JEE Main &amp; Advanced</strong> — National Testing Agency (NTA) / Joint Seat Allocation Authority (JoSAA)</li>
              <li><strong>UPSC Engineering Services Examination (ESE/IES)</strong> — Union Public Service Commission (UPSC), Government of India</li>
            </ul>
            <p>
              VEDA is not affiliated with, endorsed by, or an official resource of any of these bodies.
              For official syllabi and question papers, always refer to the respective official websites.
            </p>

            <h3>Standard Textbooks &amp; References</h3>
            <p>
              Topic content on VEDA is authored by our team and may draw upon widely used engineering
              textbooks as reference sources. Concepts, formulae, and standard results in the public
              domain of engineering education are referenced in accordance with fair use / fair dealing
              principles for educational purposes. No substantial portions of any copyrighted text are
              reproduced.
            </p>
            <p>Standard references frequently cited in engineering education include:</p>
            <ul>
              <li>Calculus — Thomas &amp; Finney, Kreyszig (Advanced Engineering Mathematics)</li>
              <li>Thermodynamics — Nag, Cengel &amp; Boles, Sonntag &amp; Borgnakke</li>
              <li>Fluid Mechanics — White, Munson, Modi &amp; Seth</li>
              <li>Strength of Materials — Sadhu Singh, Gere &amp; Timoshenko, R.K. Bansal</li>
              <li>Engineering Physics — H.K. Malik, Halliday, Resnick &amp; Walker</li>
            </ul>
            <p>
              These works remain the property of their respective authors and publishers. Purchasing
              these books is strongly encouraged for in-depth study.
            </p>

            <h3>Open Educational Resources</h3>
            <p>
              Where VEDA content incorporates material from open-licensed sources (Creative Commons or
              similar), appropriate attribution is provided within the relevant content page. If you
              believe attribution is missing or incorrect, please notify us at{' '}
              <a href="mailto:contact@dhurta.org">contact@dhurta.org</a>.
            </p>

            <h3>Images &amp; Media</h3>
            <p>
              Diagrams and illustrations on the Platform are either original works by VEDA authors or
              referenced from public domain / Creative Commons sources. Technical diagrams depicting
              standard engineering concepts (thermodynamic cycles, stress-strain curves, etc.) represent
              well-known scientific knowledge and are not claimed as original creative works.
            </p>

            <h3>Fair Use Declaration</h3>
            <p>
              VEDA is a non-commercial, educational platform. Any use of third-party material is strictly
              for educational illustration purposes under the fair use / fair dealing doctrine. VEDA does
              not derive commercial benefit from any referenced material. If you are a rights holder and
              have concerns, please contact <a href="mailto:contact@dhurta.org">contact@dhurta.org</a> and
              we will address your concerns promptly.
            </p>
          </section>
        )}

      </div>

      {/* Contact footer */}
      <div className="mt-12 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="text-sm font-medium text-stone-900 dark:text-stone-100">Virtual Education Development Association</div>
          <div className="text-xs text-stone-500 dark:text-stone-500 mt-0.5">An educational initiative of Dhurta.Org</div>
        </div>
        <a
          href="mailto:contact@dhurta.org"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-veda-50 dark:bg-veda-900/30 text-veda-700 dark:text-veda-300 text-sm font-medium hover:bg-veda-100 dark:hover:bg-veda-900/50 transition-colors"
        >
          <Mail size={14} />
          contact@dhurta.org
        </a>
      </div>
    </div>
  );
}
