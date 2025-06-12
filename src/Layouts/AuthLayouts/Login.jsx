import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import SocialLogin from "./SocialLogin";
import { AuthContext } from "../../Provider/AuthContext";
import { motion } from "motion/react";
import { RxCross2 } from "react-icons/rx";

const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 150 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const Login = () => {
  const location = useLocation();
  const { loginUser, setUser } = use(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const from = location.state || "/";

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");
    // login User
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(from);
      })
      .catch((error) => setErrorMessage(error.message));
  };

  return (
    <Section>
      <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl ">
        <div className="card-body">
          {/* Go Home */}
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
            <h2 className="text-center">Login Your Account</h2>
          </div>
          <hr className="text-[#e5e5e5] my-4" />
          <form onSubmit={handleLogin} className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* Error Message */}
            <p className="text-red-500">{errorMessage}</p>
            <button type="submit" className="btn  mt-4 button">
              Login
            </button>
          </form>

          {/* Or */}
          <div className="flex items-center gap-3">
            <hr className="text-[#e5e5e5] flex-grow" />
            <span>or</span>
            <hr className="text-[#e5e5e5] flex-grow" />
          </div>

          {/* Google Button */}
          {/* Google */}
          <SocialLogin
            setErrorMessage={setErrorMessage}
            from={from}
          ></SocialLogin>

          <p className="text-center">
            Don't have an account{" "}
            <Link
              to="/auth/register"
              className="text-red-500 hover:underline font-bold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Login;
