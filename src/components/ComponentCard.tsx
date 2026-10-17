'use client';
import Link from 'next/link';

interface CardProps {
  id: string;
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
  emoji: string;
}

export default function ComponentCard({ id, title, desc, tag, tagColor, emoji }: CardProps) {
  return (
    <Link
      href={`/${id}`}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16,
        padding: '28px 28px 24px',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: 20,
        cursor: 'pointer',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(124,92,252,0.5)';
        el.style.transform   = 'translateY(-4px)';
        el.style.boxShadow   = '0 20px 60px rgba(124,92,252,0.15)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'var(--border)';
        el.style.transform   = 'none';
        el.style.boxShadow   = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 28 }}>{emoji}</span>
        <span style={{
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em',
          textTransform: 'uppercase', padding: '4px 10px',
          borderRadius: 999, color: tagColor, background: `${tagColor}18`,
        }}>{tag}</span>
      </div>
      <div>
        <h2 style={{ fontSize: 19, fontWeight: 700, letterSpacing: '-0.02em', marginBottom: 8 }}>{title}</h2>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>{desc}</p>
      </div>
      <div style={{ marginTop: 'auto', paddingTop: 8, display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600, color: 'var(--accent)' }}>
        View demo
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  );
}
