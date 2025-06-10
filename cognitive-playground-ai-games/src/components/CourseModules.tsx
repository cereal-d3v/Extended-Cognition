
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CourseModules = () => {
  const modules = [
    {
      title: "Basic Decision Making",
      description: "Learn fundamental cognitive processes through simple games like Tic-Tac-Toe",
      difficulty: "Beginner",
      topics: ["Pattern Recognition", "Strategic Thinking", "Decision Trees"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Game Theory Foundations",
      description: "Explore Nash equilibria and strategic interactions through classic games",
      difficulty: "Intermediate",
      topics: ["Nash Equilibrium", "Minimax Algorithm", "Zero-Sum Games"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Reinforcement Learning",
      description: "Understand how agents learn through trial and error in dynamic environments",
      difficulty: "Intermediate",
      topics: ["Q-Learning", "Policy Gradients", "Multi-Armed Bandits"],
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Advanced Game AI",
      description: "Master sophisticated techniques like Counterfactual Regret Minimization in Poker",
      difficulty: "Advanced",
      topics: ["CFR", "Monte Carlo Methods", "Information Sets"],
      color: "from-red-500 to-pink-600"
    }
  ];

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800",
    "Intermediate": "bg-blue-100 text-blue-800",
    "Advanced": "bg-red-100 text-red-800"
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Course Modules</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Progressive learning modules that build upon each other, from basic cognitive concepts to advanced AI techniques
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className={`w-full h-3 rounded-full bg-gradient-to-r ${module.color} mb-4`}></div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {module.title}
                </CardTitle>
                <Badge className={difficultyColors[module.difficulty as keyof typeof difficultyColors]}>
                  {module.difficulty}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {module.description}
                </CardDescription>
                <div className="space-y-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="text-sm text-gray-500 bg-gray-50 rounded-full px-3 py-1 inline-block mr-2">
                      {topic}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModules;
