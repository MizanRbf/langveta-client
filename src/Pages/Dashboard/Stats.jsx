import CountUp from "react-countup";
import { motion } from "motion/react";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className="mb-16"
  >
    {children}
  </motion.div>
);

const Stats = ({
  allTutors,
  totalReviews,
  languageCount,
  totalUsers,
  myTutorials,
  bookedTutors,
}) => {
  return (
    <Section>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 w-full">
          {/* All tutors */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={allTutors.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">All Tutors</p>
          </div>
          {/* Total Reviews */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={totalReviews} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              Total Reviews
            </p>
          </div>
          {/* My Tutorials */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={myTutorials.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              My Tutorials
            </p>
          </div>
          {/* My Booked Tutors */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={bookedTutors.length} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              My Booked Tutors
            </p>
          </div>
          {/* Language Count */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={languageCount} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">
              Language Count
            </p>
          </div>
          {/* Total Users */}
          <div className="w-full bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center min-h-[180px]">
            <p className="text-4xl font-bold leading-none text-primary">
              <CountUp end={totalUsers} duration={2} />+
            </p>
            <p className="text-sm md:text-base text-center mt-2">Total Users</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Stats;
