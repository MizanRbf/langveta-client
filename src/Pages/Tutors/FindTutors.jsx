import { useLoaderData, useParams } from "react-router";
import TutorCard from "./TutorCard";
import { useEffect, useState } from "react";

const FindTutors = () => {
  const { category: language } = useParams();
  const allTutors = useLoaderData();
  const [filteredTutors, setFilteredTutors] = useState(allTutors);

  // Filter by Language
  useEffect(() => {
    if (language) {
      const filtered = allTutors.filter(
        (tutors) => tutors.language === language
      );
      setFilteredTutors(filtered);
    } else {
      setFilteredTutors(allTutors);
    }
  }, [allTutors, language]);

  // Handle Search Button
  const handleSearchButton = (e) => {
    e.preventDefault();
    const searchLanguage = e.target.search.value;
    const afterFiltered = allTutors.filter(
      (singleTutor) => singleTutor.language == searchLanguage
    );
    setFilteredTutors(afterFiltered);
  };

  return (
    <div className="pt-25">
      <div className="px-4 max-w-[1400px] mx-auto">
        <h1 className="">FindTutors</h1>

        {/* Search Button */}
        <form className="my-10" onSubmit={handleSearchButton}>
          <input
            type="text"
            className="input text-black"
            name="search"
            placeholder="Enter Language"
            list="browsers"
            defaultValue={language}
          />
          <datalist id="browsers">
            <option value="Arabic"></option>
            <option value="English"></option>
            <option value="Bangla"></option>
            <option value="Japanese"></option>
            <option value="Chinese"></option>
            <option value="Italian"></option>
            <option value="German"></option>
            <option value="French"></option>
            <option value="Spanish"></option>
          </datalist>
          <button type="submit" className="btn ml-4">
            Find Tutors
          </button>
        </form>

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
