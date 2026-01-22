import { Button } from "@/components/ui/button";
import { Code2, Rocket, Sparkles } from "lucide-react";

interface WelcomeScreenProps {
  onStart: () => void;
  totalQuestions: number;
}

export const WelcomeScreen = ({ onStart, totalQuestions }: WelcomeScreenProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 gradient-hero">
      <div className="max-w-2xl w-full animate-slide-up">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                <Code2 className="w-12 h-12 text-primary-foreground" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 gradient-warm rounded-full flex items-center justify-center animate-bounce-subtle">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 text-foreground">
            Quiz de Desenvolvimento Web
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground text-center mb-8">
            Teste seus conhecimentos sobre os conceitos fundamentais do desenvolvimento web moderno!
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">{totalQuestions}</div>
              <div className="text-sm text-muted-foreground">Perguntas</div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">6</div>
              <div className="text-sm text-muted-foreground">Alternativas</div>
            </div>
            <div className="bg-secondary/50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-muted-foreground">Tempo</div>
            </div>
          </div>

          {/* Topics Preview */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground text-center mb-3">Temas abordados:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {["Front-end", "Back-end", "Next.js", "UX/UI", "SaaS", "Edge Functions", "e mais..."].map((topic) => (
                <span
                  key={topic}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <Button
            onClick={onStart}
            size="lg"
            className="w-full gradient-primary text-primary-foreground font-bold text-lg h-14 rounded-xl shadow-lg hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Rocket className="w-5 h-5 mr-2" />
            Começar Quiz
          </Button>

          {/* Footer note */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            Ideal para iniciantes em tecnologia e desenvolvimento web
          </p>
        </div>
      </div>
    </div>
  );
};
