import axios from "axios";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa6";

const GlobalLearners = () => {
  const [countries, setCountries] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios
      .get("/Countries.json")
      .then((res) => setCountries(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("/Testimonials.json")
      .then((res) => setTestimonials(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      {/* Countries */}
      <Marquee speed={30} pauseOnHover={true}>
        {countries.map((country, index) => (
          <div
            key={index}
            className="mr-4 bg-slate-200 rounded-lg p-4 border border-slate-300"
          >
            <div>{country.flag}</div>
            <div>{country.name}</div>
            <div>{country.learners} learners</div>
          </div>
        ))}
      </Marquee>

      <div className="text-center">
        <h5 className=" text-white px-6 rounded-sm py-1 bg-secondary my-4 inline-block">
          Learner's Feedback
        </h5>
      </div>

      {/* Testimonials */}
      <Marquee direction="right" speed={30} pauseOnHover={true}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="mr-4 bg-slate-200 rounded-lg p-4 border border-slate-300"
          >
            <div className="italic mb-6">"{testimonial.review}"</div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                {/* Image */}
                <div className="avatar">
                  <div className="ring-white ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                    <img src={testimonial.image} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-xs">{testimonial.country}</div>
                </div>
              </div>

              {/* Star */}
              <div className="flex text-amber-600 justify-center items-center *:text-sm space-x-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default GlobalLearners;
