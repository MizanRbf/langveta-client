import { NavLink, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-secondary py-3 fixed top-0 right-0 left-0">
      <nav className="flex justify-between max-w-[1800px] mx-auto items-center px-4">
        {/* Company Logo */}
        <div>
          <img
            className="w-50 bg-white rounded-sm"
            src="/assets/logo2.png"
            alt=""
          />
        </div>
        {/* NavLinks */}
        <div className="space-x-4 text-white">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/findTutors">Find tutors</NavLink>

          {/* For Applicant links. Check roles as well */}
          {user && <NavLink to="/addTutorials">Add Tutorials</NavLink>}

          {/* For Recruiter. Check role as well */}
          {user && (
            <>
              <NavLink to="/myTutorials">My Tutorials</NavLink>
              <NavLink to="/myBookedTutors">My booked tutors</NavLink>
            </>
          )}
        </div>

        {/* Authentication */}
        <div className="flex gap-2">
          {/* User Info */}
          {user && (
            <img
              className="w-10 rounded-full h-10 ring-2"
              src={user?.photoURL}
              alt=""
            />
          )}

          {/* Login & LogOut Button */}
          {user ? (
            <button className="button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="button" onClick={() => navigate("/Login")}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
