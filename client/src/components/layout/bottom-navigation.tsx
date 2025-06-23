import { useLocation } from "wouter";
import { Link } from "wouter";
import { Home, Lightbulb, HelpCircle, Images, TrendingUp } from "lucide-react";

export default function BottomNavigation() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/tips", icon: Lightbulb, label: "Tips" },
    { path: "/quiz", icon: HelpCircle, label: "Quiz" },
    { path: "/posters", icon: Images, label: "Posters" },
    { path: "/trends", icon: TrendingUp, label: "Trends" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bottom-nav border-t border-gray-200 px-4 py-2">
      <div className="flex justify-around">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link key={path} href={path}>
            <button className={`flex flex-col items-center py-2 px-3 touch-feedback ${
              isActive(path) ? "text-blue-500" : "text-muted-foreground"
            }`}>
              <Icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
