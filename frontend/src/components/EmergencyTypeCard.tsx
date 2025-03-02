import React from 'react';
import { HelpCircle } from 'lucide-react';

function EmergencyTypeCard({ 
  title, 
  isSelected = false, 
  onClick 
}: { 
  title: string, 
  isSelected?: boolean, 
  onClick?: () => void 
}) {
  return (
    <div style={{ backgroundColor: isSelected ? "#131026" : "#0A0A0D" }}
      className={`p-8 rounded-lg border cursor-pointer transition-all text-center ${
        isSelected 
          ? "border-indigo-500 ring-2 ring-indigo-500" 
          : "border-gray-800 hover:border-indigo-500"
      }`}
      onClick={onClick}
    >
      <div className={`p-3 rounded-md inline-block mb-4 ${
        isSelected ? "bg-indigo-500" : "bg-indigo-600"
      }`}>
        <HelpCircle className="text-white" size={24} />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default EmergencyTypeCard;