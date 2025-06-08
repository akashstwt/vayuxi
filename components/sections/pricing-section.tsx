import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Basic",
    price: "₹199",
    description: "Essential tools to get you started",
    features: [
      "Attendance Management",
      "Daily Progress Reports",
      "1 Site",
      "Limited Exports",
      "Mobile App Access",
      "Basic Support"
    ],
    cta: "Choose Plan",
    highlight: false,
  },
  {
    name: "Standard",
    price: "₹499",
    description: "Advanced features for growing businesses",
    features: [
      "Everything in Basic",
      "Auto Salary Slips",
      "Analytics Dashboard",
      "Multiple Sites",
      "Unlimited Exports",
      "Priority Support"
    ],
    cta: "Choose Plan",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹999",
    description: "Complete solution with all features included",
    features: [
      "Everything in Standard",
      "GST Bills Generation",
      "Invoice Sharing",
      "File Uploads",
      "Advanced Analytics",
      "Dedicated Support"
    ],
    cta: "Choose Plan",
    highlight: false,
  }
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-8 bg-[#0c1825]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pricing</h2>
          <p className="text-gray-300 text-lg">
            Flexible pricing plans designed to meet your needs. All plans include core features with different limits.
          </p>
          <div className="mt-6 inline-block bg-blue-900/30 px-4 py-2 rounded-full text-blue-300 text-sm">
            <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>
            Join before launch and get 30% off any plan
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-blue-900/50 to-[#0f1d2a] border border-blue-500/30 shadow-lg shadow-blue-900/20 transform hover:-translate-y-2' 
                  : 'bg-[#0f1d2a] border border-blue-900/20 hover:border-blue-700/30 transform hover:-translate-y-1'
              }`}
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-end mb-6">
                  <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 mt-1 ${plan.highlight ? 'text-blue-400' : 'text-blue-500'}`}>
                        <Check size={16} />
                      </span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    plan.highlight 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-900/50 hover:bg-blue-800 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-900/20 rounded-xl p-6 border border-blue-900/30 max-w-3xl">
            <h3 className="text-xl font-bold text-white mb-3">Need a custom plan?</h3>
            <p className="text-gray-300 mb-6">
              We offer custom solutions for enterprise clients with special requirements.
              Contact our sales team to discuss your needs.
            </p>
            <button className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}