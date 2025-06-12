import React from "react";
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Banner = () => {
  return (
    <div className="h-screen relative bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center flex items-center flex-col md:flex-row relative justify-center md:justify-start">
      <div className="absolute top-0 right-0 left-0 h-screen bg-black opacity-40"></div>
      <div className="z-9">
        <Section>
          <div className="md:ml-20 text-white md:w-1/2 mx-4">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Master Languages with Top Tutors – Anytime, Anywhere!
            </p>
            <p className="mt-10 text-center md:text-left">
              Learn your desired language from expert tutors across the globe.
              Book sessions,
              <br className="lg:block hidden" /> track progress, and grow
              fluency — effortlessly and fast.
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default Banner;
