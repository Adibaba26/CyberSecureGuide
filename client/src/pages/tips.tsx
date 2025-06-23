import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { CyberTip } from "@shared/schema";

export default function Tips() {
  const { data: tips, isLoading } = useQuery<CyberTip[]>({
    queryKey: ["/api/cyber-tips"],
  });

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "cyber-green": return "text-green-500";
      case "cyber-blue": return "text-blue-500";
      case "cyber-orange": return "text-orange-500";
      case "red-500": return "text-red-500";
      case "purple-500": return "text-purple-500";
      case "green-500": return "text-green-500";
      default: return "text-blue-500";
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case "cyber-green": return "bg-green-500";
      case "cyber-blue": return "bg-blue-500";
      case "cyber-orange": return "bg-orange-500";
      case "red-500": return "bg-red-500";
      case "purple-500": return "bg-purple-500";
      case "green-500": return "bg-green-500";
      default: return "bg-blue-500";
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-foreground">Cyber Safety Tips</h2>
        </div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card rounded-xl p-5 shadow-md border border-border animate-pulse">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 page-transition">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <h2 className="text-xl font-bold text-gray-800">Cyber Safety Tips</h2>
      </div>

      <div className="space-y-4">
        {tips?.map((tip) => (
          <div key={tip.id} className="bg-card rounded-xl p-5 shadow-md border border-border">
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 ${getBgColorClass(tip.color)} bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                <i className={`${tip.icon} ${getIconColorClass(tip.color)} text-sm`}></i>
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
