import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { QuizQuestion, InsertQuizAttempt } from "@shared/schema";
import QuestionCard from "@/components/quiz/question-card";
import QuizResults from "@/components/quiz/quiz-results";
import { apiRequest, queryClient } from "@/lib/queryClient";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [answered, setAnswered] = useState(false);

  const { data: questions, isLoading } = useQuery<QuizQuestion[]>({
    queryKey: ["/api/quiz-questions"],
  });

  const saveAttemptMutation = useMutation({
    mutationFn: async (attemptData: InsertQuizAttempt) => {
      const response = await apiRequest("POST", "/api/quiz-attempts", attemptData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/quiz-attempts"] });
    },
  });

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered || !questions) return;

    setAnswered(true);
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);

    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question after delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setAnswered(false);
      } else {
        // Quiz complete
        setShowResults(true);
        
        // Save quiz attempt
        const attemptData: InsertQuizAttempt = {
          score: isCorrect ? score + 1 : score,
          totalQuestions: questions.length,
          completedAt: new Date().toISOString(),
        };
        saveAttemptMutation.mutate(attemptData);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setAnswered(false);
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Cyber Quiz</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="space-y-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h2 className="text-xl font-bold text-gray-800">Cyber Quiz</h2>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
          <p className="text-gray-600">No quiz questions available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 page-transition">
      <div className="flex items-center mb-6">
        <Link href="/" className="mr-4 p-2 hover:bg-gray-100 rounded-lg touch-feedback">
          <ArrowLeft className="h-5 w-5 text-gray-600" />
        </Link>
        <h2 className="text-xl font-bold text-gray-800">Cyber Quiz</h2>
      </div>

      {showResults ? (
        <QuizResults 
          score={score} 
          totalQuestions={questions.length} 
          onRestart={resetQuiz}
        />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswers[currentQuestion]}
          answered={answered}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
    </div>
  );
}
