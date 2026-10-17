import Link from 'next/link';
import DepthCarousel from '@/components/DepthCarousel/DepthCarousel';
import { GALLERY_IMAGES } from '@/lib/images';

export const metadata = { title: 'Depth Carousel — Cast Template' };

const ITEMS = GALLERY_IMAGES.map(img => ({ image: img.src, alt: img.label }));

export default function DepthCarouselPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>

      {/* Nav */}
      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Depth Carousel</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#7c5cfc', background: '#7c5cfc18', border: '1px solid #7c5cfc30' }}>Images</span>
      </nav>

      {/* Header */}
      <div style={{ padding: '44px 32px 0', textAlign: 'center', position: 'relative' }}>
        {/* Glow blob behind header */}
        <div aria-hidden="true" style={{
          position: 'absolute',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 480, height: 180,
          background: 'radial-gradient(ellipse, rgba(124,92,252,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{ display: 'inline-block', marginBottom: 14, fontSize: 11, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(124,92,252,0.9)', background: 'rgba(124,92,252,0.1)', border: '1px solid rgba(124,92,252,0.25)', padding: '5px 14px', borderRadius: 999 }}>
            Premium Gallery
          </span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 900, letterSpacing: '-0.05em', marginBottom: 14, lineHeight: 1.05, color: '#ffffff' }}>
            Depth Carousel
          </h1>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.65 }}>
            Glassy cards recede into 3D depth on a perspective rail. Scroll near the centre, drag or use arrow keys — hover for a glare effect, click the focused card to expand.
          </p>
        </div>
      </div>

      {/* Component */}
      <div style={{ flex: 1, padding: '32px 0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 1340, height: 'min(580px, calc(100dvh - 300px))', minHeight: 440 }}>
          <DepthCarousel
            items={ITEMS}
            cardWidth={340}
            cardHeight={440}
            radius={22}
            autoplay={true}
            autoplayDelay={2600}
            depth={220}
            spread={125}
            tilt={22}
            blur={5}
            falloff={0.15}
            scrollRadius={0.42}
            expandOnClick={true}
          />
        </div>
      </div>

      {/* Footer hint */}
      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', padding: '0 32px 32px' }}>
        {ITEMS.length} images · scroll, drag or use <kbd style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 7px', borderRadius: 5, fontSize: 11, border: '1px solid rgba(255,255,255,0.1)' }}>←→</kbd> keys
      </p>
    </main>
  );
}
