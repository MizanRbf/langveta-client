import React from "react";
import CountUp from "react-countup";
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
    className="mb-16"
  >
    {children}
  </motion.div>
);

const Stats = ({ allTutors, totalReviews, languageCount, totalUsers }) => {
  return (
    <Section>
      <div className="p-6 mt-10">
        <div className="border border-primary rounded-lg max-w-[1400px] mx-auto p-4 grid justify-center grid-cols-2 text-center lg:grid-cols-4">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={allTutors.length} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Tutors</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={totalReviews} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Reviews</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={languageCount} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Languages</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">
              <CountUp end={totalUsers} duration={20} />+
            </p>
            <p className="text-sm sm:text-base">Users</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
