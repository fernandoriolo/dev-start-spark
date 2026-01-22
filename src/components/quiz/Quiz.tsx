import { useState } from "react";
import { quizQuestions } from "@/data/quizQuestions";
import { WelcomeScreen } from "./WelcomeScreen";
import { QuestionCard } from "./QuestionCard";
import { ResultScreen } from "./ResultScreen";

type QuizState = "welcome" | "playing" | "results";

export const Quiz = () => {
  const [state, setState] = useState<QuizState>("welcome");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < quizQuestions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setState("results");
    }
  };

  const handleRestart = () => {
    setState("welcome");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  if (state === "welcome") {
    return <WelcomeScreen onStart={handleStart} totalQuestions={quizQuestions.length} />;
  }

  if (state === "playing") {
    return (
      <QuestionCard
        key={currentQuestionIndex}
        question={quizQuestions[currentQuestionIndex]}
        currentIndex={currentQuestionIndex}
        totalQuestions={quizQuestions.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    );
  }

  return <ResultScreen score={score} totalQuestions={quizQuestions.length} onRestart={handleRestart} />;
};
