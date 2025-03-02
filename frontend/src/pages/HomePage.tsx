import { useNavigate } from 'react-router-dom';
import { Cpu, ArrowUpRight, Zap } from 'lucide-react';
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
            Emergency Training Reimagined
          </span>
        </h1>
        <p className="subtitle text-xl text-gray-400 mb-12">
          Train Smarter. Respond Faster. Save Lives.<br></br>Because every second counts and every life matters
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
          icon={<Cpu className="text-indigo-400" size={24} />}
          title="AI-Simulated Emergency Calls"
          description="Dynamic, real-world scenarios powered by AI to train dispatchers in handling high-pressure emergency situations effectively"
        />
        <FeatureCard 
          icon={<Zap className="text-indigo-400" size={24} />}
          title="Instant Performance Feedback"
          description="Real-time analysis and feedback to improve decision-making, communication, and response efficiency"
        />
        <FeatureCard 
          icon={<ArrowUpRight className="text-indigo-400" size={24} />}
          title="Adaptive Learning System"
          description="Customizable training modules that evolve based on dispatcher performance, ensuring continuous skill development"
        />
      </div>
    </>
  );
}

export default HomePage;