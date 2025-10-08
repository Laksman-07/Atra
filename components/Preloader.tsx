'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setFadeOut(true); // start fade
      setTimeout(() => setLoading(false), 500); // remove after fade-out
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex gap-4">
        <Image
          src="/atra_stamp.png"
          width={150}
          height={150}
          alt="Logo"
          className="animate-bounce" // Tailwind built-in bounce animation
        />
      </div>
    </div>
  );
}
