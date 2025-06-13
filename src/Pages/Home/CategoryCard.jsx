import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
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

const CategoryCard = ({ tutorCategory }) => {
  const [teachersCount, setTeachersCount] = useState([]);
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axios(
          `http://localhost:3000/find-tutors/${tutorCategory?.title}`
        );
        const data = await res.data;
        setTeachersCount(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTutors();
  }, [tutorCategory?.title]);

  return (
    <Section>
      <Link to={`/find-tutors/${tutorCategory.title}`}>
        <div className="bg-slate-200 text-black  p-3 rounded-sm flex items-center justify-between  shadow-xl hover:bg-slate-300 duration-300">
          <div className="flex gap-3 items-center">
            <div>
              <img src={tutorCategory.icon} alt="" />
            </div>
            <div>
              <h3>{tutorCategory.title} Tutors</h3>
              <p>
                <span className="font-semibold">Teachers:</span>{" "}
                {teachersCount?.length}
              </p>
            </div>
          </div>
          <div className="hover:bg-slate-200 p-2 rounded-sm ">
            <IoIosArrowForward size={20} />
          </div>
        </div>
      </Link>
    </Section>
  );
};

export default CategoryCard;
