"use client";

import React, { useState, useEffect } from 'react';

const slideImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=80"
];

const slideInfo = [
  { title: "220kV Substation Integration", text: "Complete design and commissioning of 220kV substation for industrial park." },
  { title: "Pharmaceutical Plant Instrumentation", text: "Full instrumentation upgrade for FDA-compliant pharmaceutical facility." },
  { title: "IEC 61439 LV Panel Manufacturing", text: "Design and manufacturing of type-tested LV panels up to 6300A." },
  { title: "36kV VCB Panel Installation", text: "Supply and installation of medium voltage VCB panels for power distribution." },
  { title: "SCADA Implementation", text: "Comprehensive SCADA system implementation for process monitoring and control." },
  { title: "Smart Building BMS", text: "Building Management System for premium commercial complex." },
  { title: "Data Center Power Infrastructure", text: "Critical power infrastructure for Tier-3 data center facility." },
   { title: "Automotive Plant Electrical", text: "Complete electrical infrastructure for automotive manufacturing plant." }
];

export default function CarouselPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const size = 70;

  const getSlideTransform = (position) => {
    const radius = size / 2;
    const angle = position * 47 + 141;
    const scale = position === 0 ? 5 : (position === -1 || position === 1 ? 3 : 1);
    return `rotate(${angle}deg) translateY(${radius}rem) rotate(${-angle}deg) scale(${scale})`;
  };

  const handleMove = (direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
  
    const nextSlide = (currentSlide + direction + slideImages.length) % slideImages.length;
    setCurrentSlide(nextSlide);

    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (

    <main 
      className="slideshow-container relative" 
      style={{ backgroundImage: `url(${slideImages[currentSlide]})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none" />
  
      <div className="info-panel">
        <h1 className="info-title">{slideInfo[currentSlide].title}</h1>
        <p className="info-text">{slideInfo[currentSlide].text}</p>
      </div>

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

      <div className="arrow-controls">
        <button className="arrow" onClick={() => handleMove(-1)} aria-label="Anterior">&lt;</button>
        <button className="arrow" onClick={() => handleMove(1)} aria-label="Siguiente">&gt;</button>
      </div>

      <style jsx global>{`
       
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