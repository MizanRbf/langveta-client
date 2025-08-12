import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import MenuIcon from "./MenuIcon";

const Dashboard = () => {
  const [allTutors, setAllTutors] = useState([]);
  const [totalReviews, setTotalReviews] = useState(0);
  const [languageCount, setLanguageCount] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const { user, updateUser, setUser } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);
  const [bookedTutors, setBookedTutors] = useState([]);
  const [open, setOpen] = useState(false);

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <div className="p-10">
      <MenuIcon setOpen={setOpen} open={open}></MenuIcon>
      <div className="border border-gray-200 rounded-lg shadow-lg flex flex-col lg:flex-row gap-6 bg-slate-50 relative overflow-x-hidden">
        <Helmet>
          <title>Langveta || Dashboard</title>
        </Helmet>

        <div className="flex justify-center lg:hidden pt-8">
          <h1 className="text-center border inline-block px-4 bg-secondary text-white rounded-sm">
            User Dashboard
          </h1>
        </div>

        {/* Left Section*/}
        <LeftSection
          handleUpdateProfile={handleUpdateProfile}
          open={open}
        ></LeftSection>

        {/* Right Section */}
        <RightSection
          allTutors={allTutors}
          totalReviews={totalReviews}
          languageCount={languageCount}
          totalUsers={totalUsers}
          myTutorials={myTutorials}
          bookedTutors={bookedTutors}
        ></RightSection>
      </div>
    </div>
  );
};

export default Dashboard;
