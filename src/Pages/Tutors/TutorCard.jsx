import React from "react";
import { FaInfoCircle } from "react-icons/fa";
import {
  FaDollarSign,
  FaLanguage,
  FaSackDollar,
  FaStar,
} from "react-icons/fa6";
import { IoLanguageSharp } from "react-icons/io5";
import { MdDescription, MdPreview } from "react-icons/md";
import { Link } from "react-router";
import { motion } from "motion/react";
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

const TutorCard = ({ singleTutor }) => {
  const { _id, name, image, language, review, description } = singleTutor;
  return (
    <Section>
      <div className="bg-slate-200 rounded-sm shadow-xl text-black border border-slate-300">
        <div className="flex gap-4 p-3 items-center">
          <img className="w-20 rounded-xl" src={image} alt="" />
          <div>
            <h3>{name}</h3>
            <p className="flex items-center gap-1">
              <IoLanguageSharp />
              <span className="font-semibold">Language:</span> {language}
            </p>
            <p className="flex items-center gap-1">
              <MdPreview />
              <span className="font-semibold">Reviews:</span> {review}
            </p>

            <p className="flex items-center gap-1 ">
              <MdDescription />
              <span className="font-semibold">Description:</span>{" "}
            </p>
            <p>{description}</p>
          </div>
        </div>
        <Link to={`/tutor/${_id}`}>
          <button className="bg-primary text-white px-3 w-full rounded-b-sm font-bold cursor-pointer">
            Show Details
          </button>
        </Link>
      </div>
    </Section>
  );
};

export default TutorCard;
