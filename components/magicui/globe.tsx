'use client';

import createGlobe, { COBEOptions } from 'cobe';
import { useMotionValue, useSpring } from 'motion/react';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

const MOVEMENT_DAMPING: number = 1400;

const MARKER_SIZE: number = 0.05;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0.7,
  diffuse: 0.4,
  mapSamples: 3000,
  mapBrightness: 12,
  baseColor: [15 / 255, 23 / 255, 43 / 255],
  markerColor: [1, 1, 1],
  glowColor: [15 / 255, 23 / 255, 43 / 255],
  markers: [
    { location: [14.5995, 120.9842], size: MARKER_SIZE },
    { location: [19.076, 72.8777], size: MARKER_SIZE },
    { location: [23.8103, 90.4125], size: MARKER_SIZE },
    { location: [30.0444, 31.2357], size: MARKER_SIZE },
    { location: [39.9042, 116.4074], size: MARKER_SIZE },
    { location: [-23.5505, -46.6333], size: MARKER_SIZE },
    { location: [19.4326, -99.1332], size: MARKER_SIZE },
    { location: [40.7128, -74.006], size: MARKER_SIZE },
    { location: [34.6937, 135.5022], size: MARKER_SIZE },
    { location: [41.0082, 28.9784], size: MARKER_SIZE },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? 'grabbing' : 'grab';
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        width = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005;
        state.phi = phi + rs.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'), 0);
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [rs, config]);

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]',
        className,
      )}
    >
      <canvas
        className={cn(
          'size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]',
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
