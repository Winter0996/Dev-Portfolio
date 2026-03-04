import { useState } from 'react';
import SectionNav from '../SectionNav';

const EMAIL = 'nathanfwinter@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const mailto = `mailto:${EMAIL}?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({ name: '', email: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section id="contact" className="min-h-screen flex items-start py-20 px-8 animate-fade-in">
      <div className="max-w-3xl w-full">
        <h2
          className="text-4xl md:text-5xl font-extrabold mb-4 leading-[1.15] tracking-tight"
          style={{ fontFamily: 'Outfit, sans-serif', color: 'var(--text)' }}>
          Contact
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold italic mb-10 leading-[1.3]"
          style={{ fontFamily: 'Space Mono, monospace', color: 'var(--accent-light)' }}>
          Get in touch before I write another line of code!
        </p>

        <div className="max-w-xl space-y-5">
          {[
            { name: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your name, your fame' },
            { name: 'email',   label: 'Email',   type: 'email', placeholder: 'Where can I reach you back?' },
          ].map(field => (
            <div key={field.name}>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text)' }}>
                {field.label} <span style={{ color: 'var(--accent-light)' }}>*</span>
              </label>
              <input
                type={field.type}
                name={field.name}
                value={form[field.name as keyof typeof form]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all"
                style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
              />
              {field.name === 'email' && (
                <p className="text-xs mt-1.5" style={{ color: 'var(--muted)' }}>Real email preferred, unless you don't want a response 😄</p>
              )}
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--text)' }}>
              Message <span style={{ color: 'var(--accent-light)' }}>*</span>
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your words, my inbox."
              rows={5}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all resize-none"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>

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
            className="w-full py-3 rounded-lg text-sm font-medium transition-all"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--muted)' }}
            onMouseOver={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseOut={e => (e.currentTarget.style.color = 'var(--muted)')}>
            Reset
          </button>
        </div>

        <SectionNav prev={{ label: 'Education', id: 'education' }} next={{ label: 'Stats', id: 'stats' }} />
      </div>
    </section>
  );
}
