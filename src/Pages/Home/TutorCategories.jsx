import React, { useEffect, useState } from "react";
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
import { GiPalmTree } from "react-icons/gi";
import axios from "axios";
const tutorCategories = [
  {
    title: "Arabic",
    teachers: 3650,
    icon: FaBookQuran,
    link: "/arabic-tutors",
  },
  {
    title: "English",
    teachers: 33599,
    icon: FaFlagUsa,
    link: "/english-tutors",
  },
  {
    title: "Spanish",
    teachers: 10052,
    icon: FaGlobeEurope,
    link: "/spanish-tutors",
  },
  {
    title: "French",
    teachers: 3712,
    icon: FaFlag,
    link: "/french-tutors",
  },
  {
    title: "German",
    teachers: 1515,
    icon: FaFlag,
    link: "/german-tutors",
  },
  {
    title: "Italian",
    teachers: 2542,
    icon: FaPizzaSlice,
    link: "/italian-tutors",
  },
  {
    title: "Chinese",
    teachers: 5238,
    icon: FaPagelines,
    link: "/chinese-tutors",
  },
  {
    title: "Japanese",
    teachers: 2903,
    icon: FaLandmark,
    link: "/japanese-tutors",
  },
  {
    title: "Bangla",
    teachers: 1635,
    icon: GiPalmTree,
    link: "/bangla-tutors",
  },
];

const TutorCategories = () => {
  const [tutors, setTutors] = useState([]);
  console.log(tutors);
  useEffect(() => {
    axios("http://localhost:3000/tutorials").then((res) => setTutors(res.data));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {tutorCategories.map((tutorCategory, index) => (
        <CategoryCard key={index} tutorCategory={tutorCategory}></CategoryCard>
      ))}
    </div>
  );
};

export default TutorCategories;
