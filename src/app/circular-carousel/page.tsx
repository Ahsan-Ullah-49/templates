import Link from 'next/link';
import CircularCarousel, { type CircularCarouselItem } from '@/components/CircularCarousel/CircularCarousel';

export const metadata = { title: 'Circular Carousel — Cast Template' };

const LOGOS = [
  'APPLE.png',
  'ARISE RACING.png',
  'BANDAI NAMCO.png',
  'BEAST PHILANTHROPY.png',
  'BMW.png',
  'BUGATTI.png',
  'CAMPOS RACING.png',
  'DANUBE PROPERTIES.png',
  'HAGERTY.png',
  'heraldsun.png',
  'LAMBORGHINI.png',
  'NETEASE GAMES.png',
  'news-be-on-it.png',
  'NISSAN.png',
  'RENTALS.png',
  'ROLLS ROYCE.png',
  'tesla.png',
  'THE TELEGRAPH.png',
  'VALUETAINMENT.png',
  'weeklytimesnow.png',
];

const title = (file: string) =>
  file
    .replace(/\.png$/i, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());

const items: CircularCarouselItem[] = LOGOS.map(file => ({
  src: `/logos/${file}`,
  alt: title(file),
  title: title(file),
  subtitle: undefined,
}));

export default function CircularCarouselPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>

      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Circular Carousel</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#0ea5e9', background: '#0ea5e918' }}>Logos</span>
      </nav>

      <div style={{ padding: '44px 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
          🔄 Circular Carousel
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
          A 3D ring of partner logos. Drag to spin, click to focus, or let it auto-drift.
        </p>
      </div>

      <div style={{ flex: 1, padding: '32px 32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 980, height: 'min(540px, calc(100dvh - 280px))', minHeight: 440 }}>
          <CircularCarousel
            items={items}
            preset="cylinder"
            intro="rise"
            cardWidth={200}
            aspectRatio={1}
            curve={0}
            tilt={-13}
            perspective={1700}
            gap={48}
            cornerRadius={18}
            autoplay="drift"
            speed={11}
            captions
            innerShade={0.3}
            depthFade={0.62}
            fadeColor="#0a0a0f"
            focusOnClick
          />
        </div>
      </div>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', padding: '0 32px 32px' }}>
        20 logos from your <code style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>/Logos</code> folder
      </p>
    </main>
  );
}
