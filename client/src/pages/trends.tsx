import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, TrendingUp, AlertTriangle, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import type { CyberTrend } from "@shared/schema";

export default function Trends() {
  const { data: trends, isLoading } = useQuery<CyberTrend[]>({
    queryKey: ["/api/cyber-trends"],
  });

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "cyber-green": return "text-green-500";
      case "cyber-blue": return "text-blue-500";
      case "cyber-orange": return "text-orange-500";
      case "red-500": return "text-red-500";
      case "red-600": return "text-red-600";
      case "purple-500": return "text-purple-500";
      default: return "text-blue-500";
    }
  };

  const getBgColorClass = (color: string) => {
    switch (color) {
      case "cyber-green": return "bg-green-500";
      case "cyber-blue": return "bg-blue-500";
      case "cyber-orange": return "bg-orange-500";
      case "red-500": return "bg-red-500";
      case "red-600": return "bg-red-600";
      case "purple-500": return "bg-purple-500";
      default: return "bg-blue-500";
    }
  };

  const getSeverityBadge = (severity: string) => {
    const severityConfig = {
      low: { color: "bg-green-100 text-green-800", icon: Shield },
      medium: { color: "bg-yellow-100 text-yellow-800", icon: AlertTriangle },
      high: { color: "bg-orange-100 text-orange-800", icon: TrendingUp },
      critical: { color: "bg-red-100 text-red-800", icon: Zap }
    };

    const config = severityConfig[severity as keyof typeof severityConfig] || severityConfig.medium;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </span>
    );
  };

  const getCategoryBadge = (category: string) => {
    const categoryConfig = {
      threat: "bg-red-50 text-red-700 border-red-200",
      technology: "bg-blue-50 text-blue-700 border-blue-200",
      policy: "bg-green-50 text-green-700 border-green-200",
      awareness: "bg-purple-50 text-purple-700 border-purple-200"
    };

    const colorClass = categoryConfig[category as keyof typeof categoryConfig] || categoryConfig.awareness;

    return (
      <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${colorClass}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Cyber Trends</h2>
        </div>
        <div className="space-y-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-md border border-gray-100 animate-pulse">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="flex space-x-2 mb-2">
                    <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                    <div className="h-6 w-20 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-24"></div>
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
        <h2 className="text-xl font-bold text-gray-800">Cyber Trends</h2>
      </div>

      <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <TrendingUp className="inline w-4 h-4 mr-1" />
          Stay updated with the latest cybersecurity developments and emerging threats.
        </p>
      </div>

      <div className="space-y-4">
        {trends?.map((trend) => (
          <div key={trend.id} className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
            <div className="flex items-start space-x-3">
              <div className={`w-10 h-10 ${getBgColorClass(trend.color)} bg-opacity-20 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                <i className={`${trend.icon} ${getIconColorClass(trend.color)} text-sm`}></i>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-base">{trend.title}</h3>
                  {getSeverityBadge(trend.severity)}
                </div>
                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{trend.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {getCategoryBadge(trend.category)}
                  </div>
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">{trend.source}</span> • {formatDate(trend.publishedDate)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}