import React from "react";
import { motion } from "motion/react";
import useAuth from "../Hooks/useAuth";
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
  const { user } = useAuth();
  return (
    <div className="h-screen relative bg-[url(/assets/Banner.jpg)] bg-no-repeat bg-cover bg-center flex items-center flex-col md:flex-row relative justify-center md:justify-between ">
      <div className="absolute top-0 right-0 left-0 h-screen bg-black opacity-40"></div>
      <div className="z-9">
        <Section1>
          <div className="md:ml-20 text-white mx-4">
            <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left">
              Master Languages with Top Tutors –
              <br className="lg:block hidden" /> Anytime, Anywhere!
            </p>
            <p className="mt-10 text-center md:text-left">
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
          <form className="border border-primary p-2 rounded-lg text-black md:min-w-[400px] min-w-[300px] bg-[rgba(0,0,0,0.62)] *:text-white">
            <fieldset className="fieldset  rounded-box w-full p-4 ">
              <input
                className="input w-full font-bold text-white bg-primary text-xl text-center"
                value="Start Learning Today"
              />
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
                <input
                  type="text"
                  className="border border-white py-3 rounded-sm pl-3 w-full"
                  name="language"
                  placeholder="Enter Language"
                  list="browsers"
                />
                <datalist id="browsers">
                  <option value="Arabic"></option>
                  <option value="English"></option>
                  <option value="Bangla"></option>
                  <option value="Japanese"></option>
                  <option value="Chinese"></option>
                  <option value="Italian"></option>
                  <option value="German"></option>
                  <option value="French"></option>
                  <option value="Spanish"></option>
                </datalist>
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
