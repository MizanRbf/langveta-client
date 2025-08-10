import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#680707] to-[#000000] h-screen pt-50 px-4">
      <div className="flex flex-col justify-center items-center">
        <Helmet>
          <title>Error || Langveta</title>
        </Helmet>
        <img
          className="w-[100px] md:w-[200px] mb-4"
          src="Assets/Error.png"
          alt=""
        />
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <img
              className="w-[200px]"
              src="https://i.ibb.co.com/DH1pF5yR/135-1358116-error-png-removebg-preview.png"
              alt=""
            />
          </div>
          <h1 className="text-red-500 text-2xl md:text-5xl font-bold">
            404 - Page Not Found
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            className="bg-green-600 text-white px-8 py-2 font-semibold rounded-md"
            to="/"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
