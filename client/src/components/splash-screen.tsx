import { useState, useEffect } from 'react';
import logoImage from '@assets/default_1750716771671.png';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start the shrink animation after 2.5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(true);
      
      // Complete the splash screen after animation finishes
      setTimeout(() => {
        onComplete();
      }, 800); // Animation duration
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-800 ease-in-out ${
      isAnimating 
        ? 'bg-transparent' 
        : 'bg-gradient-to-br from-blue-600 to-blue-800'
    }`}>
      <div className={`transition-all duration-800 ease-in-out ${
        isAnimating 
          ? 'fixed top-4 left-4 w-12 h-12 opacity-0 pointer-events-none' 
          : 'w-80 h-80 max-w-[80vw] max-h-[80vh]'
      }`}>
        <img 
          src={logoImage} 
          alt="SecureLearn Logo" 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}