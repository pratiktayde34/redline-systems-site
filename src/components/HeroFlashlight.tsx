"use client";
import React, { useRef, useState } from "react";

export default function HeroFlashlight({ children, className }: { children: React.ReactNode, className?: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className || ''}`}
      style={{
        '--mouse-x': `${position.x}px`,
        '--mouse-y': `${position.y}px`,
        '--spotlight-opacity': opacity,
      } as React.CSSProperties}
    >
      {children}
    </section>
  );
}
