import React from "react";
import Banner from "../../Shared/Banner";
import Stats from "./Stats";
import TutorCategories from "./TutorCategories";
import TopRatedTutors from "./TopRatedTutors";
import { useLoaderData } from "react-router";
import GlobalLearners from "./GlobalLearners";

const HomePage = () => {
  const topRatedTutors = useLoaderData();
  return (
    <div className="">
      {/* Banner Section */}
      <Banner></Banner>

      {/* Stats Section */}
      <Stats></Stats>

      {/* Language Category Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary mb-10">Language Category</h1>
        <TutorCategories></TutorCategories>
      </div>
      {/* Top Rated Tutors Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Top Rated Tutors</h1>
        <TopRatedTutors
          key={topRatedTutors._id}
          topRatedTutors={topRatedTutors}
        ></TopRatedTutors>
      </div>

      {/* Global Learners Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <div className="text-center mb-6">
          <h1 className="text-primary">Global Learners Around the World</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Join 300+ learners from 20+ countries improving their language
            skills.
          </p>
        </div>
        <GlobalLearners></GlobalLearners>
      </div>
    </div>
  );
};

export default HomePage;
