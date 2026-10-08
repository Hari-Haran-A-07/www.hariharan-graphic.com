import React, { useEffect, useState } from 'react';
import { CursorState } from '@/types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  useEffect(() => {
    setIsHovered(cursorState !== 'NORMAL');
  }, [cursorState]);

  if (!isVisible) return null;

  const getCursorContent = () => {
    switch (cursorState) {
      case 'VIEW':
        return 'VIEW';
      case 'PLAY':
        return 'PLAY';
      case 'OPEN':
        return 'OPEN ↗';
      case 'DRAG':
        return 'DRAG';
      case 'EXPLORE':
        return 'EXPLORE';
      default:
        return '';
    }
  };

  const isSpecial = cursorState !== 'NORMAL';

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
    >
      {/* Outer Follower Ring / Interactive Pill */}
      <div
        className={`flex items-center justify-center transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 ${
          isSpecial
            ? 'w-20 h-20 rounded-full bg-white text-black font-display font-bold text-xs tracking-wider shadow-2xl scale-100 shadow-purple-500/20'
            : 'w-8 h-8 rounded-full border border-white/40 bg-white/5 backdrop-blur-xs scale-100'
        }`}
      >
        {isSpecial && (
          <span className="animate-pulse">{getCursorContent()}</span>
        )}
      </div>

      {/* Center Precise Dot */}
      {!isSpecial && (
        <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#A100FF] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-[#A100FF]" />
      )}
    </div>
  );
};
