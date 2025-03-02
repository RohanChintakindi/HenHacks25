import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function WaitingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { phoneNumber, emergencyType } = location.state || {};
  const [elapsedTime, setElapsedTime] = useState(0);

  // Instead of auto-redirecting, we'll add a manual continue button
  const handleContinue = () => {
    navigate('/score', { 
      state: { 
        phoneNumber, 
        emergencyType 
      } 
    });
  };

  // Update elapsed time every second
  React.useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Format elapsed time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#4318D1] to-[#A78BFA] inline-block text-transparent bg-clip-text">
            Emergency Call in Progress
          </span>
        </h1>
        <p className="text-xl text-gray-400">
          Please stay on this page while the call is continuing
        </p>
      </div>

      {/* Pulse animation */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-indigo-500/20 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-indigo-500/30 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-indigo-500/40 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="w-40 h-40 flex items-center justify-center">
            <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/50">
              <div className="w-12 h-12 bg-indigo-800 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status messages */}
      <div className="mt-16 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <p className="text-lg text-white">
            Call Duration: <span className="font-mono">{formatTime(elapsedTime)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}