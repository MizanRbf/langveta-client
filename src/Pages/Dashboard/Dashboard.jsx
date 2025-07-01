import { Helmet } from "react-helmet-async";

import { Link } from "react-router";
import { IoHome } from "react-icons/io5";
import { SiGoogletasks, SiTask } from "react-icons/si";
import { MdAssignmentAdd } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import Stats from "./Stats";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Chart from "./Chart";

const Dashboard = () => {
  const [allTutors, setAllTutors] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [languageCount, setLanguageCount] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const { user, updateUser, setUser } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);
  const [bookedTutors, setBookedTutors] = useState([]);

  // useEffect MyBookedTutors
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

  // useEffect myTutorials
  useEffect(() => {
    if (user?.email) {
      axios(`https://langveta-server.vercel.app/myTutorials/${user.email}`, {
        withCredentials: true,
      })
        .then((res) => setMyTutorials(res.data))
        .catch((error) => {
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
        });
    }
  }, [user]);
  // useEffect Tutorials
  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const res = await axios(
          "https://langveta-server.vercel.app/tutorials",
          {
            withCredentials: true,
          }
        );

        // All Tutors
        const data = await res.data;
        setAllTutors(data);

        // Reviews Count
        const reviews = await res.data.reduce((sum, tutor) => {
          const reviewCount = Number(tutor.review) || 0;
          return sum + reviewCount;
        }, 0);
        setTotalReviews(reviews);

        // Language Count
        const uniqueLanguages = [
          ...new Set(data.map((tutor) => tutor.language)),
        ];
        setLanguageCount(uniqueLanguages.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTutors();
  }, []);

  // useEffect Bookings
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios(
          "https://langveta-server.vercel.app/tutorBookings",
          {
            withCredentials: true,
          }
        );
        const data = await res.data;
        // UsersCount
        const uniqueUsers = [...new Set(data.map((booking) => booking.email))];
        setTotalUsers(uniqueUsers.length);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBookings();
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    // Update User
    updateUser({ displayName: name, photoURL: photo })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        form.reset();
      })
      .catch();
  };

  return (
    <div className="px-10 pt-10 lg:pt-0">
      <div className="max-w-[1500px] mx-auto md:mt-10 mb-20 border border-gray-200 rounded-lg shadow-xl flex flex-col md:flex-row gap-6 bg-slate-100">
        <Helmet>
          <title>Langveta || Dashboard</title>
        </Helmet>

        <div className="flex justify-center md:hidden pt-8">
          <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm">
            User Dashboard
          </h1>
        </div>
        {/* Left Section*/}
        <div className="w-full max-w-sm shrink-0 text-white bg-secondary lg:rounded-l-lg mx-auto lg:mx-0">
          <div className="">
            {/* Profile Image */}
            <div className="text-center mt-4 py-4 mb-4 rounded-sm">
              <div className="avatar mb-6">
                <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
              <h4>{user?.displayName}</h4>
              <p>{user?.email}</p>
            </div>
            <hr className="w-full mb-8" />

            {/* NavLink */}

            <div className="mx-4 mb-10">
              <ul className="space-y-4">
                <li className="flex gap-1 items-center">
                  <IoHome />
                  <Link to="/">Home</Link>
                </li>

                <li className="flex gap-1 items-center">
                  <SiTask />
                  <Link to="/addTutorials">Add Tutorials</Link>
                </li>
                <li className="flex gap-1 items-center">
                  <MdAssignmentAdd />
                  <Link to="/myTutorials">My Tutorials</Link>
                </li>
                <li className="flex gap-1 items-center">
                  <SiGoogletasks />
                  <Link to="/myBookedTutors">My Booked Tutors</Link>
                </li>
              </ul>
            </div>

            {/* Profile Name and Photo Update form */}

            <form
              onSubmit={handleUpdateProfile}
              className="fieldset mx-4 border p-4 border-primary mb-4"
            >
              <h4>Update Your Profile</h4>
              {/* Name */}
              <label className="label">Update Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter new name"
                required
              />
              {/* Photo */}
              <label className="label">Update Photo</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="Enter new photo url"
                required
              />
              <button
                type="submit"
                className="btn btn-primary bg- mt-4 text-white border-white"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
        {/* Right Section */}
        <div className="mx-auto w-full">
          <div className="md:block justify-center hidden pt-4">
            <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm mb-8">
              User Dashboard
            </h1>
          </div>

          <div className="">
            {/* Stats Section */}
            <Stats
              allTutors={allTutors}
              totalReviews={totalReviews}
              languageCount={languageCount}
              totalUsers={totalUsers}
              myTutorials={myTutorials}
              bookedTutors={bookedTutors}
            ></Stats>
            <Chart bookedTutors={bookedTutors}></Chart>

            {/* Empty data notification */}
            <div
              className={`bg-slate-100 rounded-lg m-4 mb-20 py-30 ${
                bookedTutors.length > 0 ? "hidden" : "block"
              }`}
            >
              <h1 className="text-center text-black">Chart is not shown!</h1>
              <h4 className="text-center mt-8 text-black">
                You have not added any task yet.Go to Add Task for posting your
                task.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
