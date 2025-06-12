import React, { useEffect, useState } from "react";
import Banner from "../../Shared/Banner";
import Stats from "./Stats";
import TutorCategories from "./TutorCategories";
import TopRatedTutors from "./TopRatedTutors";
import { useLoaderData } from "react-router";
import GlobalLearners from "./GlobalLearners";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  const topRatedTutors = useLoaderData();
  const [allTutors, setAllTutors] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [languageCount, setLanguageCount] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  // useEffect Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios("http://localhost:3000/tutorBookings", {
          withCredentials: true,
        });
        const data = await res.data;
        // UsersCount
        const uniqueUsers = [...new Set(data.map((booking) => booking.email))];
        setTotalUsers(uniqueUsers.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookings();
  }, []);

  // useEffect Tutorials
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axios("http://localhost:3000/tutorials", {
          withCredentials: true,
        });

        // All Tutors
        const data = await res.data;
        setAllTutors(data);

        // Reviews Count
        const reviews = await res.data.reduce((sum, tutor) => {
          const reviewCount = Number(tutor.review) || 0;
          return sum + reviewCount;
        }, 0);
        setTotalReviews(reviews);

        // Language Count
        const uniqueLanguages = [
          ...new Set(data.map((tutor) => tutor.language)),
        ];
        setLanguageCount(uniqueLanguages.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTutors();
  }, []);

  return (
    <div className="">
      <Helmet>
        <title>Home || Langveta</title>
      </Helmet>
      {/* Banner Section */}
      <Banner></Banner>

      {/* Stats Section */}
      <Stats
        allTutors={allTutors}
        totalReviews={totalReviews}
        languageCount={languageCount}
        totalUsers={totalUsers}
      ></Stats>

      {/* Language Category Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-20">
        <div className="text-center mb-6">
          <h1 className="text-primary">Language Category</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Looking for tutors who specialize in a particular language? Find
            below.
          </p>
        </div>
        <TutorCategories></TutorCategories>
      </div>
      {/* Top Rated Tutors Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-20">
        <div className="text-center mb-6">
          <h1 className="text-primary">Top Rated Tutors</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Trusted by hundreds of students for their exceptional teaching
            quality.
          </p>
        </div>
        <TopRatedTutors
          key={topRatedTutors._id}
          topRatedTutors={topRatedTutors}
        ></TopRatedTutors>
      </div>

      {/* Global Learners Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-20">
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
