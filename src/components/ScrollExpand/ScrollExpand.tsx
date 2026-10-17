'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { CSSProperties } from 'react';
import './ScrollExpand.css';

export interface ScrollExpandItem {
  src: string;
  title?: string;
  subtitle?: string;
  alt?: string;
}

export interface ScrollExpandProps {
  items: ScrollExpandItem[];
  /** Extra viewport-heights of scroll consumed by each frame (bigger = slower). */
  scrollPerItem?: number;
  startWidth?: number;
  startHeight?: number;
  startRadius?: number;
  endRadius?: number;
  mediaZoom?: number;
  smoothing?: number;
  overlayScrim?: number;
  className?: string;
}

const clamp = (v: number, a: number, b: number): number => (v < a ? a : v > b ? b : v);

const smoothstep = (edge0: number, edge1: number, x: number): number => {
  const t = clamp((x - edge0) / (edge1 - edge0 || 1e-6), 0, 1);
  return t * t * (3 - 2 * t);
};

const ScrollExpand = ({
  items,
  scrollPerItem = 2,
  startWidth = 40,
  startHeight = 56,
  startRadius = 26,
  endRadius = 0,
  mediaZoom = 1,
  smoothing = 0.6,
  overlayScrim = 0.55,
  className = '',
}: ScrollExpandProps) => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const framesRef = useRef<(HTMLDivElement | null)[]>([]);
  const mediaRefs = useRef<(HTMLImageElement | null)[]>([]);
  const scrimRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hintRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backdropRefs = useRef<(HTMLDivElement | null)[]>([]);
  const progressRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    gsap.registerPlugin(ScrollTrigger);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const apply = (i: number, p: number) => {
      const frame = framesRef.current[i];
      const media = mediaRefs.current[i];
      if (!frame || !media) return;
      const progress = clamp(p * 2, 0, 1);
      const mobile = window.innerWidth <= 640;
      const collapsedWidth = mobile ? Math.max(58, Math.min(startWidth + 16, 72)) : startWidth;
      const collapsedHeight = mobile ? Math.min(startHeight, 32) : startHeight;
      const e = smoothstep(0, 1, progress);
      const w = collapsedWidth + (100 - collapsedWidth) * e;
      const h = collapsedHeight + (100 - collapsedHeight) * e;
      const ix = Math.max(0, (100 - w) / 2);
      const iy = Math.max(0, (100 - h) / 2);
      const r = startRadius + (endRadius - startRadius) * e;
      frame.style.clipPath = `inset(${iy.toFixed(3)}% ${ix.toFixed(3)}% ${iy.toFixed(3)}% ${ix.toFixed(3)}% round ${r.toFixed(2)}px)`;
      const aspect = media.naturalWidth / Math.max(1, media.naturalHeight) || 1;
      const fittedWidth = Math.min(window.innerWidth, window.innerHeight * aspect);
      const fittedHeight = fittedWidth / aspect;
      const collapsedScale = Math.min(
        ((collapsedWidth / 100) * window.innerWidth) / fittedWidth,
        ((collapsedHeight / 100) * window.innerHeight) / fittedHeight
      );
      const expandedScale = clamp(mediaZoom, 0.1, 1);
      media.style.transform = `scale(${(collapsedScale + (expandedScale - collapsedScale) * e).toFixed(4)})`;

      const backdrop = backdropRefs.current[i];
      if (backdrop) backdrop.style.transform = `translate3d(0, ${((0.5 - progress) * 8).toFixed(2)}%, 0) scale(1.2)`;

      const scrim = scrimRefs.current[i];
      if (scrim) scrim.style.opacity = `${(overlayScrim * smoothstep(0.35, 1, e)).toFixed(3)}`;

      const title = titleRefs.current[i];
      if (title) {
        const out = smoothstep(0.18, 0.56, progress);
        title.style.opacity = `${(1 - out).toFixed(3)}`;
        title.style.transform = `translate3d(0, ${(-40 * out).toFixed(1)}px, 0) scale(${(0.92 + 0.08 * (1 - out)).toFixed(3)})`;
      }

      const hint = hintRefs.current[i];
      if (hint) {
        const gone = smoothstep(0, 0.1, progress);
        hint.style.opacity = `${(1 - gone).toFixed(3)}`;
        hint.style.transform = `translate3d(0, ${(12 * gone).toFixed(1)}px, 0)`;
      }

      const overlay = overlayRefs.current[i];
      if (overlay) {
        const inn = smoothstep(0.62, 0.96, progress);
        overlay.style.opacity = `${inn.toFixed(3)}`;
        overlay.style.transform = `translate3d(0, ${(28 * (1 - inn)).toFixed(1)}px, 0)`;
      }

      const bar = progressRefs.current[i];
      if (bar) bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };

    const ctx = gsap.context(() => {
      items.forEach((_, i) => {
        const section = root.querySelector<HTMLElement>(`[data-se-item="${i}"]`);
        if (!section) return;
        apply(i, 0);
        if (reduce) {
          apply(i, 1);
          return;
        }
        const proxy = { p: 0 };
        gsap.to(proxy, {
          p: 1,
          ease: 'none',
          onUpdate: () => apply(i, proxy.p),
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom bottom',
            scrub: smoothing,
            snap: reduce
              ? undefined
              : {
                  snapTo: 0.5,
                  delay: 0.08,
                  duration: { min: 0.18, max: 0.45 },
                  ease: 'power2.out',
                  inertia: false,
                },
          },
        });
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    const img = () => refresh();
    window.addEventListener('load', img);
    const raf = requestAnimationFrame(refresh);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('load', img);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const total = String(items.length).padStart(2, '0');

  return (
    <div ref={rootRef} className={`scroll-expand ${className}`.trim()}>
      {items.map((item, i) => (
        <section
          key={`${item.src}-${i}`}
          className="scroll-expand__item"
          data-se-item={i}
          style={{ height: `${(1 + Math.max(0.2, scrollPerItem)) * 100}dvh` } as CSSProperties}
        >
          <div className="scroll-expand__pin">
            <div
              ref={el => { backdropRefs.current[i] = el; }}
              className="scroll-expand__backdrop"
              style={{ backgroundImage: `url("${item.src}")` }}
              aria-hidden="true"
            />
            <div className="scroll-expand__filmline" aria-hidden="true">
              <span>CAST LIBRARY</span>
              <i />
              <span>PORTRAIT STUDY</span>
            </div>
            <div ref={el => { framesRef.current[i] = el; }} className="scroll-expand__frame">
              <img
                ref={el => { mediaRefs.current[i] = el; }}
                className="scroll-expand__media"
                src={item.src}
                alt={item.alt || item.title || ''}
                draggable={false}
              />
              <div ref={el => { scrimRefs.current[i] = el; }} className="scroll-expand__scrim" />
              <div ref={el => { overlayRefs.current[i] = el; }} className="scroll-expand__overlay">
                <span className="scroll-expand__kicker">{String(i + 1).padStart(2, '0')} — Feature</span>
                {item.title && <h2 className="scroll-expand__overlay-title">{item.title}</h2>}
                {item.subtitle && <p className="scroll-expand__overlay-sub">{item.subtitle}</p>}
              </div>
            </div>
            {item.title && (
              <div ref={el => { titleRefs.current[i] = el; }} className="scroll-expand__title">
                {item.title}
              </div>
            )}
            <div className="scroll-expand__counter" aria-hidden="true">
              <span className="scroll-expand__counter-current">{String(i + 1).padStart(2, '0')}</span>
              <span className="scroll-expand__counter-total">/ {total}</span>
            </div>
            <div className="scroll-expand__progress" aria-hidden="true">
              <span
                ref={el => { progressRefs.current[i] = el; }}
                className="scroll-expand__progress-fill"
              />
            </div>
            {i === 0 && (
              <div ref={el => { hintRefs.current[i] = el; }} className="scroll-expand__hint">
                <span className="scroll-expand__hint-dot" />
                Scroll to expand
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ScrollExpand;
