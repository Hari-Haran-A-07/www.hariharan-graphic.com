import React from 'react';

export const EditorialMarquee: React.FC = () => {
  const marqueeItems = [
    "GRAPHIC DESIGN",
    "•",
    "VISUAL BRANDING",
    "•",
    "SOCIAL MEDIA CAROUSELS",
    "•",
    "VIDEO EDITING",
    "•",
    "MOTION GRAPHICS",
    "•",
    "UI/UX WIREFRAMING",
    "•",
    "CREATIVE AI",
    "•",
    "ADOBE PHOTOSHOP & ILLUSTRATOR",
    "•",
    "PREMIERE PRO & AFTER EFFECTS",
    "•",
    "FIGMA & CANVA PRO",
    "•",
    "REACT.JS & WEB ASSETS",
    "•",
    "KIEYVERSE",
    "•",
    "TECHZON WIDE",
    "•",
    "DOT COM INFOWAY",
    "•",
  ];

  return (
    <div className="w-full bg-[#0A0A0A] border-y border-white/10 py-5 overflow-hidden whitespace-nowrap select-none">
      <div className="flex animate-marquee space-x-6 items-center">
        {marqueeItems.concat(marqueeItems).map((item, idx) => (
          <span
            key={idx}
            className={`font-display font-bold tracking-widest text-xs md:text-sm uppercase ${
              item === "•"
                ? "text-[#A100FF]"
                : idx % 4 === 0
                ? "text-white"
                : idx % 4 === 2
                ? "text-[#00E5FF]"
                : "text-[#A7A7A7]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
