import React from "react";
import { FaGlobeEurope } from "react-icons/fa";
import {
  FaBookOpen,
  FaBookQuran,
  FaChurch,
  FaFlag,
  FaFlagUsa,
  FaGlobe,
  FaLandmark,
  FaPagelines,
  FaPizzaSlice,
} from "react-icons/fa6";
import CategoryCard from "./CategoryCard";
const tutorCategories = [
  {
    title: "English tutors",
    teachers: 33599,
    icon: FaFlagUsa,
    link: "/english-tutors",
  },
  {
    title: "Spanish tutors",
    teachers: 10052,
    icon: FaGlobeEurope,
    link: "/spanish-tutors",
  },
  {
    title: "French tutors",
    teachers: 3712,
    icon: FaFlag,
    link: "/french-tutors",
  },
  {
    title: "German tutors",
    teachers: 1515,
    icon: FaFlag,
    link: "/german-tutors",
  },
  {
    title: "Italian tutors",
    teachers: 2542,
    icon: FaPizzaSlice,
    link: "/italian-tutors",
  },
  {
    title: "Chinese tutors",
    teachers: 5238,
    icon: FaPagelines,
    link: "/chinese-tutors",
  },
  {
    title: "Arabic tutors",
    teachers: 3650,
    icon: FaBookQuran,
    link: "/arabic-tutors",
  },
  {
    title: "Japanese tutors",
    teachers: 2903,
    icon: FaLandmark,
    link: "/japanese-tutors",
  },
  {
    title: "Portuguese tutors",
    teachers: 1635,
    icon: FaChurch,
    link: "/portuguese-tutors",
  },
];

const TutorCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {tutorCategories.map((tutorCategory, index) => (
        <CategoryCard key={index} tutorCategory={tutorCategory}></CategoryCard>
      ))}
    </div>
  );
};

export default TutorCategories;
