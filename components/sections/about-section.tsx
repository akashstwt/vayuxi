import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0a1421] to-[#0c1825]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built by Site People, for Site People
            </h2>
            <p className="text-gray-300 mb-6">
              VAYUXI ERP is an Indian tech startup focused on digitizing on-site work in the construction 
              and engineering industry. We understand the pain of paperwork, WhatsApp chaos, and calculation 
              mistakes.
            </p>
            <p className="text-gray-300 mb-6">
              That's why we built a simple mobile app that makes your site management smart, fast, and error-free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50">
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300">
                  To empower every contractor and supervisor with easy technology.
                </p>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50">
                <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300">
                  A paperless, productive construction site across India.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-tr from-blue-800/30 to-blue-600/30 p-6 rounded-2xl overflow-hidden border border-blue-500/30 shadow-xl">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-700/20 rounded-full blur-2xl -ml-20 -mb-20"></div>
              
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                From Site to Sheet, Simplified
              </h3>
              
              <div className="space-y-4 relative z-10">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Our team includes civil engineers, site managers, and tech developers who have lived the problems.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    We believe technology shouldn't add complexity to your work — it should remove it completely.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    Save up to 30% of your management costs with our streamlined approach.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 relative z-10">
                <div className="flex items-center p-4 bg-blue-900/40 rounded-lg">
                  <span className="text-3xl text-blue-300 font-bold mr-3">🚀</span>
                  <p className="text-white italic">
                    "We didn't just build software. We engineered a time machine."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}