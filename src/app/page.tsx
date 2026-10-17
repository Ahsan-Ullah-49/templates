import ComponentCard from '@/components/ComponentCard';

const components = [
  {
    id: 'depth-carousel',
    title: 'Depth Carousel',
    desc: 'Cards recede into depth on a 3D rail — drag, keyboard & auto-advance.',
    tag: 'Images',
    tagColor: '#7c5cfc',
    emoji: '🎞️',
  },
  {
    id: 'circular-carousel',
    title: 'Circular Carousel',
    desc: 'A 3D ring of logos with bendable cards, momentum drag and click-to-focus.',
    tag: 'Logos',
    tagColor: '#0ea5e9',
    emoji: '🔄',
  },
  {
    id: 'scroll-expand',
    title: 'Scroll Expand',
    desc: 'A rounded media frame that grows full-bleed as it scrolls through the viewport.',
    tag: 'Images',
    tagColor: '#7c5cfc',
    emoji: '📐',
  },
  {
    id: 'accordion-gallery',
    title: 'Accordion Gallery',
    desc: 'Panels expand on hover revealing parallax imagery and captions.',
    tag: 'Images',
    tagColor: '#7c5cfc',
    emoji: '🖼️',
  },
  {
    id: 'logo-loop',
    title: 'Logo Loop',
    desc: 'Continuously looping marquee of brand logos with hover pause and drag.',
    tag: 'Logos',
    tagColor: '#0ea5e9',
    emoji: '∞',
  },
  {
    id: 'scroll-stack',
    title: 'Scroll Stack',
    desc: 'Cards pin and stack into a deck as you scroll, settling back with a soft dim.',
    tag: 'Images',
    tagColor: '#7c5cfc',
    emoji: '🃏',
  },
  {
    id: 'circular-gallery',
    title: 'Circular Gallery',
    desc: 'A WebGL carousel that bends around a drum — drag, scroll and click to open.',
    tag: 'Images',
    tagColor: '#7c5cfc',
    emoji: '🎡',
  },
];

export default function Home() {
  return (
    <main style={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 24px' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>
          Client Preview
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.1, marginBottom: 20 }}>
          Component Showcase
        </h1>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
          Seven premium animated components — pick your favourite and we&apos;ll integrate it into your Next.js website.
        </p>
      </div>

      {/* Cards grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
        gap: 20,
        width: '100%',
        maxWidth: 1100,
      }}>
        {components.map((c) => (
          <ComponentCard key={c.id} {...c} />
        ))}
      </div>
    </main>
  );
}
