import React from "react";
import Banner from "../../Shared/Banner";
import Stats from "./Stats";
import LanguageCategory from "./LanguageCategory";

const HomePage = () => {
  return (
    <div className="">
      {/* Banner Section */}
      <Banner></Banner>

      {/* Stats Section */}
      <Stats></Stats>

      {/* Language Category Section */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Language Category</h1>
        <LanguageCategory></LanguageCategory>
      </div>
      {/* Extra - 1 */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Extra - 1</h1>
      </div>

      {/* Extra - 2 */}
      <div className="max-w-[1400px] mx-auto px-4 my-10">
        <h1 className="text-primary">Extra - 2</h1>
      </div>
    </div>
  );
};

export default HomePage;
