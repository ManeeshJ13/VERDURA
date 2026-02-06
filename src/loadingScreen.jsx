import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Navigate, useNavigate } from 'react-router-dom';

const LoadingScreen = () => {
  const words = ['Modular Kitchen', 'Living', 'Dining', 'Bedroom'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const wordRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Initial animation for the heading
    gsap.fromTo(headingRef.current, 
      { 
        opacity: 0, 
        y: isMobile ? 30 : 50,
        scale: 0.8 
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: isMobile ? 1 : 1.2,
        ease: "power3.out",
        delay: 0.3
      }
    );

    // Initial animation for the word container
    gsap.fromTo(containerRef.current,
      {
        opacity: 0,
        scale: 0.8,
        rotationY: -15
      },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: 0.8
      }
    );
  }, [isMobile]);

  useEffect(() => {
    const animateWord = () => {
      const tl = gsap.timeline();
      
      // Exit animation
      tl.to(wordRef.current, {
        opacity: 0,
        y: isMobile ? -20 : -30,
        scale: 0.8,
        rotationX: -90,
        duration: 0.4,
        ease: "power2.in"
      })
      // Update word index
      .call(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      })
      // Enter animation
      .fromTo(wordRef.current, 
        {
          opacity: 0,
          y: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.6,
          ease: "power1.out"
        }
      );

      // Add subtle container animation
      tl.to(containerRef.current, {
        scale: isMobile ? 1.03 : 1.05,
        duration: 0.15,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
      }, "-=0.3");
    };

    const interval = setInterval(animateWord, 2500);
    return () => clearInterval(interval);
  }, [words.length, isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Exit animation before navigation
      const tl = gsap.timeline();
      tl.to([headingRef.current, containerRef.current], {
        opacity: 0,
        y: isMobile ? -30 : -50,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.in",
        stagger: 0.1
      })
      .call(() => {
        navigate("/main");
      });
    }, 8000);

    return () => clearTimeout(timer);
  }, [isMobile, navigate]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden',
      padding: isMobile ? '1rem' : '2rem'
    }}>
      <div style={{ 
        textAlign: 'center',
        width: '100%',
        maxWidth: isMobile ? '90vw' : '100%'
      }}>
        <h1 
          ref={headingRef}
          style={{
            fontSize: isMobile 
              ? 'clamp(1.5rem, 6vw, 2.5rem)' 
              : 'clamp(2rem, 8vw, 4rem)',
            fontWeight: 'bold',
            color: '#374151',
            marginBottom: isMobile ? '0.5rem' : '1rem',
            lineHeight: 1.2,
            display: 'flex',
            gap: isMobile ? '10px' : '20px',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: isMobile ? '0 0.5rem' : '0'
          }}
        >
          Customized{' '}
          <div 
            ref={containerRef}
            style={{
              position: 'relative',
              backgroundColor: '#C9252B',
              color: 'white',
              padding: isMobile 
                ? 'clamp(0.3rem, 2vw, 0.5rem) clamp(0.6rem, 3vw, 1rem)' 
                : '0.5rem 1rem',
              borderRadius: isMobile ? '0.375rem' : '0.5rem',
              boxShadow: isMobile 
                ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              fontWeight: 'bold',
              minHeight: '1em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              minWidth: isMobile ? '140px' : 'auto'
            }}
          >
            <span
              ref={wordRef}
              style={{
                display: 'inline-block',
                whiteSpace: 'nowrap',
                transformOrigin: 'center center',
                fontSize: isMobile ? 'clamp(1.2rem, 5vw, 1.8rem)' : 'inherit'
              }}
            >
              {words[currentWordIndex]}
            </span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;