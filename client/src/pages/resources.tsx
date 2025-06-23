import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, ExternalLink, Download } from "lucide-react";
import { Link } from "wouter";
import type { Resource } from "@shared/schema";

export default function Resources() {
  const { data: resources, isLoading } = useQuery<Resource[]>({
    queryKey: ["/api/resources"],
  });

  const getIconColorClass = (color: string) => {
    switch (color) {
      case "cyber-green": return "text-green-500";
      case "cyber-blue": return "text-blue-500";
      case "cyber-orange": return "text-orange-500";
      case "red-500": return "text-red-500";
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
      case "purple-500": return "bg-purple-500";
      default: return "bg-blue-500";
    }
  };

  const getActionText = (type: string) => {
    switch (type) {
      case "video": return "Watch Video";
      case "website": return "Visit Website";
      case "pdf": return "Download PDF";
      case "course": return "Start Learning";
      default: return "Learn More";
    }
  };

  const getActionIcon = (type: string) => {
    switch (type) {
      case "pdf": return <Download className="ml-2 h-4 w-4" />;
      default: return <ExternalLink className="ml-2 h-4 w-4" />;
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Learning Resources</h2>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
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
        <h2 className="text-xl font-bold text-gray-800">Learning Resources</h2>
      </div>

      <div className="space-y-4">
        {resources?.map((resource) => (
          <div key={resource.id} className="bg-white rounded-xl p-5 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 ${getBgColorClass(resource.color)} bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <i className={`${resource.icon} ${getIconColorClass(resource.color)} text-xl`}></i>
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{resource.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{resource.description}</p>
                <a 
                  href={resource.url} 
                  className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors font-medium touch-feedback"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span>{getActionText(resource.type)}</span>
                  {getActionIcon(resource.type)}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
