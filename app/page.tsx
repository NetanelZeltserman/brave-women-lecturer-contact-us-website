"use client";

import { useEffect, useRef } from 'react';
import IntroSection from '@/components/sections/intro';
import DetailsSection from '@/components/sections/details';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createDot = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 200 + 100,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      hue: Math.random() * 60 + 240,
    });

    let dots: ReturnType<typeof createDot>[] = [];

    const initDots = () => {
      dots = Array.from({ length: 10 }, createDot);
    };

    const animate = () => {
      ctx.fillStyle = '#f9fafb';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dots.forEach(dot => {
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, dot.radius);
        gradient.addColorStop(0, `hsla(${dot.hue}, 71%, 64%, 0.1)`);
        gradient.addColorStop(1, `hsla(${dot.hue}, 71%, 64%, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.filter = 'blur(50px)';
        ctx.fill();
        ctx.filter = 'none';

        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      initDots();
    };

    resize();
    initDots();
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <main className='relative flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden xl:px-30 xl:py-24'>
      <canvas ref={canvasRef} className='absolute top-0 left-0 w-full h-full' />
      <div className='relative z-10 inline-block w-full p-4 bg-white rounded-lg shadow-md xl:w-6/12 xl:p-20'>
        <div className='absolute top-0 left-0 w-full h-1 rounded-t-lg bg-gradient-to-r from-tertiary via-secondary to-primary'></div>
        <IntroSection />
        <DetailsSection />
        <ContactSection />
      </div>
      <svg className="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="hsl(276, 71%, 64%)" fillOpacity="0.5" d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,149.3C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </main>
  );
}
