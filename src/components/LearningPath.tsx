
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const LearningPath = () => {
  const pathSteps = [
    {
      step: 1,
      title: "Cognitive Foundations",
      description: "Understanding how humans make decisions and process information",
      games: ["Tic-Tac-Toe", "Rock-Paper-Scissors"],
      concepts: ["Decision Trees", "Heuristics", "Cognitive Biases"]
    },
    {
      step: 2,
      title: "Game Theory Basics",
      description: "Learning strategic thinking and Nash equilibria",
      games: ["Prisoner's Dilemma", "Matching Pennies"],
      concepts: ["Nash Equilibrium", "Dominant Strategies", "Mixed Strategies"]
    },
    {
      step: 3,
      title: "Machine Learning Introduction",
      description: "How machines can learn from experience",
      games: ["Multi-Armed Bandit", "Grid World"],
      concepts: ["Q-Learning", "Exploration vs Exploitation", "Value Functions"]
    },
    {
      step: 4,
      title: "Advanced AI Techniques",
      description: "Sophisticated algorithms for complex games",
      games: ["Texas Hold'em Poker", "Imperfect Information Games"],
      concepts: ["CFR", "Monte Carlo Tree Search", "Deep Learning"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Learning Path</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A structured progression from basic cognitive concepts to advanced AI implementations
          </p>
        </div>
        
        <div className="space-y-8">
          {pathSteps.map((step, index) => (
            <div key={index} className="flex items-center">
              <Card className="flex-1 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{step.title}</CardTitle>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Interactive Games</h4>
                      <ul className="space-y-1">
                        {step.games.map((game, gameIndex) => (
                          <li key={gameIndex} className="text-blue-600 font-medium">{game}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Concepts</h4>
                      <ul className="space-y-1">
                        {step.concepts.map((concept, conceptIndex) => (
                          <li key={conceptIndex} className="text-gray-600">{concept}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {index < pathSteps.length - 1 && (
                <div className="flex items-center justify-center w-16">
                  <ArrowRight className="h-8 w-8 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningPath;
