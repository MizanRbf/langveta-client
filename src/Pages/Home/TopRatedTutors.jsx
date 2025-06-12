import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const TopRatedTutors = ({ topRatedTutors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topRatedTutors.map((tutor) => (
        <Section key={tutor._id}>
          <div className="rounded-lg">
            <div className="relative">
              <img
                className="w-full h-[250px] rounded-tr-lg rounded-tl-lg"
                src={tutor.image}
                alt=""
              />
            </div>

            <div className=" rounded-b-xl border-2 border-t-0 border-primary">
              <div className="px-6 space-y-1 py-3">
                <h2>{tutor.name}</h2>
                <p>
                  <span className="font-bold">Language: </span>
                  {tutor.language}
                </p>
                <p>
                  <span className="font-bold">Price: </span>
                  {tutor.price}
                </p>
                <p>
                  <span className="font-bold">Reviews: </span>
                  {tutor.review}
                </p>
                <p>
                  <span className="font-bold">Email: </span>

                  {tutor.email}
                </p>
              </div>
              <Link to={`/tutor/${tutor._id}`}>
                <button className="bg-secondary text-white px-3 w-full rounded-b-lg font-bold cursor-pointer py-2">
                  Show Details
                </button>
              </Link>
            </div>
          </div>
        </Section>
      ))}
    </div>
  );
};

export default TopRatedTutors;
