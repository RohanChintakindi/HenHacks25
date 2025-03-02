import React from 'react';

function ScoreCard({ 
  title, 
  score, 
  icon, 
  explanation 
}: { 
  title: string, 
  score: number, 
  icon: React.ReactNode,
  explanation: string
}) {
  // Determine color based on score
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-blue-400";
    if (score >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-500 transition-all hover:bg-gray-800">
      <div className="flex items-center mb-4">
        <div className="bg-indigo-900/50 p-2 rounded-md inline-flex items-center">
          {icon}
          <span className="ml-2 text-white font-semibold">{title}</span>
        </div>
        <div className={`ml-auto text-2xl font-bold ${getScoreColor(score)}`}>
          {score}
        </div>
      </div>
      <p className="text-gray-400 text-sm">{explanation}</p>
    </div>
  );
}

export default ScoreCard;