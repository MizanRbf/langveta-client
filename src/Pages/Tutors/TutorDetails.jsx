import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

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
      <div className="max-w-[1400px] mx-auto px-4 border border-slate-200 rounded-sm">
        <div className="flex items-center gap-4 p-3">
          <img className="w-60 rounded-xl" src={image} alt="" />
          <div>
            <h3>{name}</h3>
            <p>
              <span className="font-semibold">Language:</span> {language}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {price}
            </p>
            <p>
              <span className="font-semibold">Review:</span> {review}
            </p>
            <p>
              <span className="font-semibold">Details:</span> {description}
            </p>
          </div>
        </div>
      </div>
      <Link to="/myBookedTutors">
        <button
          onClick={handleBookings}
          className="bg-secondary text-white py-6 text-2xl w-full rounded-b-sm font-bold cursor-pointer"
        >
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default TutorDetails;
