import Link from 'next/link';
import CircularGallery from '@/components/CircularGallery/CircularGallery';
import { GALLERY_IMAGES } from '@/lib/images';

export const metadata = { title: 'Circular Gallery — Cast Template' };

const ITEMS = GALLERY_IMAGES.map(img => ({ image: img.src, text: img.label }));

export default function CircularGalleryPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* Nav */}
      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Circular Gallery</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#7c5cfc', background: '#7c5cfc18' }}>Images</span>
      </nav>

      {/* Header */}
      <div style={{ padding: '32px 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
          🎡 Circular Gallery
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          A WebGL carousel that bends around a drum. Drag, scroll or use the arrow keys — click a card to open it.
        </p>
      </div>

      {/* Component */}
      <div style={{ flex: 1, padding: '16px 0 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', height: 'min(600px, calc(100dvh - 220px))', minHeight: 400 }}>
          <CircularGallery
            items={ITEMS}
            bend={2.4}
            borderRadius={0.06}
            scrollSpeed={2}
            scrollEase={0.06}
            itemSize={1.24}
            itemAspect={0.92}
            gap={0.08}
            wave={0.12}
            textColor="#ffffff"
            autoScroll={2}
            snap={true}
            openOnClick={true}
          />
        </div>
      </div>

      {/* Footer hint */}
      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', padding: '0 32px 32px' }}>
        13 images from your <code style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>/Images</code> folder
      </p>
    </main>
  );
}
