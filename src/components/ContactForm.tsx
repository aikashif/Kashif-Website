import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '../data/portfolioData';

// Netlify Forms finds this form in the pre-rendered HTML at deploy time
// (data-netlify) and stores each submission. The hidden "bot-field" is a
// honeypot: people never fill it, spam bots usually do.
const FORM_NAME = 'contact';

const TOPICS = [
  'Academic or research collaboration',
  'Media, podcast or press request',
  'Speaking or corporate training',
  'Student inquiry',
  'Other',
];

type Status = 'idle' | 'sending' | 'sent' | 'error';

const inputClass =
  'w-full px-3 py-2 text-sm rounded-lg bg-[#FFF8F5] border border-[#E2BFB2] text-[#1E1B19] placeholder:text-[#8E7166] focus:outline-none focus:border-[#A33900] focus:ring-2 focus:ring-[#A33900]/20';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) throw new Error(`Form returned ${res.status}`);
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2BFB2]/60 shadow-xs mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 text-[#A33900] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A33900]" />
            <span className="text-xs font-extrabold tracking-widest uppercase">SEND A MESSAGE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E1B19] tracking-tight">Get in touch</h2>
          <p className="text-sm text-[#5A4138] mt-2 leading-relaxed">
            For research collaboration, media requests, talks or student questions. I reply to most messages within a few working days.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#A33900] hover:underline break-all"
          >
            <Mail className="w-4 h-4 shrink-0" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="lg:col-span-3">
          {status === 'sent' ? (
            <div role="status" className="h-full flex flex-col items-center justify-center text-center p-6 rounded-xl bg-[#FAF2EE] border border-[#E2BFB2]/60">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mb-2" />
              <p className="text-base font-extrabold text-[#1E1B19]">Thank you. Your message is sent.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-3 text-xs font-bold text-[#A33900] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Do not fill this in: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <label className="block">
                <span className="text-xs font-bold text-[#5A4138]">Name</span>
                <input name="name" required maxLength={100} autoComplete="name" className={`${inputClass} mt-1`} />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-[#5A4138]">Email</span>
                <input name="email" type="email" required maxLength={200} autoComplete="email" className={`${inputClass} mt-1`} />
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-bold text-[#5A4138]">Topic</span>
                <select name="topic" required defaultValue="" className={`${inputClass} mt-1`}>
                  <option value="" disabled>Choose a topic</option>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="text-xs font-bold text-[#5A4138]">Message</span>
                <textarea name="message" required minLength={10} maxLength={3000} rows={5} className={`${inputClass} mt-1 resize-y`} />
              </label>

              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#A33900] hover:bg-[#852E00] disabled:opacity-60 rounded-lg transition-colors shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
                {status === 'error' && (
                  <p role="alert" className="text-xs text-[#A33900] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>
                      The message could not be sent. Please email{' '}
                      <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold underline">{CONTACT_EMAIL}</a>.
                    </span>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
