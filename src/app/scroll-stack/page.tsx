import Link from 'next/link';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack/ScrollStack';
import { GALLERY_IMAGES } from '@/lib/images';

export const metadata = { title: 'Scroll Stack — Cast Template' };

const IMAGE_PAIRS = Array.from({ length: Math.ceil(GALLERY_IMAGES.length / 2) }, (_, index) =>
  GALLERY_IMAGES.slice(index * 2, index * 2 + 2)
);

export default function ScrollStackPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>
      {/* Nav */}
      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Scroll Stack</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#7c5cfc', background: '#7c5cfc18' }}>Images</span>
      </nav>

      {/* Header */}
      <div style={{ padding: '48px 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
          🃏 Scroll Stack
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          Cards pin to the viewport and stack into a deck as you scroll, settling back with a soft dim.
        </p>
      </div>

      {/* Component */}
      <div className="scroll-stack-desktop" style={{ padding: '32px 0 96px' }}>
        <ScrollStack
          itemDistance={180}
          itemStackDistance={32}
          stackPosition="10%"
          itemScale={0.02}
          baseScale={0.98}
          dimAmount={0.18}
          blurAmount={0}
          tiltAmount={0}
          rotationAmount={0}
          snap
          useWindowScroll={true}
        >
          {IMAGE_PAIRS.map(pair => (
            <ScrollStackItem key={pair.map(img => img.src).join('|')} itemClassName="scroll-stack-pair">
              {pair.map(img => (
                <div
                  key={img.src}
                  className={pair.length === 1 ? 'scroll-stack-pair__cell scroll-stack-pair__cell--single' : 'scroll-stack-pair__cell'}
                >
                  <img className="scroll-stack-pair__image" src={img.src} alt={img.label} />
                  <span className="scroll-stack-pair__label">{img.label}</span>
                </div>
              ))}
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
      <div className="scroll-stack-mobile" style={{ padding: '32px 0 96px' }}>
        <ScrollStack
          itemDistance={180}
          itemStackDistance={32}
          stackPosition="10%"
          itemScale={0.02}
          baseScale={0.98}
          dimAmount={0.18}
          blurAmount={0}
          tiltAmount={0}
          rotationAmount={0}
          snap
          useWindowScroll={true}
        >
          {GALLERY_IMAGES.map(img => (
            <ScrollStackItem key={img.src} itemClassName="scroll-stack-mobile-item">
              <div className="scroll-stack-mobile-item__media">
                <img className="scroll-stack-pair__image" src={img.src} alt={img.label} />
                <span className="scroll-stack-pair__label">{img.label}</span>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </main>
  );
}
