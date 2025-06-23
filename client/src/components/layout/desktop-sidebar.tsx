import { useLocation } from "wouter";
import { Link } from "wouter";
import { Home, Lightbulb, HelpCircle, Images, TrendingUp, Heart, Info, Phone } from "lucide-react";

export default function DesktopSidebar() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/tips", icon: Lightbulb, label: "Cyber Tips" },
    { path: "/quiz", icon: HelpCircle, label: "Quiz" },
    { path: "/posters", icon: Images, label: "Safety Posters" },
    { path: "/trends", icon: TrendingUp, label: "Cyber Trends" },
    { path: "/foundations", icon: Heart, label: "Foundations" },
    { path: "/donation-info", icon: Info, label: "Donation Guide" },
    { path: "/contact", icon: Phone, label: "Contact" },
  ];

  return (
    <div className="desktop-sidebar">
      <div className="flex items-center space-x-3 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <i className="fas fa-shield-alt text-white text-lg"></i>
        </div>
        <div>
          <h1 className="text-xl font-bold text-gray-800">CyberAware</h1>
          <p className="text-sm text-gray-500">Education Platform</p>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link key={path} href={path}>
            <div className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
              isActive(path) 
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            }`}>
              <Icon className="h-5 w-5" />
              <span className="font-medium">{label}</span>
            </div>
          </Link>
        ))}
      </nav>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="font-semibold text-blue-800 mb-2">Support Education</h3>
        <p className="text-sm text-blue-700 mb-3">
          Help provide quality education to underprivileged children in Pakistan.
        </p>
        <Link href="/foundations">
          <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-lg transition-colors">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
}