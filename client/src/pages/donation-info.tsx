import { ArrowLeft, CreditCard, Smartphone, Building, QrCode, Shield, Heart } from "lucide-react";
import { Link } from "wouter";

export default function DonationInfo() {
  const donationMethods = [
    {
      icon: Smartphone,
      title: "Mobile Wallets",
      color: "bg-green-500",
      methods: [
        "EasyPaisa: Transfer money using account number",
        "JazzCash: Send money via mobile number",
        "SadaPay: Quick digital transfers",
        "NayaPay: Instant mobile payments"
      ]
    },
    {
      icon: Building,
      title: "Bank Transfer",
      color: "bg-blue-500",
      methods: [
        "Direct bank account transfer",
        "Online banking platforms",
        "ATM transfers",
        "Branch visits for cash deposits"
      ]
    },
    {
      icon: QrCode,
      title: "QR Code Payments",
      color: "bg-purple-500",
      methods: [
        "Scan QR codes with mobile apps",
        "Quick and secure transactions",
        "Works with most banking apps",
        "Instant payment confirmation"
      ]
    },
    {
      icon: CreditCard,
      title: "Online Payments",
      color: "bg-orange-500",
      methods: [
        "Credit/Debit card payments",
        "Online payment gateways",
        "International transfers",
        "Secure encrypted transactions"
      ]
    }
  ];

  const steps = [
    {
      step: 1,
      title: "Choose a Foundation",
      description: "Browse our verified list of Pakistani education NGOs and select one that resonates with your values."
    },
    {
      step: 2,
      title: "Select Payment Method",
      description: "Choose from EasyPaisa, JazzCash, bank transfer, or online payment options based on your preference."
    },
    {
      step: 3,
      title: "Get Payment Details",
      description: "Click 'Donate Now' to access the foundation's payment information including account numbers and instructions."
    },
    {
      step: 4,
      title: "Make Your Donation",
      description: "Complete the transaction using your chosen method. Keep the receipt for your records and tax purposes."
    },
    {
      step: 5,
      title: "Verify Transaction",
      description: "Contact the foundation directly if you need confirmation or want updates on how your donation is being used."
    }
  ];

  return (
    <div className="p-6 page-transition">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <h2 className="text-xl font-bold text-gray-800">How to Donate</h2>
      </div>

      <div className="mb-6 p-4 bg-red-50 rounded-lg border border-red-200">
        <div className="flex items-center space-x-2 mb-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h3 className="font-semibold text-red-800">Make a Difference in Education</h3>
        </div>
        <p className="text-sm text-red-700">
          Your donations help provide quality education, books, and facilities to underprivileged children across Pakistan.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Step-by-Step Guide</h3>
        <div className="space-y-4">
          {steps.map((item) => (
            <div key={item.step} className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Available Payment Methods</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {donationMethods.map((method) => {
            const IconComponent = method.icon;
            return (
              <div key={method.title} className="bg-white rounded-lg p-5 shadow-md border border-gray-100">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 ${method.color} bg-opacity-20 rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`h-5 w-5 ${method.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h4 className="font-semibold text-gray-800">{method.title}</h4>
                </div>
                <ul className="space-y-1">
                  {method.methods.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-5 border border-blue-200">
        <div className="flex items-start space-x-3">
          <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800 mb-2">Security & Verification</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• All foundations are verified and registered NGOs</li>
              <li>• Payment details are directly from official sources</li>
              <li>• Keep transaction receipts for tax deduction purposes</li>
              <li>• Contact foundations directly for donation certificates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}