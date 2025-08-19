import { motion } from "framer-motion";
import {
  Users,
  Clock,
  BookOpen,
  DollarSign,
  BarChart,
  Award,
} from "lucide-react";

// Features Section for Language Tutor Platform
// TailwindCSS + Framer Motion + Lucide Icons

export default function FeaturesSection() {
  const features = [
    {
      name: "Expert Tutors",
      description:
        "Learn from certified native speakers with years of teaching experience.",
      icon: Users,
    },
    {
      name: "Flexible Scheduling",
      description: "Book lessons anytime and study at your own pace.",
      icon: Clock,
    },
    {
      name: "Interactive Lessons",
      description:
        "Engage with quizzes, exercises, and live practice sessions.",
      icon: BookOpen,
    },
    {
      name: "Affordable Plans",
      description:
        "Choose from free, standard, or premium options that fit your budget.",
      icon: DollarSign,
    },
    {
      name: "Progress Tracking",
      description: "Monitor your fluency growth with personalized analytics.",
      icon: BarChart,
    },
    {
      name: "Certificates",
      description:
        "Earn certificates after completing structured learning paths.",
      icon: Award,
    },
  ];

  return (
    <section id="features" className="">
      <div className=" ">
        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#64410015] text-primary mb-4">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
