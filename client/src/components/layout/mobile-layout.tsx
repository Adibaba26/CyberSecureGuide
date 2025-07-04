import { ReactNode, useState, useEffect } from "react";
import BottomNavigation from "./bottom-navigation";
import DesktopSidebar from "./desktop-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="mobile-container">
        <div className="desktop-layout">
          <DesktopSidebar />
          <div className="desktop-content">
            {children}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mobile-container">
      {/* Status Bar Mockup */}
      <div className="status-bar">
        <span>9:41</span>
        <span className="flex items-center space-x-1">
          <i className="fas fa-signal text-xs"></i>
          <i className="fas fa-wifi text-xs"></i>
          <i className="fas fa-battery-three-quarters text-xs"></i>
        </span>
      </div>

      {/* App Header */}
      <div className="app-header text-white p-4 pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">SecureLearn</h1>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <i className="fas fa-shield-alt text-2xl"></i>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="pb-20 min-h-screen">
        {children}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
