import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Posters() {
  const posters = [
    {
      id: 1,
      title: "Stay Safe Online!",
      description: "Protect your digital identity with strong passwords and secure browsing habits.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Digital security and cybersecurity awareness"
    },
    {
      id: 2,
      title: "Think Before You Click!",
      description: "Verify links and attachments before clicking to avoid phishing attacks and malware.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Cybersecurity protection with digital locks and shields"
    },
    {
      id: 3,
      title: "Secure Your Network!",
      description: "Use secure Wi-Fi connections and enable firewall protection for your devices.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Network security and data protection concepts"
    }
  ];

  return (
    <div className="p-6 page-transition">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <h2 className="text-xl font-bold text-gray-800">Safety Posters</h2>
      </div>

      <div className="space-y-6">
        {posters.map((poster) => (
          <div key={poster.id} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100">
            <img 
              src={poster.image} 
              alt={poster.alt}
              className="w-full h-48 object-cover rounded-lg mb-4"
              loading="lazy"
            />
            <h3 className="font-semibold text-gray-800 mb-2">{poster.title}</h3>
            <p className="text-sm text-gray-600">{poster.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
