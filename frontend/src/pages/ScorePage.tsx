import { useNavigate, useLocation } from 'react-router-dom';
import { Shield, Clock, MapPin, Phone, Users, Zap, AlertTriangle } from 'lucide-react';
import ScoreCard from '../components/ScoreCard';

function ScorePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { emergencyType } = location.state || { emergencyType: 'Emergency' };

  // Generate a random overall score between 75 and 95
  const overallScore = Math.floor(Math.random() * 21) + 75;

  // Generate random subscores
  const generateScore = () => Math.floor(Math.random() * 31) + 70;

  const scoreCategories = [
    {
      title: "Response Time",
      score: generateScore(),
      icon: <Clock className="text-indigo-400" size={24} />,
      explanation: "Estimated time for emergency services to arrive at your location"
    },
    {
      title: "Location Accuracy",
      score: generateScore(),
      icon: <MapPin className="text-indigo-400" size={24} />,
      explanation: "Precision of your location data for responders to find you"
    },
    {
      title: "Communication",
      score: generateScore(),
      icon: <Phone className="text-indigo-400" size={24} />,
      explanation: "Quality and reliability of communication channels with responders"
    },
    {
      title: "Resource Availability",
      score: generateScore(),
      icon: <Users className="text-indigo-400" size={24} />,
      explanation: "Available emergency personnel and equipment in your area"
    },
    {
      title: "Incident Severity",
      score: generateScore(),
      icon: <AlertTriangle className="text-indigo-400" size={24} />,
      explanation: "Assessment of the emergency situation's critical nature"
    },
    {
      title: "System Efficiency",
      score: generateScore(),
      icon: <Zap className="text-indigo-400" size={24} />,
      explanation: "Overall efficiency of the emergency response system"
    }
  ];

  const navigateToEmergency = () => {
    navigate('/emergency');
  };

  return (
    <>
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-6xl font-bold mb-8 pb-4">
          <span className="bg-gradient-to-r from-[#4318D1] to-[#A78BFA] inline-block text-transparent bg-clip-text">
            Emergency Response Score
          </span>
        </h1>
        <p className="subtitle text-xl text-gray-400 mb-12">
          Analysis for your {emergencyType} request
        </p>
      </div>

      <div className="max-w-4xl mx-auto mb-16 text-center">
        <div className="bg-gray-900 p-10 rounded-2xl border border-indigo-500 inline-block">
          <div className="flex items-center justify-center mb-4">
            <Shield className="text-indigo-400 mr-3" size={32} />
            <h2 className="text-2xl font-bold">Overall Response Score</h2>
          </div>
          <div className="text-8xl font-bold bg-gradient-to-r from-[#4318D1] to-[#A78BFA] inline-block text-transparent bg-clip-text mb-4">
            {overallScore}
          </div>
          <p className="text-gray-400">
            Based on current conditions and emergency type
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {scoreCategories.map((category, index) => (
          <ScoreCard
            key={index}
            title={category.title}
            score={category.score}
            icon={category.icon}
            explanation={category.explanation}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12 mb-8">
        <button
          onClick={navigateToEmergency}
          className="flex items-center border border-white hover:bg-white/20 text-white px-8 py-3 rounded-md transition-all duration-300 transform font-medium"
        >
          Back
        </button>
      </div>
    </>
  );
}

export default ScorePage;