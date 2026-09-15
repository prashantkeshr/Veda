import { useSEO } from '../hooks/useSEO';
import { Link } from 'react-router-dom';
import { Mail, Bug, FileText, MessageSquare, Copyright, ChevronRight } from 'lucide-react';

const TOPICS = [
  {
    icon: Bug,
    label: 'Bug or Technical Issue',
    desc: 'A page is broken, data looks wrong, or something isn\'t working.',
    subject: 'Bug Report',
  },
  {
    icon: FileText,
    label: 'Content Correction',
    desc: 'A formula, explanation, or fact on the platform needs to be corrected.',
    subject: 'Content Correction',
  },
  {
    icon: MessageSquare,
    label: 'Suggestion or Feedback',
    desc: 'An idea for a new feature, subject, topic, or improvement.',
    subject: 'Suggestion',
  },
  {
    icon: Copyright,
    label: 'Copyright / DMCA',
    desc: 'You believe content on VEDA infringes your copyright.',
    subject: 'Copyright Notice',
  },
  {
    icon: Mail,
    label: 'General Enquiry',
    desc: 'Anything else — partnership, collaboration, media, or general questions.',
    subject: 'General Enquiry',
  },
];

export function Contact() {
  useSEO('Contact Us', 'Get in touch with the VEDA team at contact@dhurta.org — content corrections, bug reports, copyright notices, or general enquiries.');

  return (
    <div className="max-w-2xl mx-auto">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-500 mb-6">
        <Link to="/" className="hover:text-stone-800 dark:hover:text-stone-200">Home</Link>
        <ChevronRight size={12} />
        <span>Contact</span>
      </div>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Contact Us</h1>
        <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
          We're a small volunteer team. Email is the best way to reach us — we read everything and
          aim to respond within 3–5 working days.
        </p>
      </div>

      {/* Primary contact card */}
      <div className="bg-veda-50 dark:bg-veda-900/20 border border-veda-200 dark:border-veda-800/40 rounded-2xl p-6 mb-8 text-center">
        <div className="w-12 h-12 bg-veda-100 dark:bg-veda-900/40 rounded-full flex items-center justify-center mx-auto mb-3">
          <Mail size={20} className="text-veda-700 dark:text-veda-400" />
        </div>
        <div className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">contact@dhurta.org</div>
        <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
          Virtual Education Development Association · Dhurta.Org
        </p>
        <a
          href="mailto:contact@dhurta.org"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-veda-600 hover:bg-veda-700 text-white text-sm font-medium transition-colors"
        >
          <Mail size={14} /> Send an Email
        </a>
      </div>

      {/* Topic shortcuts */}
      <div className="mb-8">
        <h2 className="text-sm font-semibold text-stone-700 dark:text-stone-300 uppercase tracking-wide mb-4">
          What's your message about?
        </h2>
        <div className="space-y-2">
          {TOPICS.map(({ icon: Icon, label, desc, subject }) => (
            <a
              key={subject}
              href={`mailto:contact@dhurta.org?subject=[VEDA] ${encodeURIComponent(subject)}`}
              className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 hover:border-veda-300 dark:hover:border-veda-700 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-stone-800 flex items-center justify-center flex-shrink-0 text-stone-500 dark:text-stone-400 group-hover:bg-veda-50 group-hover:text-veda-700 dark:group-hover:bg-veda-900/30 dark:group-hover:text-veda-400 transition-colors">
                <Icon size={15} />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-stone-800 dark:text-stone-200 text-sm group-hover:text-veda-700 dark:group-hover:text-veda-300 transition-colors">
                  {label}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{desc}</div>
              </div>
              <Mail size={13} className="flex-shrink-0 text-stone-400 dark:text-stone-600 group-hover:text-veda-500 transition-colors mt-1 ml-auto" />
            </a>
          ))}
        </div>
      </div>

      {/* Response note */}
      <div className="text-center text-xs text-stone-400 dark:text-stone-600 space-y-1">
        <p>We are a volunteer initiative. Response time is typically 3–5 working days.</p>
        <p>
          For copyright / DMCA notices, see our{' '}
          <Link to="/legal" className="text-veda-600 dark:text-veda-500 hover:underline">Legal &amp; Policies</Link>{' '}
          page for the full process.
        </p>
      </div>

    </div>
  );
}
