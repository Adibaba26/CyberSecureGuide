import { ReactNode } from "react";
import BottomNavigation from "./bottom-navigation";

interface MobileLayoutProps {
  children: ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
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
          <h1 className="text-xl font-bold">CyberAware</h1>
          <i className="fas fa-shield-alt text-2xl"></i>
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
