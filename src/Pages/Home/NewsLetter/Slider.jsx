import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../../../public/assets/Banner/banner1.jpg";
import bannerImg2 from "../../../../public/assets/Banner/banner2.jpg";
import bannerImg3 from "../../../../public/assets/Banner/banner3.jpg";

const Slider = () => {
  return (
    <div className="pt-24 md:pt-30">
      <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
        {/* Slider-1 */}
        <div className="relative">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px] "
            src={bannerImg1}
          />

          <div className="p-5 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#02020285]">
            <p className="md:mb-4 text-lg md:text-4xl lg:text-5xl font-bold">
              Welcome to Skilnado
            </p>
            <p className=" mb-6 text-xs md:text-lg lg:text-xl">
              Find the perfect freelancer for your needs.
            </p>
          </div>
        </div>
        {/* Slider-2 */}
        <div className="relative">
          <img
            className="h-[229px] md:h-[450px] lg:h-[500px]"
            src={bannerImg2}
          />

          <div className="p-5 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#02020285]">
            <p className="md:mb-4 text-lg md:text-4xl lg:text-5xl font-bold">
              Post Your Task Easily
            </p>
            <p className=" mb-6 text-xs md:text-lg lg:text-xl">
              Quick and simple way to get work done
            </p>
          </div>
        </div>
        {/* Slider-3 */}
        <div className="relative">
          <div className="p-5 md:p-8 lg:p-10 absolute top-[70px] md:top-[130px] text-white text-left bg-[#02020285]">
            <p className="md:mb-4 text-lg md:text-4xl lg:text-5xl font-bold">
              Build Your Career
            </p>
            <p className=" mb-6 text-xs md:text-lg lg:text-xl">
              Join our platform and grow your skills
            </p>
          </div>

          <img className="md:h-[450px] lg:h-[500px]" src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
