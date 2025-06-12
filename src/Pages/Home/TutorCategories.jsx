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
    icon: "https://flagcdn.com/w80/sa.png",
    link: "/arabic-tutors",
  },
  {
    title: "English",
    teachers: 33599,
    icon: "https://flagcdn.com/w80/us.png",
    link: "/english-tutors",
  },
  {
    title: "Spanish",
    teachers: 10052,
    icon: "https://flagcdn.com/w80/es.png",
    link: "/spanish-tutors",
  },
  {
    title: "French",
    teachers: 3712,
    icon: "https://flagcdn.com/w80/fr.png",
    link: "/french-tutors",
  },
  {
    title: "German",
    teachers: 1515,
    icon: "https://flagcdn.com/w80/de.png",
    link: "/german-tutors",
  },
  {
    title: "Italian",
    teachers: 2542,
    icon: "https://flagcdn.com/w80/it.png",
    link: "/italian-tutors",
  },
  {
    title: "Chinese",
    teachers: 5238,
    icon: "https://flagcdn.com/w80/cn.png",
    link: "/chinese-tutors",
  },
  {
    title: "Japanese",
    teachers: 2903,
    icon: "https://flagcdn.com/w80/jp.png",
    link: "/japanese-tutors",
  },
  {
    title: "Bangla",
    teachers: 1635,
    icon: "https://flagcdn.com/w80/bd.png",
    link: "/bangla-tutors",
  },
];

const TutorCategories = () => {
  const [tutors, setTutors] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/tutorials", {
      withCredentials: true,
    })
      .then((res) => setTutors(res.data))
      .catch((error) => console.log(error));
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
