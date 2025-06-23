import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Heart, Search, ExternalLink, Copy, Check } from "lucide-react";
import { Link } from "wouter";
import type { Foundation } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Foundations() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFoundationForModal, setSelectedFoundationForModal] = useState<Foundation | null>(null);
  const [copiedText, setCopiedText] = useState<string>("");
  const { toast } = useToast();

  const { data: foundations, isLoading } = useQuery<Foundation[]>({
    queryKey: ["/api/foundations"],
  });

  const filteredFoundations = foundations?.filter(foundation =>
    foundation.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    foundation.mission.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      });
      setTimeout(() => setCopiedText(""), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the text manually",
        variant: "destructive",
      });
    }
  };

  const DonationModal = ({ foundation, onClose }: { foundation: Foundation; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-lg max-w-md w-full p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-5 w-5 text-red-500" />
            <span className="font-semibold text-card-foreground">Donate to {foundation.name}</span>
          </div>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            ✕
          </button>
        </div>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            <p className="font-medium mb-2 text-card-foreground">Mission:</p>
            <p>{foundation.mission}</p>
          </div>
          
          <div className="space-y-3">
            {foundation.easypaisa && (
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-green-800">Call to Donate</p>
                    <p className="text-green-600">{foundation.easypaisa}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(foundation.easypaisa!, "Phone number")}
                    className="text-green-600 border-green-300 hover:bg-green-100"
                  >
                    {copiedText === foundation.easypaisa ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            )}

            {foundation.jazzcash && foundation.jazzcash !== foundation.easypaisa && (
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-purple-800">Helpline</p>
                    <p className="text-purple-600">{foundation.jazzcash}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(foundation.jazzcash!, "Helpline number")}
                    className="text-purple-600 border-purple-300 hover:bg-purple-100"
                  >
                    {copiedText === foundation.jazzcash ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            )}

            {foundation.bankAccount && (
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="space-y-2">
                  <p className="font-medium text-blue-800">Bank Transfer</p>
                  <div className="text-sm text-blue-600 space-y-1">
                    <div className="flex justify-between items-center">
                      <span>Bank: {foundation.bankName}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Account: {foundation.accountTitle}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>A/C: {foundation.bankAccount}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(foundation.bankAccount!, "Account number")}
                        className="text-blue-600 border-blue-300 hover:bg-blue-100"
                      >
                        {copiedText === foundation.bankAccount ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <div className="text-xs text-blue-500 mt-1">
                      IBAN: PK{foundation.bankName?.includes('Meezan') ? '40MEZN0002010100643642' : '08UMBL0850300017087201'}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {foundation.website && (
            <div className="pt-3 border-t">
              <a
                href={foundation.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Visit Official Website</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Education Foundations</h2>
        </div>
        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 animate-pulse">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div className="flex-1">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-10 w-32 bg-gray-200 rounded"></div>
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
        <h2 className="text-xl font-bold text-gray-800">Education Foundations</h2>
      </div>

      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <Heart className="inline w-4 h-4 mr-1 text-red-500" />
          Support education in Pakistan by donating to verified NGOs working to improve literacy and educational access.
        </p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search foundations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredFoundations?.map((foundation) => (
          <div key={foundation.id} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-start space-x-4">
              <div className={`w-16 h-16 bg-${foundation.color} bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                <img 
                  src={foundation.logo} 
                  alt={`${foundation.name} logo`}
                  className="w-12 h-12 object-contain rounded"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling!.style.display = 'flex';
                  }}
                />
                <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded flex items-center justify-center" style={{display: 'none'}}>
                  <Heart className="h-6 w-6 text-blue-500" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-800 text-lg">{foundation.name}</h3>
                  {foundation.featured && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-2 font-medium">{foundation.mission}</p>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{foundation.description}</p>
                <Button 
                  onClick={() => setSelectedFoundationForModal(foundation)}
                  className="bg-red-500 hover:bg-red-600 text-white"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredFoundations?.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No foundations found matching your search.</p>
        </div>
      )}

      {selectedFoundationForModal && (
        <DonationModal 
          foundation={selectedFoundationForModal} 
          onClose={() => setSelectedFoundationForModal(null)}
        />
      )}
    </div>
  );
}