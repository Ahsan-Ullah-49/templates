import Link from 'next/link';
import ScrollExpand from '@/components/ScrollExpand/ScrollExpand';
import { GALLERY_IMAGES } from '@/lib/images';
import './page.css';

export const metadata = { title: 'Scroll Expand — Cast Template' };

const items = GALLERY_IMAGES.map((image, index) => ({
  src: image.src,
  title: image.label,
  subtitle: index < 9 ? `Still frame ${String(index + 1).padStart(2, '0')}` : 'Behind the scenes',
}));

export default function ScrollExpandPage() {
  return (
    <main className="scroll-expand-page">
      <nav className="scroll-expand-page__nav" aria-label="Page navigation">
        <Link href="/" className="scroll-expand-page__brand">
          <span className="scroll-expand-page__brand-mark" aria-hidden="true">C</span>
          <span>CAST / STUDIO</span>
        </Link>
        <div className="scroll-expand-page__nav-meta">
          <span className="scroll-expand-page__live-dot" />
          COMPONENT PREVIEW
        </div>
        <Link href="/" className="scroll-expand-page__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          All components
        </Link>
      </nav>

      <header className="scroll-expand-page__intro">
        <div className="scroll-expand-page__copy">
          <span className="scroll-expand-page__eyebrow">
            <span /> CAST LIBRARY <i /> VISUAL STUDY 01
          </span>
          <h1>Every face<br />has a <em>story.</em></h1>
          <p>A portrait-led look at the people behind the frame. Scroll slowly to bring each still into focus.</p>
        </div>
        <div className="scroll-expand-page__stats" aria-label={`${items.length} portraits in this sequence`}>
          <div><strong>{String(items.length).padStart(2, '0')}</strong><span>PORTRAITS</span></div>
          <span className="scroll-expand-page__stats-rule" />
          <div><strong>01<span>—</span>02</strong><span>FRAME TO FULL BLEED</span></div>
        </div>
      </header>

      <div className="scroll-expand-page__sequence-heading">
        <span>THE SEQUENCE</span>
        <span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span>
      </div>

      <ScrollExpand
        items={items}
        scrollPerItem={2}
        startWidth={24}
        startHeight={40}
        mediaZoom={1}
        smoothing={0.35}
      />

      <footer className="scroll-expand-page__footer">
        <div>
          <span className="scroll-expand-page__eyebrow"><span /> END OF SEQUENCE</span>
          <p>The right frame makes every portrait feel like a feature.</p>
        </div>
        <Link href="/" className="scroll-expand-page__footer-link">
          Explore all components <span aria-hidden="true">↗</span>
        </Link>
      </footer>
    </main>
  );
}
