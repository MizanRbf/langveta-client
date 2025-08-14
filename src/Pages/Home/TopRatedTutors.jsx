import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FaDollarSign, FaLanguage, FaStar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
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
          <div className="rounded-lg  shadow-lg p-4 bg-gradient-to-b from-[#6441006b] to-[#00000000]">
            <div className="relative">
              <img
                className="w-full h-[250px] rounded-sm"
                src={tutor.image}
                alt=""
              />
            </div>

            <div className="">
              <div className="space-y-1 py-3">
                <h2>{tutor.name}</h2>
                <div className="flex items-center gap-1">
                  <IoLanguage />
                  <p>
                    <span className="font-bold">Language: </span>
                    {tutor.language}
                  </p>
                </div>
                <div className="flex items-center">
                  <FaDollarSign />
                  <p>
                    <span className="font-bold">Price: </span>
                    {tutor.price}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar />
                  <p>
                    <span className="font-bold">Reviews: </span>
                    {tutor.review}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <MdEmail />
                  <p>
                    <span className="font-bold">Email: </span>

                    {tutor.email}
                  </p>
                </div>
              </div>
              <Link to={`/tutor/${tutor._id}`}>
                <button className="bg-secondary text-white px-3 w-full rounded-sm font-bold cursor-pointer py-2">
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
