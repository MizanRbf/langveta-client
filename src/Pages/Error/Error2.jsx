import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useRouteError } from "react-router";
import Swal from "sweetalert2";

const Error2 = () => {
  const error = useRouteError();

  useEffect(() => {
    if (error?.status === 401) {
      Swal.fire({
        icon: "error",
        title: "401 - Unauthorized",
        text: "You are not logged in or your session expired.",
      });
    } else if (error?.status === 403) {
      Swal.fire({
        icon: "error",
        title: "403 - Forbidden",
        text: "You are not allowed to access this resource.",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "An unexpected error occurred.",
      });
    }
  }, [error]);
  return (
    <div className="mt-30 md:mt-0 min-h-[calc(100vh-314px)] flex flex-col justify-center items-center">
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
          401 - unauthorized access
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
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
  );
};

export default Error2;
