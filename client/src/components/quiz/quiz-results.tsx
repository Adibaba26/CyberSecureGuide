import { Trophy, ThumbsUp, RotateCcw } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResults({ score, totalQuestions, onRestart }: QuizResultsProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getResultData = () => {
    if (score >= 4) {
      return {
        icon: Trophy,
        iconColor: "text-yellow-500",
        bgColor: "bg-green-100",
        message: "Excellent! You have great cyber awareness!",
      };
    } else if (score >= 3) {
      return {
        icon: ThumbsUp,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-100",
        message: "Good job! Keep learning to improve your awareness.",
      };
    } else {
      return {
        icon: RotateCcw,
        iconColor: "text-orange-500",
        bgColor: "bg-orange-100",
        message: "Try again to improve your cyber awareness!",
      };
    }
  };

  const { icon: Icon, iconColor, bgColor, message } = getResultData();

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
      <div className="mb-6">
        <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${bgColor}`}>
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Quiz Complete!</h3>
        <p className="text-lg text-gray-600">Your Score: {score}/{totalQuestions}</p>
        <p className="text-sm text-gray-500 mt-1">({percentage}%)</p>
        <p className="text-gray-500 mt-4">{message}</p>
      </div>
      <button 
        onClick={onRestart}
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors touch-feedback"
      >
        Take Quiz Again
      </button>
    </div>
  );
}
