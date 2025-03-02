import React from 'react';

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div 
      style={{ backgroundColor: "#0A0A0D" }} 
      className="p-8 rounded-lg border border-gray-800 transition-all duration-300 hover:transform hover:translate-y-[-8px] hover:shadow-[0_0_20px_rgba(67,24,209,0.7)] hover:border-indigo-500"
    >
      <div className="flex items-center mb-4">
        <div className="bg-indigo-900 p-2 rounded-md inline-flex items-center">
          {icon}
          <span className="ml-2 text-white font-semibold">{title}</span>
        </div>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

export default FeatureCard;