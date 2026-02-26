import { useState } from 'react';
import SectionNav from '../SectionNav';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Opens mail client as a fallback — swap with EmailJS or Formspree for real submissions
    const mailto = `mailto:your.email@example.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  const inputClass = `w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all placeholder:text-[var(--muted)]`;
  const inputStyle = { background: 'var(--bg-card)', border: '1px solid var(--border)' };

  return (
    <section id="contact" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
          Contact
        </h2>
        <p className="text-2xl md:text-3xl font-bold italic mb-10" style={{ fontFamily: 'Syne, sans-serif', color: 'var(--accent-light)' }}>
          Get in touch before I write another line of code!
        </p>

        <div className="max-w-xl space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">
              Name <span className="text-[var(--accent-light)]">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name, your fame"
              className={inputClass}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">
              Email <span className="text-[var(--accent-light)]">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Where can I reach you back?"
              className={inputClass}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
            <p className="text-xs text-[var(--muted)] mt-1.5">Real email preferred, unless you don't want a response 😄</p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-white mb-1.5">
              Message <span className="text-[var(--accent-light)]">*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your words, my inbox."
              rows={5}
              className={`${inputClass} resize-none`}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

          {/* Buttons */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg text-sm font-semibold text-white transition-all"
            style={{ background: 'var(--accent)' }}
            onMouseOver={e => (e.currentTarget.style.background = '#6d28d9')}
            onMouseOut={e => (e.currentTarget.style.background = 'var(--accent)')}>
            {submitted ? '✓ Message Sent!' : 'Submit'}
          </button>

          <button
            onClick={handleReset}
            className="w-full py-3 rounded-lg text-sm font-medium text-[var(--muted)] transition-all hover:text-white"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}>
            Reset
          </button>
        </div>

        <SectionNav prev={{ label: 'Education', id: 'education' }} next={{ label: 'Stats', id: 'stats' }} />
      </div>
    </section>
  );
}