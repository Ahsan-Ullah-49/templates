import Link from 'next/link';
import LogoLoop from '@/components/LogoLoop/LogoLoop';

export const metadata = { title: 'Logo Loop — Cast Template' };

export default function LogoLoopPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>

      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Logo Loop</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#0ea5e9', background: '#0ea5e918' }}>Logos</span>
      </nav>

      <div style={{ padding: '48px 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
          ∞ Logo Loop
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
          Continuously scrolling partner logos. Hover to pause, drag to reposition.
        </p>
      </div>

      {/* Row 1 — left-to-right, large */}
      <section style={{ padding: '64px 0 0' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24, paddingLeft: 32 }}>
          Partners &amp; Media — left to right
        </p>
        <LogoLoop
          speed={70}
          intro={false}
          direction="left"
          logoHeight={64}
          gap={64}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.12}
          scaleOnHover={true}
        />
      </section>

      {/* Row 2 — right-to-left, smaller */}
      <section style={{ padding: '48px 0 0' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24, paddingLeft: 32 }}>
          Right to left — slower
        </p>
        <LogoLoop
          speed={50}
          intro={false}
          direction="right"
          logoHeight={52}
          gap={48}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.15}
        />
      </section>

      {/* Row 3 — faster */}
      <section style={{ padding: '48px 0 64px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24, paddingLeft: 32 }}>
          Fast loop
        </p>
        <LogoLoop
          speed={140}
          intro={false}
          direction="left"
          logoHeight={42}
          gap={40}
          pauseOnHover={true}
          fadeOut={true}
          fadeOutWidth={0.1}
        />
      </section>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', padding: '0 32px 48px' }}>
        20 logos from your <code style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>/Logos</code> folder
      </p>
    </main>
  );
}
