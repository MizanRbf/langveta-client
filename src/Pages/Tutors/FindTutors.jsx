// import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import TutorCard from "./TutorCard";
// import CategorizedTutorCard from "./CategorizedTutorCard";

const FindTutors = () => {
  // const { category: language } = useParams();
  const allTutors = useLoaderData();
  // const [categorizedTutors, setCategorizedTutors] = useState([]);

  // useEffect(() => {
  //   const filteredTutors = allTutors.filter(
  //     (singleTutor) => singleTutor.language == language
  //   );
  //   setCategorizedTutors(filteredTutors);
  // }, []);

  return (
    <div className="px-4 max-w-[1400px] mx-auto">
      <h1 className="mt-20">FindTutors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allTutors.map((singleTutor) => (
          <TutorCard
            key={singleTutor._id}
            singleTutor={singleTutor}
          ></TutorCard>
        ))}
      </div>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categorizedTutors.map((categorizedSingleTutor) => (
          <CategorizedTutorCard
            key={categorizedSingleTutor._id}
            categorizedSingleTutor={categorizedSingleTutor}
          ></CategorizedTutorCard>
        ))}
      </div> */}
    </div>
  );
};

export default FindTutors;
