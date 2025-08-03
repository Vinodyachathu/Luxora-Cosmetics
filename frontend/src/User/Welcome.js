import React, { useState, useEffect } from 'react';
import { Sparkles, Star, Heart, ShoppingBag, User, Search } from 'lucide-react';

const LuxoraWelcome = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const features = [
    { icon: Sparkles, text: "Premium Beauty" },
    { icon: Star, text: "Luxury Experience" },
    { icon: Heart, text: "Self Care" }
  ];

  const heroImages = [
    "Premium skincare essentials",
    "Luxury makeup collection",
    "Professional beauty tools"
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-black opacity-5 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-20 h-20 bg-black opacity-3 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-black opacity-4 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-black opacity-2 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-4">
        <nav className={`flex items-center justify-between transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white animate-spin" style={{animationDuration: '3s'}} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-black rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black tracking-wider">LUXORA</h1>
              <p className="text-xs text-gray-600 tracking-widest">COSMETICS</p>
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-6 h-6 text-black hover:scale-110 transition-transform cursor-pointer" />
            <User className="w-6 h-6 text-black hover:scale-110 transition-transform cursor-pointer" />
            <ShoppingBag className="w-6 h-6 text-black hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1500 delay-300 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              
              {/* Welcome Text */}
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm animate-bounce">
                  <Star className="w-4 h-4" />
                  <span>Welcome to Luxury</span>
                </div>
                
                <h2 className="text-5xl lg:text-7xl font-light text-black leading-tight">
                  Discover
                  <span className="block font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent animate-pulse">
                    Beauty
                  </span>
                  <span className="block text-4xl lg:text-5xl">Redefined</span>
                </h2>
                
                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                  Experience the pinnacle of cosmetic excellence with our curated collection of premium beauty products designed for the modern individual.
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-3 transition-all duration-700 hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{transitionDelay: `${600 + index * 200}ms`}}
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-black font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <button className="group bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <span className="flex items-center space-x-2">
                    <span>Explore Collection</span>
                    <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                  </span>
                </button>
                <button className="border-2 border-black text-black px-8 py-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Content - Hero Image Area */}
            <div className={`relative transition-all duration-1500 delay-500 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                {/* Main Image Container */}
                <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl overflow-hidden shadow-2xl">
                  
                  {/* Sliding Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 transform transition-all duration-1000">
                      <div className="w-32 h-32 bg-black rounded-full mx-auto flex items-center justify-center animate-pulse">
                        <Sparkles className="w-16 h-16 text-white animate-spin" style={{animationDuration: '4s'}} />
                      </div>
                      <h3 className="text-2xl font-bold text-black">{heroImages[currentSlide]}</h3>
                      <div className="flex justify-center space-x-2">
                        {heroImages.map((_, index) => (
                          <div 
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              index === currentSlide ? 'bg-black w-8' : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDelay: '1s'}}>
                    <Heart className="w-8 h-8 text-black" />
                  </div>
                  
                  <div className="absolute bottom-6 left-6 w-12 h-12 bg-black rounded-full flex items-center justify-center animate-pulse">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-black rounded-full animate-spin" style={{animationDuration: '10s'}}></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-black rounded-full opacity-20 animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Stats */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1500 delay-1200 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="flex items-center space-x-8 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200 shadow-lg">
          <div className="text-center">
            <div className="text-2xl font-bold text-black">50K+</div>
            <div className="text-xs text-gray-600">Happy Customers</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">1000+</div>
            <div className="text-xs text-gray-600">Premium Products</div>
          </div>
          <div className="w-px h-8 bg-gray-300"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-black">4.9</div>
            <div className="text-xs text-gray-600">Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxoraWelcome;