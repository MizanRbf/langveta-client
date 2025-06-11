import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";
import BookedCard from "./BookedCard";
import { IoReturnDownBack } from "react-icons/io5";
import Swal from "sweetalert2";

const MyBookedTutors = () => {
  const { user } = useAuth();

  const [bookedTutors, setBookedTutors] = useState([]);

  // Handle Review
  const handleReview = (id) => {
    axios
      .patch(`http://localhost:3000/review/${id}`)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Review Updated Successfully!",
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
          `http://localhost:3000/tutorBookings/${user.email}`,
          {
            withCredentials: true,
          }
        );
        setBookedTutors(data);
      } catch (error) {
        console.log("failed to fetch:", error);
      }
    };
    fetchTutors();
  }, [user]);
  return (
    <div className="pt-40">
      <div className="max-w-[1400px] mx-auto mb-6 px-4">
        {/* <Helmet>
              <title>Skilnado || MyTasks</title>
            </Helmet> */}

        {/* Title */}
        <div className="my-10">
          <h1 className="mb-4">My Booked Tutors</h1>

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
            <table className="table bg-secondary text-white">
              {/* head */}
              <thead
                className={`text-white text-lg ${
                  bookedTutors.length < 1 && "hidden"
                }`}
              >
                <tr>
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
