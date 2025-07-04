import { Link, useLoaderData, useParams } from "react-router";
import TutorCard from "./TutorCard";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { IoReturnDownBack } from "react-icons/io5";
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

const FindTutors = () => {
  const { category: language } = useParams();
  const allTutors = useLoaderData();
  const { filteredTutors, setFilteredTutors } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by Language
  useEffect(() => {
    if (language) {
      const filtered = allTutors.filter(
        (tutors) => tutors.language.toLowerCase() === language.toLowerCase()
      );
      setFilteredTutors(filtered);
    } else {
      setFilteredTutors(allTutors);
    }
  }, [allTutors, language, setFilteredTutors]);

  // Find by Search
  useEffect(() => {
    const filtered = allTutors.filter((tutor) =>
      tutor.language.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTutors(filtered);
  }, [allTutors, setFilteredTutors, searchTerm]);

  return (
    <div className="pt-25">
      <Helmet>
        <title>FindTutors || Langveta</title>
      </Helmet>
      <div className="px-4 max-w-[1500px] mx-auto">
        <Section>
          <div className="">
            <h1 className="text-primary">Find Tutors</h1>

            <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
              Sort by adding your desired language below.
            </p>
          </div>
          {/* Search Button */}
          <form className="my-10" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="input text-black"
              name="search"
              placeholder="Enter Language"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        </Section>
        {/* Tutor Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {filteredTutors.map((singleTutor) => (
            <TutorCard
              key={singleTutor._id}
              singleTutor={singleTutor}
            ></TutorCard>
          ))}
        </div>
        <Link className="font text-xl" to={-1}>
          <button className="border rounded-sm px-3 bg-secondary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
            <IoReturnDownBack className="text-4xl font-bold" />
            <span className="font-bold"> Go Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FindTutors;
