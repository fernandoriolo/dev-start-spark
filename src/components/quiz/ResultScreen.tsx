import { Button } from "@/components/ui/button";
import { Trophy, RotateCcw, Star, Target, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultScreen = ({ score, totalQuestions, onRestart }: ResultScreenProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);

  const getMessage = () => {
    if (percentage >= 90) return { text: "Excelente! Você é um expert! 🏆", emoji: "🌟" };
    if (percentage >= 70) return { text: "Muito bom! Conhecimento sólido! 💪", emoji: "🎯" };
    if (percentage >= 50) return { text: "Bom trabalho! Continue estudando! 📚", emoji: "✨" };
    return { text: "Não desista! A prática leva à perfeição! 🚀", emoji: "💡" };
  };

  const getGradient = () => {
    if (percentage >= 70) return "gradient-success";
    if (percentage >= 50) return "gradient-warm";
    return "gradient-primary";
  };

  const message = getMessage();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero">
      <div className="max-w-lg w-full animate-slide-up">
        <div className="bg-card rounded-3xl p-8 md:p-10 shadow-2xl border border-border/50 text-center">
          {/* Trophy Icon */}
          <div className="flex justify-center mb-6">
            <div className={cn("w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg animate-celebrate", getGradient())}>
              <Trophy className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-extrabold text-foreground mb-2">
            Quiz Finalizado!
          </h1>
          <p className="text-lg text-muted-foreground mb-8">{message.text}</p>

          {/* Score Circle */}
          <div className="relative w-48 h-48 mx-auto mb-8">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="12"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                fill="none"
                stroke={percentage >= 70 ? "hsl(var(--success))" : percentage >= 50 ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - percentage / 100)}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-extrabold text-foreground">{percentage}%</span>
              <span className="text-sm text-muted-foreground font-medium">de acertos</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-success/10 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Star className="w-5 h-5 text-success" />
                <span className="text-2xl font-bold text-success">{score}</span>
              </div>
              <span className="text-sm text-muted-foreground">Corretas</span>
            </div>
            <div className="bg-error/10 rounded-xl p-4">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Target className="w-5 h-5 text-error" />
                <span className="text-2xl font-bold text-error">{totalQuestions - score}</span>
              </div>
              <span className="text-sm text-muted-foreground">Incorretas</span>
            </div>
          </div>

          {/* Encouragement */}
          <div className="bg-primary/5 rounded-xl p-4 mb-6 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              {percentage < 70
                ? "Dica: Revise os conceitos e tente novamente!"
                : "Parabéns pelo ótimo resultado!"}
            </p>
          </div>

          {/* Restart Button */}
          <Button
            onClick={onRestart}
            size="lg"
            className="w-full gradient-primary text-primary-foreground font-bold h-14 rounded-xl shadow-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Jogar Novamente
          </Button>
        </div>
      </div>
    </div>
  );
};
