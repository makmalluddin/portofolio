import React, { useRef, useEffect } from 'react';
import { motion, useAnimationFrame } from 'motion/react';

// Fungsi bantuan untuk linear interpolation (lerp) agar gerakan smooth
const lerp = (p1, p2, t) => p1 + (p2 - p1) * t;

export default function CustomCircularGallery({
  items = [],
  bend = 3,
  textColor = '#ffffff',
  borderRadius = '12px',
  font = 'bold 20px Figtree',
  scrollSpeed = 2,
  scrollEase = 0.05
}) {
  const containerRef = useRef(null);
  const scrollTarget = useRef(0);
  const scrollCurrent = useRef(0);
  const scrollLast = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollPositionOnDown = useRef(0);

  // Menyediakan default items jika props kosong
  const defaultItems = [
    { image: 'https://picsum.photos/seed/1/800/600?grayscale', text: 'Bridge' },
    { image: 'https://picsum.photos/seed/2/800/600?grayscale', text: 'Desk Setup' },
    { image: 'https://picsum.photos/seed/3/800/600?grayscale', text: 'Waterfall' },
    { image: 'https://picsum.photos/seed/4/800/600?grayscale', text: 'Strawberries' },
  ];
  const galleryItems = items && items.length ? items : defaultItems;

  // Duplikasi data untuk menciptakan sirkulasi infinity loop yang mulus
  const extendedItems = [...galleryItems, ...galleryItems, ...galleryItems];
  const itemRefs = useRef([]);

  // Dimensi kartu (Bisa disesuaikan lewat CSS)
  const itemWidth = 240; 
  const padding = 40;
  const totalItemWidth = itemWidth + padding;
  const totalLoopWidth = galleryItems.length * totalItemWidth;

  // Handler Event Geser (Mouse & Touch)
  const onTouchDown = (e) => {
    isDragging.current = true;
    scrollPositionOnDown.current = scrollTarget.current;
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const distance = (startX.current - x) * (scrollSpeed * 0.5);
    scrollTarget.current = scrollPositionOnDown.current + distance;
  };

  const onTouchUp = () => {
    isDragging.current = false;
  };

  // Handler Scroll Wheel Laptop / Mouse
  const onWheel = (e) => {
    scrollTarget.current += e.deltaY * (scrollSpeed * 0.1);
  };

  // Siasat Inti: Loop animasi berkinerja tinggi murni lewat manipulasi DOM langsung (Menghindari Re-render React)
  useAnimationFrame(() => {
    if (!containerRef.current) return;

    // Hitung pergerakan smooth dengan lerp
    scrollCurrent.current = lerp(scrollCurrent.current, scrollTarget.current, scrollEase);
    const velocity = scrollCurrent.current - scrollLast.current;
    scrollLast.current = scrollCurrent.current;

    const containerWidth = containerRef.current.clientWidth;
    const halfContainer = containerWidth / 2;

    extendedItems.forEach((_, index) => {
      const element = itemRefs.current[index];
      if (!element) return;

      // Kalkulasi posisi X dasar tiap elemen berdasarkan scroll tracker
      let rawX = (index * totalItemWidth) - scrollCurrent.current;
      
      // Rumus infinity loop modular agar elemen berputar balik secara otomatis
      const halfTotalWidth = (extendedItems.length * totalItemWidth) / 2;
      let relativeX = ((rawX + halfTotalWidth) % (extendedItems.length * totalItemWidth)) - halfTotalWidth;
      
      // Geser titik tengah (origin) ke pusat galeri sirkular
      const x = relativeX + halfContainer - (itemWidth / 2);

      // --- Siasat Fisika Komputasi: Mengkloning Efek Lengkungan Arc WebGL ke CSS 3D ---
      const distanceFromCenter = x + (itemWidth / 2) - halfContainer;
      const H = halfContainer;
      let y = 0;
      let rotateZDeg = 0;

      if (bend !== 0) {
        const B_abs = Math.abs(bend * 40); // Skala tekukan sirkular
        const R = (H * H + B_abs * B_abs) / (2 * B_abs);
        const effectiveX = Math.min(Math.abs(distanceFromCenter), H);
        const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);
        
        y = bend > 0 ? -arc : arc;
        const radZ = -Math.sign(distanceFromCenter) * Math.asin(effectiveX / R);
        rotateZDeg = radZ * (180 / Math.PI) * (bend > 0 ? 1 : -1);
      }

      // Simulasi efek wave/distorsi shader lewat modifikasi skew dinamis berbasis kecepatan scroll
      const skewX = velocity * -0.15;

      // Suntik langsung ke style DOM element (Sangat cepat & menghemat memori baterai)
      element.style.transform = `translate3d(${x}px, ${y}px, 0px) rotateZ(${rotateZDeg}deg) skewX(${skewX}deg)`;
    });
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Daftarkan listener event
    container.addEventListener('wheel', onWheel, { passive: true });
    container.addEventListener('mousedown', onTouchDown);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchUp);
    container.addEventListener('touchstart', onTouchDown, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchUp);

    return () => {
      container.removeEventListener('wheel', onWheel);
      container.removeEventListener('mousedown', onTouchDown);
      window.removeEventListener('mousemove', onTouchMove);
      window.removeEventListener('mouseup', onTouchUp);
      container.removeEventListener('touchstart', onTouchDown);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none bg-transparent cursor-grab active:cursor-grabbing flex items-center"
    >
      <div className="absolute w-full h-[320px] relative flex items-center">
        {extendedItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            style={{ 
              width: `${itemWidth}px`, 
              borderRadius: borderRadius,
            }}
            className="absolute h-[280px] border border-gray-800/80 bg-[#111] overflow-hidden shadow-2xl transition-shadow duration-300 hover:border-amber-500/30 will-change-transform flex flex-col justify-between"
          >
            <img
              src={item.image}
              alt={item.text || 'Gallery Image'}
              className="w-full h-[82%] object-cover pointer-events-none"
            />
            {item.text && (
              <div 
                style={{ font: font, color: textColor }}
                className="h-[18%] flex items-center justify-center bg-[#0d0d0d] text-center border-t border-gray-950 px-2 text-xs"
              >
                {item.text}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}