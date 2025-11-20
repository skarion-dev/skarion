'use client';
import { useState, useRef } from 'react';

export default function SocialCard() {
  const [activeCard, setActiveCard] = useState('consultation');
  const isAnimating = useRef(false);

  const handleCardToggle = (cardId: any) => {
    if (isAnimating.current) return;
    
    isAnimating.current = true;
    setActiveCard(cardId);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 600);
  };

  const cards = [
    { 
      id: 'consultation', 
      icon: '👤', 
      title: 'Personalized Assessment', 
      bgColor: 'bg-blue-100',
      textColor: 'text-gray-900',
      stepNumber: '01'
    },
    { 
      id: 'enroll', 
      icon: '🎓', 
      title: 'Industry-Aligned Bootcamp', 
      bgColor: 'bg-green-100',
      textColor: 'text-gray-900',
      stepNumber: '02'
    },
    { 
      id: 'experience', 
      icon: '💼', 
      title: 'Portfolio Development', 
      bgColor: 'bg-purple-100',
      textColor: 'text-gray-900',
      stepNumber: '03'
    },
    { 
      id: 'career', 
      icon: '🤝', 
      title: 'Job Placement Assistance', 
      bgColor: 'bg-amber-100',
      textColor: 'text-gray-900',
      stepNumber: '04'
    },
    { 
      id: 'hired', 
      icon: '🚀', 
      title: 'Secure Employment', 
      bgColor: 'bg-cyan-100',
      textColor: 'text-gray-900',
      stepNumber: '05'
    }
  ];

  const cardContent = {
    consultation: {
      title: "Personalized Assessment",
      step: "Step 1: Consultation",
      description: "Begin your journey with a comprehensive personalized assessment where we evaluate your skills, career goals, and learning needs. Our experts will help you identify the perfect career path and create a customized learning roadmap tailored to your aspirations and the current job market demands.",
      highlight: "Start with clarity and direction"
    },
    enroll: {
      title: "Industry-Aligned Bootcamp",
      step: "Step 2: Enroll & Learn",
      description: "Join our intensive, industry-focused bootcamps designed in collaboration with leading tech companies. Learn cutting-edge technologies and practical skills through hands-on projects, expert mentorship, and real-world scenarios that prepare you for today's competitive job market.",
      highlight: "Learn what employers actually need"
    },
    experience: {
      title: "Portfolio Development",
      step: "Step 3: Build Experience",
      description: "Develop a professional portfolio through simulated real-world projects that showcase your skills to potential employers. Work on team projects, individual challenges, and industry-specific scenarios that mirror actual workplace environments and requirements.",
      highlight: "Build proof of your capabilities"
    },
    career: {
      title: "Job Placement Assistance",
      step: "Step 4: Career Support",
      description: "Receive comprehensive job placement assistance including resume building, interview preparation, networking strategies, and direct introductions to our partner companies. Our career coaches work with you until you secure the right position.",
      highlight: "We're with you until you get hired"
    },
    hired: {
      title: "Secure Employment First",
      step: "Step 5: Get Hired & Pay Later",
      description: "Only pay after you've secured employment with our innovative income share agreement model. Focus on your career growth without financial stress - your success is our success, and we're invested in helping you achieve your professional goals.",
      highlight: "Your success is our success"
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="cards-container relative w-full max-w-5xl">
        {/* Main Cards Container */}
        <div className="cards rounded-2xl overflow-hidden shadow-2xl w-full h-[600px] relative">
          
          {/* Card Toggle Buttons */}
          <div className="absolute bottom-6 left-6 flex space-x-3 z-10">
            {cards.map((card) => (
              <button
                key={card.id}
                onClick={() => handleCardToggle(card.id)}
                className={`card-toggle w-12 h-12 rounded-full border-2 flex items-center justify-center text-base cursor-pointer transition-all duration-300 ${
                  activeCard === card.id 
                    ? 'border-blue-500 bg-blue-500 text-white shadow-lg transform scale-110' 
                    : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-400'
                }`}
              >
                {card.icon}
              </button>
            ))}
          </div>

          {/* Card Contents */}
          {cards.map((card: an) => {
            const content = cardContent[card.id];
            const isActive = activeCard === card.id;
            
            // Define clip-path positions - moved all positions to bottom
            const clipPathPositions = {
              consultation: { x: '95%', y: '100%' },
              enroll: { x: '70px', y: '100%' },
              experience: { x: '130px', y: '100%' },
              career: { x: '190px', y: '100%' },
              hired: { x: '250px', y: '100%' }
            };

            const position = clipPathPositions[card.id];

            return (
              <div
                key={card.id}
                className={`card-content absolute w-full h-full left-0 top-0 transition-all duration-1000 ease-in-out rounded-2xl overflow-hidden ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                style={{
                  clipPath: isActive 
                    ? `circle(150% at ${position.x} ${position.y})` 
                    : `circle(0% at ${position.x} ${position.y})`,
                }}
              >
                <div className={`w-full h-full ${card.bgColor} ${card.textColor}`}>
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    {/* Left Column - Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="max-w-lg">
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 bg-black bg-opacity-10 rounded-full text-xs font-semibold uppercase tracking-wider">
                            {content.step.toUpperCase()}
                          </span>
                        </div>
                        
                        <h1 className="text-3xl lg:text-4xl font-light leading-tight mb-4">
                          {content.title}
                        </h1>
                        
                        <hr className="border-gray-300 mb-4" />
                        
                        <p className="text-base lg:text-lg leading-relaxed mb-4 text-gray-700">
                          {content.description}
                        </p>
                        
                        <div className="inline-flex items-center px-4 py-2 bg-black bg-opacity-10 rounded-full">
                          <span className="text-sm font-semibold">
                            ✨ {content.highlight}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Visual */}
                    <div className="p-6 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4">
                          <div className="text-6xl lg:text-7xl font-bold text-gray-800 mb-2">
                            {card.stepNumber}
                          </div>
                          <div className="text-lg uppercase tracking-widest font-bold text-gray-600">
                            STEP {card.stepNumber}
                          </div>
                        </div>
                        <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white bg-opacity-50 flex items-center justify-center mx-auto shadow-lg">
                          <span className="text-2xl lg:text-3xl">
                            {card.icon}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}