import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QuizQuestion } from "@/data/quizQuestions";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionCardProps {
  question: QuizQuestion;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
}

export const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  onAnswer,
  onNext,
}: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (letter: string) => {
    if (hasAnswered) return;
    
    setSelectedAnswer(letter);
    setHasAnswered(true);
    const isCorrect = letter === question.correctAnswer;
    onAnswer(isCorrect);
  };

  const getOptionStyles = (letter: string) => {
    if (!hasAnswered) {
      return selectedAnswer === letter
        ? "border-primary bg-primary/5"
        : "border-border hover:border-primary/50 hover:bg-primary/5";
    }

    if (letter === question.correctAnswer) {
      return "border-success bg-success/10 text-success";
    }

    if (letter === selectedAnswer && letter !== question.correctAnswer) {
      return "border-error bg-error/10 text-error";
    }

    return "border-border opacity-50";
  };

  const isCorrectAnswer = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <div className="max-w-3xl w-full animate-slide-up">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pergunta {currentIndex + 1} de {totalQuestions}
            </span>
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
              {question.topic}
            </span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full gradient-primary transition-all duration-500 ease-out rounded-full"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border border-border/50">
          {/* Question */}
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {question.options.map((option) => (
              <button
                key={option.letter}
                onClick={() => handleSelect(option.letter)}
                disabled={hasAnswered}
                className={cn(
                  "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-start gap-3",
                  getOptionStyles(option.letter),
                  !hasAnswered && "cursor-pointer active:scale-[0.99]",
                  hasAnswered && option.letter === question.correctAnswer && "animate-celebrate"
                )}
              >
                <span
                  className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0",
                    hasAnswered && option.letter === question.correctAnswer
                      ? "bg-success text-success-foreground"
                      : hasAnswered && option.letter === selectedAnswer
                      ? "bg-error text-error-foreground"
                      : "bg-secondary text-secondary-foreground"
                  )}
                >
                  {hasAnswered && option.letter === question.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : hasAnswered && option.letter === selectedAnswer ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    option.letter
                  )}
                </span>
                <span className="font-medium leading-relaxed">{option.text}</span>
              </button>
            ))}
          </div>

          {/* Feedback */}
          {hasAnswered && (
            <div
              className={cn(
                "rounded-xl p-4 mb-6 animate-scale-in",
                isCorrectAnswer ? "bg-success/10 border border-success/30" : "bg-error/10 border border-error/30"
              )}
            >
              <div className="flex items-start gap-3">
                {isCorrectAnswer ? (
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-error shrink-0 mt-0.5" />
                )}
                <div>
                  <p className={cn("font-bold mb-1", isCorrectAnswer ? "text-success" : "text-error")}>
                    {isCorrectAnswer ? "Correto! 🎉" : `Incorreto - Resposta: ${question.correctAnswer}`}
                  </p>
                  <div className="flex items-start gap-2 mt-2">
                    <Lightbulb className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{question.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Next Button */}
          {hasAnswered && (
            <Button
              onClick={onNext}
              size="lg"
              className="w-full gradient-primary text-primary-foreground font-bold h-12 rounded-xl shadow-lg hover:opacity-90 transition-all hover:scale-[1.01] active:scale-[0.99]"
            >
              {currentIndex + 1 < totalQuestions ? (
                <>
                  Próxima Pergunta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                "Ver Resultado"
              )}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
