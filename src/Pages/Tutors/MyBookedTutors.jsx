import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import BookedCard from "./BookedCard";
import { IoReturnDownBack } from "react-icons/io5";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const MyBookedTutors = () => {
  const { user } = useAuth();

  const [bookedTutors, setBookedTutors] = useState([]);

  // Handle Review
  const handleReview = (id) => {
    axios
      .patch(`https://langveta-server.vercel.app/review/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Review Sent!",
            icon: "success",
            draggable: true,
          });
        }
      })
      .catch((error) => console.log(error));
  };

  // useEffect
  useEffect(() => {
    if (!user?.email) return;
    const fetchTutors = async () => {
      try {
        const { data } = await axios.get(
          `https://langveta-server.vercel.app/tutorBookings/${user.email}`,
          {
            withCredentials: true,
          }
        );
        setBookedTutors(data);
      } catch (error) {
        if (error.status === 401) {
          Swal.fire({
            icon: "error",
            title: "401 - Unauthorized",
            text: "You are not logged in or your session expired.",
          });
        } else if (error.status === 403) {
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
      }
    };
    fetchTutors();
  }, [user]);
  return (
    <div className="pt-30">
      <div className="max-w-[1500px] mx-auto mb-6 px-4">
        <Helmet>
          <title>MyBookedTutors || Langveta</title>
        </Helmet>

        {/* Title */}
        <div>
          <Section>
            <div className="text-center mb-6">
              <h1 className="text-primary">My Booked Tutors</h1>

              <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
                All items reserved here you have booked recently.
              </p>
            </div>
          </Section>

          {/* Empty Message */}
          <div
            className={`bg-slate-200 rounded-lg py-30 ${
              bookedTutors.length > 0 ? "hidden" : "block"
            }`}
          >
            <h1 className="text-center text-black">
              You have not booked any tutors yet.
            </h1>
            <h4 className="text-center mt-8 text-black">Go to find tutors.</h4>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead
                className={`text-lg ${bookedTutors.length < 1 && "hidden"}`}
              >
                <tr className="text-primary">
                  <th>No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Language</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookedTutors?.map((singleTutor, index) => (
                  <BookedCard
                    key={index}
                    index={index}
                    handleReview={handleReview}
                    singleTutor={singleTutor}
                  ></BookedCard>
                ))}
              </tbody>
            </table>
            <Link className="font text-xl" to="/findTutors">
              <button className="border rounded-sm px-3 bg-primary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
                <IoReturnDownBack className="text-4xl font-bold" />
                <span className="font-bold">Find Tutors</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookedTutors;
