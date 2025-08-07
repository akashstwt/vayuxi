import { 
  BarChart3, 
  Users, 
  Package, 
  Settings, 
  Layers, 
  Clock, 
  Wifi, 
  ZoomIn 
} from 'lucide-react';

const features = [
  {
    title: "Domain Specific Intelligence",
    description: "Built-in Indian Standards (IS) calculations for accuracy. Reduces manual errors by 80%.",
    icon: <BarChart3 size={28} className="text-blue-400" />
  },
  {
    title: "Easy-to-Use, Offline-First Visual UI",
    description: "Designed for semi-literate users at remote sites Workers who only know basic numbers (1–10) can generate complex invoices & reports",
    icon: <Users size={28} className="text-blue-400" />
  },
  {
    title: "Highly Customizable & Future-Ready",
    description: "No-code customization for different contractor needs. AI roadmap for predictive analytics & automation.",
    icon: <Package size={28} className="text-blue-400" />
  },
  {
    title: "First-Mover Advantage in SME Segment",
    description: "Existing ERPs only target large enterprises. We focus on 80% of contractors in India & other developing markets (SE Asia, Africa)",
    icon: <Settings size={28} className="text-blue-400" />
  },
  {
    title: "Unmatched ROI for SMEs",
    description: "120x – 400x ROI per year through time savings, error reduction & paperless operations. Priced for affordability (₹1,500/user/year)",
    icon: <Layers size={28} className="text-blue-400" />
  },
  {
    title: "Time-Saving Automation",
    description: "It makes construction sites faster, error-free & more profitable (min.15–30% profit margin increases)",
    icon: <Clock size={28} className="text-blue-400" />
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-3 md:px-8 bg-[#0c1825]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Features</h2>
          <p className="text-gray-300 text-lg">
            VAYUXI ERP is the engineering revolution in your palm. One app for all your construction site needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0f1d2a] p-6 rounded-lg border border-blue-900/30 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 group"
            >
              <div className="bg-blue-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-800/40 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-xl p-8 border border-blue-900/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Simplicity that Feels Like Magic
              </h3>
              <p className="text-gray-300 mb-6">
                The UI/UX of VAYUXI is so intuitive, you won’t need a manual, a demo, or even training.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 mt-1 text-blue-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">
                    From the moment you open the app, everything just makes sense.
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 mt-1 text-blue-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">
                    Your site team — even without any technical background — can start using the app in under 60 seconds.
                  </span>
                </li>
                <li className="flex">
                  <span className="mr-4 flex-shrink-0 mt-1 text-blue-400">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  <span className="text-gray-300">
                    Zero onboarding. Zero confusion. Zero resistance.
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-900/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                <blockquote className="text-white text-lg md:text-xl italic font-medium relative z-10">
                  We believe technology shouldn’t complicate your work — It should quietly remove all the noise.
                </blockquote>
                <blockquote className="text-white text-lg md:text-xl italic mt-5 font-medium relative z-10">
                  “Built for the boots on the ground — not just the ones in the boardroom.”
                  Or
                  “Technology so simple, it disappears into your workflow.”
                </blockquote>
                <div className="mt-8 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center">
                      <span className="text-white font-bold">VX</span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">VAYUXI Team</p>
                    <p className="text-gray-400 text-sm">Engineering Experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}