import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoLanguageSharp, IoReturnDownBack } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";
import { MdDescription, MdPreview } from "react-icons/md";

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
      .post("https://langveta-server.vercel.app/tutorBookings", bookedTutors)
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
        <div className="flex gap-4 p-3 items-center">
          <img className="w-20 rounded-xl" src={image} alt="" />
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
      </div>
      <Link to="/myBookedTutors">
        <button
          onClick={handleBookings}
          className="bg-secondary text-white py-6 text-2xl w-full rounded-b-sm font-bold cursor-pointer"
        >
          Book Now
        </button>
      </Link>

      <Link className="font text-xl" to={-1}>
        <button className="border rounded-sm px-3 bg-secondary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
          <IoReturnDownBack className="text-4xl font-bold" />
          <span className="font-bold"> Go Back</span>
        </button>
      </Link>
    </div>
  );
};

export default TutorDetails;
