import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
const Section1 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const Section2 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const Banner = () => {
  const navigate = useNavigate();

  // Handle Banner Search
  const handleBLanguageSearch = (e) => {
    e.preventDefault();
    const language = e.target.language.value;
    navigate(`/find-tutors/${language}`);
  };

  return (
    <div className="md:h-screen relative bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center flex items-center flex-col md:flex-row justify-center md:justify-between  gap-10 pt-30 md:pt-0 pb-20 md:pb-0">
      <div className="absolute top-0 right-0 left-0 h-screen bg-black opacity-40 z-1"></div>
      <div className="z-9">
        <Section1>
          <div className="md:ml-20 text-white mx-4">
            <p className="text-xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Master Languages with Top Tutors –
              <br className="lg:block hidden" /> Anytime, Anywhere!
            </p>
            <p className="mt-4 md:mt-10 text-center md:text-left text-xs md:text-base">
              Learn your desired language from expert tutors across the globe.
              Book sessions,
              <br className="lg:block hidden" /> track progress, and grow
              fluency — effortlessly and fast.
            </p>
          </div>
        </Section1>
      </div>

      {/* Form */}

      <div className="z-10 md:mr-20">
        <Section2>
          <form
            onSubmit={handleBLanguageSearch}
            className="border border-primary p-2 rounded-lg text-black md:min-w-[300px] min-w-[200px] lg:min-w-[400px]  bg-[rgba(0,0,0,0.62)] *:text-white"
          >
            <fieldset className="fieldset  rounded-box w-full p-4 ">
              <div className="w-full  bg-primary px-6 py-3 rounded-sm">
                <h2 className="font-bold text-white text-xl text-center">
                  Start Learning Today
                </h2>
              </div>
            </fieldset>
            <div className="grid grid-cols-1">
              <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
                <label className="label text-white">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="border border-white py-3 rounded-sm pl-3 w-full"
                  placeholder="Enter Your Name"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-white">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="border border-white py-3 rounded-sm pl-3 w-full"
                  placeholder="Enter Your Email"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-white">Preferred Time</label>
                <input
                  type="text"
                  name="image"
                  className="border border-white py-3 rounded-sm pl-3 w-full"
                  placeholder="Enter Preferred Time"
                />
              </fieldset>

              {/* Language */}
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-white">
                  Language You Want to Learn
                </label>
                <select
                  type="text"
                  className="border border-white py-3 rounded-sm pl-3 w-full *:bg-black"
                  name="language"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a language
                  </option>
                  <option value="English">English</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                </select>
              </fieldset>
            </div>
            {/* Button */}
            <fieldset className="fieldset  rounded-box w-full p-4 ">
              <input
                type="submit"
                className="input w-full font text-white bg-primary text-xl cursor-pointer"
                value="Find My Tutor"
              />
            </fieldset>
          </form>
        </Section2>
      </div>
    </div>
  );
};

export default Banner;
