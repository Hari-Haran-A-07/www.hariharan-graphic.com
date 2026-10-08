import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { soundFx } from '@/lib/soundFx';

export type TransitionMode = 'NONE' | 'INTRO_7S' | 'NAV_4S';

export interface TransitionDestination {
  title: string;
  category?: string;
  href?: string;
  action?: () => void;
}

interface TransitionContextType {
  isTransitioning: boolean;
  transitionMode: TransitionMode;
  destination: TransitionDestination | null;
  soundMuted: boolean;
  toggleSound: () => void;
  navigateWithTransition: (dest: TransitionDestination) => void;
  replayIntro: () => void;
  skipTransition: () => void;
  completeTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

const INTRO_SESSION_KEY = 'hha_cinematic_intro_viewed_v3';

export const TransitionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Lazy initial state determination for initial load
  const [transitionMode, setTransitionMode] = useState<TransitionMode>(() => {
    if (typeof window === 'undefined') return 'NONE';
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
      return 'NONE';
    }
    const hasSeenIntro = sessionStorage.getItem(INTRO_SESSION_KEY);
    if (!hasSeenIntro) {
      return 'INTRO_7S';
    }
    const hash = window.location.hash;
    if (hash && hash !== '#hero') {
      return 'NAV_4S';
    }
    return 'NONE';
  });

  const [destination, setDestination] = useState<TransitionDestination | null>(() => {
    if (typeof window === 'undefined') return null;
    const hasSeenIntro = sessionStorage.getItem(INTRO_SESSION_KEY);
    const hash = window.location.hash;
    if (hasSeenIntro && hash && hash !== '#hero') {
      const sectionName = hash.replace('#', '').replace(/-/g, ' ').toUpperCase();
      return {
        title: `LOADING / ${sectionName}`,
        category: 'PORTFOLIO SECTION DIRECT ACCESS',
        href: hash,
      };
    }
    return null;
  });

  const [soundMuted, setSoundMuted] = useState<boolean>(() => soundFx.getMuted());

  const toggleSound = useCallback(() => {
    const next = !soundMuted;
    setSoundMuted(next);
    soundFx.setMuted(next);
  }, [soundMuted]);

  // Handle body scroll locking during transitions
  useEffect(() => {
    if (transitionMode !== 'NONE') {
      document.body.style.overflow = 'hidden';
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.pointerEvents = '';
    };
  }, [transitionMode]);

  const completeTransition = useCallback(() => {
    if (transitionMode === 'INTRO_7S') {
      sessionStorage.setItem(INTRO_SESSION_KEY, 'true');
    }

    // Execute pending destination action or scroll
    if (destination) {
      if (destination.action) {
        destination.action();
      }
      if (destination.href) {
        if (destination.href.startsWith('#')) {
          const targetEl = document.querySelector(destination.href);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.location.href = destination.href;
        }
      }
    }

    setTransitionMode('NONE');
    setDestination(null);
  }, [transitionMode, destination]);

  const navigateWithTransition = useCallback((dest: TransitionDestination) => {
    // If reduced motion is requested, navigate immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      if (dest.action) dest.action();
      if (dest.href) {
        if (dest.href.startsWith('#')) {
          const targetEl = document.querySelector(dest.href);
          if (targetEl) targetEl.scrollIntoView({ behavior: 'auto' });
        }
      }
      return;
    }

    // Trigger 4s Cinematic Navigation Transition
    setDestination(dest);
    setTransitionMode('NAV_4S');
  }, []);

  const replayIntro = useCallback(() => {
    sessionStorage.removeItem(INTRO_SESSION_KEY);
    setDestination(null);
    setTransitionMode('INTRO_7S');
  }, []);

  const skipTransition = useCallback(() => {
    completeTransition();
  }, [completeTransition]);

  // Global ESC key listener to skip transition
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && transitionMode !== 'NONE') {
        skipTransition();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [transitionMode, skipTransition]);

  return (
    <TransitionContext.Provider
      value={{
        isTransitioning: transitionMode !== 'NONE',
        transitionMode,
        destination,
        soundMuted,
        toggleSound,
        navigateWithTransition,
        replayIntro,
        skipTransition,
        completeTransition,
      }}
    >
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionRouter = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransitionRouter must be used within a TransitionProvider');
  }
  return context;
};
