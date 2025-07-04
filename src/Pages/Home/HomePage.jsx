import Banner from "../../Shared/Banner";
import TutorCategories from "./TutorCategories";
import TopRatedTutors from "./TopRatedTutors";
import { useLoaderData } from "react-router";
import GlobalLearners from "./GlobalLearners";
import { Helmet } from "react-helmet-async";
import NewsLetter from "./NewsLetter/NewsLetter";

const HomePage = () => {
  const topRatedTutors = useLoaderData();

  return (
    <div className="">
      <Helmet>
        <title>Home || Langveta</title>
      </Helmet>
      {/* Banner Section */}
      <Banner></Banner>

      {/* Language Category Section */}
      <div
        id="language"
        className="max-w-[1500px] mx-auto px-4 my-20 scroll-mt-30"
      >
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
      <div
        id="topRatedTutors"
        className="max-w-[1500px] mx-auto px-4 my-20 scroll-mt-30"
      >
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
      <div
        id="global"
        className="max-w-[1500px] mx-auto px-4 my-20 scroll-mt-30"
      >
        <div className="text-center mb-6">
          <h1 className="text-primary">Global Learners Around the World</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Join 300+ learners from 20+ countries improving their language
            skills.
          </p>
        </div>
        <GlobalLearners></GlobalLearners>
      </div>

      {/* NewsLetter */}
      <div
        id="global"
        className="max-w-[1500px] mx-auto px-4 my-20 scroll-mt-30"
      >
        <div className="text-center mb-6">
          <h1 className="text-primary">Stay in the Loop</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Subscribe to our newsletter for the latest language learning tips,
            new tutors, and platform updates.
          </p>
        </div>
        <NewsLetter></NewsLetter>
      </div>
    </div>
  );
};

export default HomePage;
