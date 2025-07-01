import { useLoaderData } from "react-router";
import TutorCard from "./TutorCard";
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const TutorsByCategory = () => {
  const categorizedTutors = useLoaderData();

  return (
    <div className="pt-25">
      <div className="max-w-[1500px] mx-auto px-4">
        <Section>
          <div className="text-center mb-6 ">
            <h1 className="text-primary">Tutors by Category</h1>

            <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
              You can see here your desired tutors.
            </p>
          </div>
        </Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
          {categorizedTutors.map((singleTutor) => (
            <TutorCard
              key={singleTutor._id}
              singleTutor={singleTutor}
            ></TutorCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TutorsByCategory;
