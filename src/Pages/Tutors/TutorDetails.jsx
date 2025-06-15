import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoLanguageSharp, IoReturnDownBack } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { MdDescription, MdPreview } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Error2 from "../Error/Error2";

const TutorDetails = () => {
  const { user } = useAuth();
  const tutor = useLoaderData();
  const { _id, name, image, language, price, review, description } = tutor;

  // Handle Bookings
  const handleBookings = () => {
    const bookedTutors = {
      tutorId: tutor._id,
      name,
      image,
      language,
      price,
      tutorEmail: tutor.email,
      email: user.email,
    };
    axios
      .post("http://localhost:3000/tutorBookings", bookedTutors)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Tutor Booked Successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="pt-25 px-4">
      <div className="max-w-[1400px] mx-auto px-4">
        <Helmet>
          <title>TutorDetails || Langveta</title>
        </Helmet>

        <div className="text-center mb-6">
          <h1 className="text-primary">Tutor Details</h1>

          <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
            Welcome! You can see tutor's details here before booking done.
          </p>
        </div>
        <div className=" border border-slate-200 rounded-sm">
          <div className="flex flex-col md:flex-row gap-4 p-3 items-center">
            <img className="w-60 rounded-xl" src={image} alt="" />
            <div>
              <div>
                <h3>{name}</h3>
                <p className="flex items-center gap-1">
                  <IoLanguageSharp />
                  <span className="font-semibold">Language:</span> {language}
                </p>
                <p className="flex items-center gap-1">
                  <MdPreview />
                  <span className="font-semibold">Review:</span> {review}
                </p>
                <p className="flex items-center gap-1">
                  <MdDescription />
                  <span className="font-semibold">Description:</span>{" "}
                  {description}
                </p>
              </div>
            </div>
            <p className="flex items-center gap-1">
              <FaSackDollar />
              <span className="font-semibold">Price:</span> ${price}
            </p>
          </div>

          <Link to="/myBookedTutors">
            <button
              onClick={handleBookings}
              className="bg-secondary text-white py-4 text-2xl w-full rounded-b-sm font-bold cursor-pointer"
            >
              Book Now
            </button>
          </Link>
        </div>
        <Link className="font text-xl" to={-1}>
          <button className="border rounded-sm px-3 bg-secondary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
            <IoReturnDownBack className="text-4xl font-bold" />
            <span className="font-bold"> Go Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorDetails;
