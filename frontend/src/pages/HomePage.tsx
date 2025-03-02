import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Navigation, Activity } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';

function HomePage() {
  const navigate = useNavigate();

  const navigateToEmergency = () => {
    navigate('/emergency');
  };

  return (
    <>
      <div className="text-center max-w-6xl mx-auto mb-24">
        <h1 className="text-6xl font-bold mb-12 pb-4">
          <span className="bg-gradient-to-r from-[#4318D1] to-[#A78BFA] inline-block text-transparent bg-clip-text">
            Emergency Response Reimagined
          </span>
        </h1>
        <p className="subtitle text-xl text-gray-400 mb-12">
          ResQ revolutionizes emergency response with AI-powered detection and lightning-fast alerts, ensuring help arrives when seconds count.
        </p>
        <div className="flex justify-center gap-16">
          <button
            onClick={navigateToEmergency}
            className="bg-[#4318D1] hover:bg-[#7451E6] text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-110 font-medium"
          >
            Get Started
          </button>
          <button className="border border-white hover:bg-white/20 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-110 font-medium">
            View Demo
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <FeatureCard 
          icon={<AlertTriangle className="text-indigo-400" size={24} />}
          title="AI Monitoring"
          description="Advanced artificial intelligence system that continuously monitors for emergency situations and potential threats in real-time"
        />
        <FeatureCard 
          icon={<Activity className="text-indigo-400" size={24} />}
          title="Instant Alert"
          description="Immediate notification system that alerts emergency services and designated contacts within seconds of detection"
        />
        <FeatureCard 
          icon={<Navigation className="text-indigo-400" size={24} />}
          title="Location Tracking"
          description="Precise GPS tracking and mapping capabilities to ensure responders can locate emergencies quickly and accurately"
        />
      </div>
    </>
  );
}

export default HomePage;