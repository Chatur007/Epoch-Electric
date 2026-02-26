"use client";

import React, { useState, useEffect } from 'react';

// Data Arrays
const slideImages = [
  "https://cdn.pixabay.com/photo/2016/07/01/23/16/carnival-1492099_1280.jpg",
  "https://cdn.pixabay.com/photo/2024/06/04/01/36/urban-8807675_1280.png",
  "https://cdn.pixabay.com/photo/2019/04/04/17/58/road-4103334_1280.jpg",
  "https://images.unsplash.com/photo-1749072734372-d91c35c82af2?q=80&w=870&auto=format&fit=crop",
  "https://cdn.pixabay.com/photo/2022/12/28/00/46/ai-generated-7681983_640.jpg",
  "https://cdn.pixabay.com/photo/2023/09/28/13/19/sci-fi-8281520_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274_1280.jpg"
];

const slideInfo = [
  { title: "Carnaval", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Ciudad mágica", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Ciudad neón", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Bosque", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Nave", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Ciudad futurista", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." },
  { title: "Espacio", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla non sagittis convallis..." }
];

export default function CarouselPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const size = 70;

  // Logic for the circular positioning (Exact math from your script)
  const getSlideTransform = (position) => {
    const radius = size / 2;
    const angle = position * 47 + 141;
    const scale = position === 0 ? 5 : (position === -1 || position === 1 ? 3 : 1);
    return `rotate(${angle}deg) translateY(${radius}rem) rotate(${-angle}deg) scale(${scale})`;
  };

  const handleMove = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    // Calculate next index
    const nextSlide = (currentSlide + direction + slideImages.length) % slideImages.length;
    setCurrentSlide(nextSlide);

    // Timeout matches your original 300ms step logic
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <main 
      className="slideshow-container" 
      style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
    >
      {/* Info Panel */}
      <div className="info-panel">
        <h1 className="info-title">{slideInfo[currentSlide].title}</h1>
        <p className="info-text">{slideInfo[currentSlide].text}</p>
      </div>

      {/* Carousel Visual */}
      <div className="carousel-wrapper">
        <div className="carousel-circle">
          {slideImages.map((img, i) => {
            let offset = (i - currentSlide + slideImages.length) % slideImages.length;
            if (offset > slideImages.length / 2) offset -= slideImages.length;
            
            const isVisible = [-2, -1, 0, 1, 2].includes(offset);

            return (
              <div
                key={i}
                className="slide-item"
                style={{
                  backgroundImage: `url(${img})`,
                  transform: isVisible ? getSlideTransform(offset) : 'scale(0)',
                  opacity: isVisible ? 1 : 0,
                  visibility: isVisible ? 'visible' : 'hidden'
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Controls */}
      <div className="arrow-controls">
        <button className="arrow" onClick={() => handleMove(-1)} aria-label="Anterior">&lt;</button>
        <button className="arrow" onClick={() => handleMove(1)} aria-label="Siguiente">&gt;</button>
      </div>

      <style jsx global>{`
        * { margin:0; padding:0; box-sizing:border-box; }
        html { font-size:62.5%; }
        body { 
          background-color:#fff;
          font-family: Arial, sans-serif;
          color: #fff;
          overflow: hidden;
        }
        .slideshow-container {
          width:100vw;
          height:100vh;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
          transition: background-image 0.8s ease;
          position:relative;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          padding: 4rem;
        }
        .info-panel {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 4rem;
          max-width: 35%;
          z-index: 5;
        }
        .info-title {
          font-size: 4rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .info-text {
          font-size: 1.6rem;
          line-height: 1.5;
          color: #fff;
        }
        .carousel-wrapper {
          position: absolute;
          top: 50%;  
          left: 50%; 
          transform: translate(25%, -7%);
        }
        .carousel-circle {
          position: relative;
          width: 70rem;
          height: 70rem;
          border: 1px dashed #eebe97;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .slide-item {
          position: absolute;
          border-radius: 50%;
          outline: 0.2px solid #fff;
          width: 6rem;
          height: 6rem;
          background-size: cover;
          background-position: center;
          transition: transform 1s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.5s;
        }
        .arrow-controls {
          position: absolute;
          right: 12rem;       
          top: 90%;           
          transform: translateY(-50%);
          display: flex;
          flex-direction: row; 
          gap: 2rem;
          z-index: 10;
        }
        .arrow {
          font-size: 3rem;
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s;
          color: #000;
        }
        .arrow:hover {
          background: rgba(255, 255, 255, 1);
        }
      `}</style>
    </main>
  );
}