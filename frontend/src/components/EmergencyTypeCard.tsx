import React from 'react';

function EmergencyTypeCard({ 
  color,
  icon,
  title, 
  isSelected = false, 
  onClick 
}: {
  color: string,
  icon: React.ReactNode, 
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
      <div style={{ backgroundImage: color }} className={`p-3 rounded-md inline-block mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

export default EmergencyTypeCard;