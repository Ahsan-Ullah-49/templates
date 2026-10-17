import Link from 'next/link';
import AccordionGallery from '@/components/AccordionGallery/AccordionGallery';

export const metadata = { title: 'Accordion Gallery — Cast Template' };

export default function AccordionGalleryPage() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', background: 'var(--bg)' }}>

      <nav style={{ padding: '20px 32px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border)' }}>
        <Link href="/" style={{ fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          All Components
        </Link>
        <span style={{ color: 'var(--border)' }}>•</span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>Accordion Gallery</span>
        <span style={{ marginLeft: 'auto', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 999, color: '#7c5cfc', background: '#7c5cfc18' }}>Images</span>
      </nav>

      <div style={{ padding: '48px 32px 0', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 12 }}>
          🖼️ Accordion Gallery
        </h1>
        <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          Hover over panels to expand them. Each panel reveals a parallax image with a label.
        </p>
      </div>

      {/* Main 5-panel gallery */}
      <section style={{ padding: '48px 32px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>Stills — 5 panels</p>
        <AccordionGallery
          items={[
            { image: '/images/Still 1.png',  label: 'Still 1' },
            { image: '/images/Still 3.png',  label: 'Still 3' },
            { image: '/images/Still 5.png',  label: 'Still 5' },
            { image: '/images/Still 7.png',  label: 'Still 7' },
            { image: '/images/Still 10.png', label: 'Still 10' },
          ]}
          defaultIndex={2}
          height={460}
          accentColor="#7c5cfc"
          overlayColor="#04020e"
          grayscale={false}
        />
      </section>

      {/* Second gallery — people */}
      <section style={{ padding: '0 32px 48px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>People — 4 panels</p>
        <AccordionGallery
          items={[
            { image: '/images/Graham Cahill.jpg', label: 'Graham Cahill' },
            { image: '/images/founder.jpg',        label: 'Founder'       },
            { image: '/images/sasha.jpg',           label: 'Sasha'         },
            { image: '/images/shiro_nakamura.jpg',  label: 'Shiro Nakamura'},
          ]}
          defaultIndex={0}
          height={400}
          accentColor="#0ea5e9"
          overlayColor="#020810"
          grayscale={false}
          tilt={6}
        />
      </section>

      {/* Third gallery — even more stills */}
      <section style={{ padding: '0 32px 64px' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>More Stills — 4 panels</p>
        <AccordionGallery
          items={[
            { image: '/images/Still 2.png',  label: 'Still 2' },
            { image: '/images/Still 4.png',  label: 'Still 4' },
            { image: '/images/Still 6.png',  label: 'Still 6' },
            { image: '/images/Still 8.png',  label: 'Still 8' },
          ]}
          defaultIndex={1}
          height={420}
          accentColor="#c084fc"
          overlayColor="#060010"
          grayscale={false}
          tilt={10}
        />
      </section>

      <p style={{ textAlign: 'center', fontSize: 13, color: 'var(--muted)', padding: '0 32px 48px' }}>
        13 images from your <code style={{ background: 'rgba(255,255,255,0.07)', padding: '2px 6px', borderRadius: 4, fontSize: 12 }}>/Images</code> folder
      </p>
    </main>
  );
}
