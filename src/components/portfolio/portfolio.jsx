import React, { useState, useEffect, useRef } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const scrollAccumulatorRef = useRef(0);
  const [isInView, setIsInView] = useState(false);
  const hasSnappedRef = useRef(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);
  const scrollDirectionRef = useRef('down');
  const lastScrollY = useRef(0);

  const items = [
    { 
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2666&auto=format&fit=crop", 
      title: "100% Human-grade ingredients", 
      icon: "🥩",
    },
    { 
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=2666&auto=format&fit=crop", 
      title: "Nutritionist formulated & vet approved", 
      icon: "🐾",
    },
    { 
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2666&auto=format&fit=crop", 
      title: "Delivered fresh to your door", 
      icon: "🚚",
    },
  ];

  // Effet parallaxe
  useEffect(() => {
    const handleParallax = () => {
      if (!containerRef.current || !isInView) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = -rect.top / window.innerHeight;
      setParallaxOffset(scrollProgress * 50); // Déplacement de 50px max
    };

    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, [isInView]);

  // Détection et snap au centre - ULTRA OPTIMISÉ
  useEffect(() => {
    const checkPosition = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentScrollY = window.scrollY;
      
      // Déterminer la direction du scroll
      if (currentScrollY > lastScrollY.current) {
        scrollDirectionRef.current = 'down';
      } else if (currentScrollY < lastScrollY.current) {
        scrollDirectionRef.current = 'up';
      }
      lastScrollY.current = currentScrollY;
      
      const containerCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      const distanceFromCenter = Math.abs(containerCenter - screenCenter);
      
      // Détection super agressive en descente
      const isComingFromTop = rect.top > 0 && rect.top < windowHeight;
      const isAlmostVisible = rect.top < windowHeight * 0.6;
      const isInCenterZone = distanceFromCenter < windowHeight * 0.4;
      
      // Condition de snap différente selon la direction
      let shouldSnap = false;
      if (scrollDirectionRef.current === 'down') {
        // En descendant : snap dès que le portfolio entre dans la zone supérieure
        shouldSnap = (isComingFromTop && isAlmostVisible) || isInCenterZone;
      } else {
        // En montant : comportement normal
        shouldSnap = isInCenterZone;
      }
      
      if (shouldSnap && !hasSnappedRef.current) {
        hasSnappedRef.current = true;
        const targetScroll = container.offsetTop - (windowHeight - container.offsetHeight) / 2;
        
        // Scroll instantané si très proche, sinon smooth
        const scrollBehavior = Math.abs(rect.top - windowHeight / 2) < 100 ? 'auto' : 'smooth';
        
        window.scrollTo({
          top: targetScroll,
          behavior: scrollBehavior
        });
        setIsInView(true);
        window.dispatchEvent(new CustomEvent('portfolioActive', { detail: { active: true } }));
      } else if (!shouldSnap && hasSnappedRef.current) {
        if (distanceFromCenter > windowHeight * 0.7) {
          hasSnappedRef.current = false;
          setIsInView(false);
          window.dispatchEvent(new CustomEvent('portfolioActive', { detail: { active: false } }));
        }
      }
      
      // Activer l'interactivité dans une zone plus large
      if (distanceFromCenter < windowHeight * 0.3) {
        setIsInView(true);
      }
      
      // Réinitialiser si complètement au-dessus
      if (rect.top > windowHeight * 1.2) {
        setActiveIndex(0);
        scrollAccumulatorRef.current = 0;
        hasSnappedRef.current = false;
        setIsInView(false);
      }
    };
    
    // Vérification encore plus fréquente pour ne rien rater
    const interval = setInterval(checkPosition, 30);
    window.addEventListener('scroll', checkPosition, { passive: true });
    checkPosition();
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', checkPosition);
    };
  }, []);

  // Gestion du scroll avec la molette
  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current || !isInView) return;

      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;
      
      if (activeIndex === 0 && scrollingUp) {
        return;
      }
      
      if (activeIndex === items.length - 1 && scrollingDown) {
        return;
      }
      
      e.preventDefault();
      
      const newValue = scrollAccumulatorRef.current + e.deltaY;
      const threshold = 300;
      
      if (newValue > threshold && activeIndex < items.length - 1) {
        setActiveIndex(current => current + 1);
        scrollAccumulatorRef.current = 0;
      } else if (newValue < -threshold && activeIndex > 0) {
        setActiveIndex(current => current - 1);
        scrollAccumulatorRef.current = 0;
      } else {
        scrollAccumulatorRef.current = newValue;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [activeIndex, items.length, isInView]);

  // Gestion des swipes sur mobile
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!isInView) return;
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (!isInView) return;
      touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
      if (!isInView) return;
      
      const swipeDistance = touchStartY.current - touchEndY.current;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0 && activeIndex < items.length - 1) {
          // Swipe up - prochaine slide
          setActiveIndex(current => current + 1);
        } else if (swipeDistance < 0 && activeIndex > 0) {
          // Swipe down - slide précédente
          setActiveIndex(current => current - 1);
        }
      }

      touchStartY.current = 0;
      touchEndY.current = 0;
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [activeIndex, items.length, isInView]);

  return (
    <div 
      ref={containerRef}
      className="portfolio-container"
    >
      <div className="portfolio-sticky">
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const isPrev = activeIndex > index;
          const distance = Math.abs(activeIndex - index);
          
          return (
            <div
              key={index}
              className={`portfolio-slide ${isActive ? 'active' : ''} ${
                isPrev ? 'prev' : 'next'
              }`}
              style={{
                filter: isActive ? 'blur(0px)' : `blur(${distance * 3}px)`,
              }}
            >
              {/* Image de fond avec parallaxe */}
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
                loading={index === 0 ? "eager" : "lazy"}
                style={{
                  transform: isActive ? `translateY(${parallaxOffset}px) scale(1.1)` : 'translateY(0) scale(1)',
                }}
              />
              
              {/* Overlay gradient */}
              <div className="portfolio-overlay" />
              
              {/* Contenu texte */}
              <div className="portfolio-content">
                <div className={`portfolio-text ${isActive ? 'active' : ''}`}>
                  <div className="portfolio-icon">
                    {item.icon}
                  </div>
                  <h2 className="portfolio-title">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Indicateur de scroll en bas */}
              <div className="portfolio-indicator">
                <div className="portfolio-dots">
                  {items.map((_, idx) => (
                    <div
                      key={idx}
                      className={`portfolio-dot ${activeIndex === idx ? 'active' : ''}`}
                    />
                  ))}
                </div>
                {activeIndex < items.length - 1 && (
                  <div className="portfolio-scroll-hint">
                    <span className="desktop-hint">Scroll</span>
                    <span className="mobile-hint">Swipe</span>
                    <svg 
                      className="portfolio-arrow" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                      />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;