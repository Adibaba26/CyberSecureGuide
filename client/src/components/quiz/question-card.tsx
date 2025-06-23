import type { QuizQuestion } from "@shared/schema";

interface QuestionCardProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: number;
  answered: boolean;
  onAnswerSelect: (answerIndex: number) => void;
}

export default function QuestionCard({ 
  question, 
  questionNumber, 
  totalQuestions, 
  selectedAnswer, 
  answered, 
  onAnswerSelect 
}: QuestionCardProps) {
  const getOptionClass = (optionIndex: number) => {
    let baseClass = "quiz-option w-full text-left p-4 rounded-lg border transition-colors touch-manipulation";
    
    if (!answered) {
      return `${baseClass} border-gray-200 hover:border-blue-500 hover:bg-blue-50`;
    }
    
    if (optionIndex === question.correctAnswer) {
      return `${baseClass} correct border-green-500`;
    }
    
    if (optionIndex === selectedAnswer && optionIndex !== question.correctAnswer) {
      return `${baseClass} incorrect border-red-500`;
    }
    
    return `${baseClass} border-gray-200 opacity-50`;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 mb-6">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-blue-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="w-8 h-8 bg-blue-500 bg-opacity-20 rounded-full flex items-center justify-center">
          <span className="text-blue-500 font-bold text-sm">{questionNumber}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 mb-6">{question.question}</h3>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            className={getOptionClass(index)}
            onClick={() => onAnswerSelect(index)}
            disabled={answered}
          >
            <span className="font-medium">{String.fromCharCode(65 + index)})</span> {option}
          </button>
        ))}
      </div>
      
      {answered && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-sm text-blue-800">
            <span className="font-medium">Explanation:</span> {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
