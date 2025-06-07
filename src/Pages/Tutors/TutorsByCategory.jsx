import { useLoaderData } from "react-router";
import TutorCard from "./TutorCard";

const TutorsByCategory = () => {
  const categorizedTutors = useLoaderData();

  return (
    <div className="max-w-[1400px] mx-auto px-4">
      <h1 className="mt-20">Tutors By Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
        {categorizedTutors.map((singleTutor) => (
          <TutorCard
            key={singleTutor._id}
            singleTutor={singleTutor}
          ></TutorCard>
        ))}
      </div>
    </div>
  );
};

export default TutorsByCategory;
