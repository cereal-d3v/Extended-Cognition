
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "@/components/Hero";
import CourseModules from "@/components/CourseModules";
import LearningPath from "@/components/LearningPath";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Hero />
      <CourseModules />
      <LearningPath />
      
      {/* Call to Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-none shadow-2xl">
            <CardHeader className="pb-4">
              <CardTitle className="text-3xl font-bold">Ready to Begin Your Journey?</CardTitle>
              <CardDescription className="text-blue-100 text-lg">
                Start with foundational concepts and work your way up to advanced AI techniques
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
