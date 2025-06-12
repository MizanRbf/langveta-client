import { useLoaderData, useParams } from "react-router";
import TutorCard from "./TutorCard";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
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

const FindTutors = () => {
  const { category: language } = useParams();
  const allTutors = useLoaderData();
  const { filteredTutors, setFilteredTutors } = useAuth();

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

  // Handle Search Button
  const handleSearchButton = (e) => {
    e.preventDefault();
    const searchLanguage = e.target.search.value.toLowerCase();
    const afterFiltered = allTutors.filter(
      (singleTutor) => singleTutor.language.toLowerCase() === searchLanguage
    );
    setFilteredTutors(afterFiltered);
  };

  // const navigate = useNavigate();

  // const handleSearchButton = (e) => {
  //   e.preventDefault();
  //   const searchLanguage = e.target.search.value;
  //   navigate(`/find-tutors/${searchLanguage}`);
  // };

  return (
    <div className="pt-25">
      <div className="px-4 max-w-[1400px] mx-auto">
        <Section>
          <h1 className="">FindTutors</h1>
          {/* Search Button */}
          <form className="my-10" onSubmit={handleSearchButton}>
            <input
              type="text"
              className="input text-black"
              name="search"
              placeholder="Enter Language"
            />
            <button
              type="submit"
              className="btn md:ml-4 mt-2 md:mt-0 bg-primary text-white"
            >
              Find Tutors
            </button>
          </form>
        </Section>
        {/* Tutor Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {filteredTutors.map((singleTutor) => (
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

export default FindTutors;
