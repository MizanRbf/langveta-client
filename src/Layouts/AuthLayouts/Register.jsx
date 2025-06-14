// import Lottie from "lottie-react";
import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthContext";
import { motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 100 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Register = () => {
  const { createUser, updateUser } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // Handle Register
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    setErrorMessage("");
    // Create User
    createUser(email, password)
      .then(() => {
        // Update User
        updateUser(profile)
          .then(() => {
            navigate("/auth/login");
          })
          .catch((error) => setErrorMessage(error.message));
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <Section>
      <div
        animate={{ y: [0, 150] }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl animate-slide-down"
      >
        <div className="card-body">
          {/* go home */}
          <div className="flex justify-end">
            <Link to="/">
              <button className="hover:bg-gray-100 px-5 py-2 rounded-sm cursor-pointer">
                <RxCross2 size={22} />
              </button>
            </Link>
          </div>
          <div className="w-60 mx-auto">
            <img src="/assets/logo2.png" alt="" />
          </div>
          <div className="bg-primary text-white py-4 rounded-sm">
            <h2 className="text-center">Register Your Account</h2>
          </div>
          <hr className="my-4 text-[#e5e5e5]" />
          {/* Form */}
          <form onSubmit={handleRegister} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Enter Your Name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Enter Your Photo URL"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Your Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Enter Your Password"
              required
            />

            {/* Accept Terms And Conditions */}
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Accept terms & conditions
            </label>
            {/* Error Message */}
            <p className="text-red-500">{errorMessage}</p>

            <button type="submit" className="btn  mt-4 button">
              Register
            </button>
          </form>
          <p className="text-center">
            Already have and account?{" "}
            <Link
              to="/auth/login"
              className="text-red-500 font-bold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Register;
