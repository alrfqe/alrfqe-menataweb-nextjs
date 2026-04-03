'use client';
import { useEffect, useRef, useState, RefObject } from 'react';

export function useFadeUp<T extends HTMLElement = HTMLDivElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, visible];
}

export function useCounter(target: number, isVisible: boolean): number {
  const [value, setValue] = useState(0);
  const animated = useRef(false);

  useEffect(() => {
    if (!isVisible || animated.current) return;
    animated.current = true;
    const duration = 2000;
    const start = performance.now();
    const ease = (t: number) => 1 - Math.pow(1 - t, 3);
    function update(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setValue(Math.floor(target * ease(progress)));
      if (progress < 1) requestAnimationFrame(update);
      else setValue(target);
    }
    requestAnimationFrame(update);
  }, [isVisible, target]);

  return value;
}
