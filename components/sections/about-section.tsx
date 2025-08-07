import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-3 md:px-8 bg-gradient-to-b from-[#0a1421] to-[#0c1825]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Built by Site People, for Site People
            </h2>
            <p className="text-gray-300 mb-6">
              There are 70M+ blue-collar construction professionals in India alone. Vayuxi is the first platform built for them. Simplifying construction site operations with an easy, offline-ready ERP designed for real field-level data entry and reporting.            </p>
            <p className="text-gray-300 mb-6">
              We understand the real pain — endless paperwork, scattered WhatsApp messages, and costly calculation errors.
            </p>
            <p className="text-gray-300 mb-6">
              That’s exactly why we created a simple, powerful mobile app to make your site management smart, fast, and error-free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50">
                <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
                <p className="text-gray-300 text-sm">
                  "Empowering Every Engineer, Everywhere”
                </p>
                <p className="text-gray-300 text-sm mt-4">
                  Our mission is to put VAYUXI  in the hands of every engineer and field worker worldwide, making construction site management seamless, digital, and stress-free.       
                </p>
              </div>
              <div className="bg-blue-900/20 p-6 rounded-xl border border-blue-900/50">
                <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
                <p className="text-gray-300 text-sm">
                  "To make VAYUXI a mark of pride and integrity in the engineering world.”
                </p>
                <p className="text-gray-300 text-sm mt-4">
                  We envision VAYUXI becoming a platform where every user feels proud to declare they use it—symbolizing honesty, fairness, and zero compromise in their work. Just like ISO, ISI, or BIS certifications, VAYUXI will stand as a trusted standard of quality and transparency in the industry.               
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
                    Our team includes civil engineers, site managers, and tech developers who have experienced these problems firsthand.
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
                    We believe technology shouldn’t add complexity to your work — it should remove it completely.
                    Simplified. Streamlined. Smart.
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
                    Save up to 30% of your management costs with our integrated approach.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 relative z-10">
                <div className="flex items-center p-4 bg-blue-900/40 rounded-lg">
                  <span className="text-3xl text-blue-300 font-bold mr-3">🚀</span>
                  <p className="text-white italic">
                    We didn’t just build software. We engineered your time back.
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