import React from "react";
import { IoHome } from "react-icons/io5";
import { MdAssignmentAdd } from "react-icons/md";
import { SiGoogletasks, SiTask } from "react-icons/si";
import { Link } from "react-router";
import useAuth from "../../Hooks/useAuth";

const LeftSection = ({ handleUpdateProfile, open }) => {
  const { user } = useAuth();
  return (
    <div
      className={`w-full  max-w-sm shrink-0 text-white bg-primary md:rounded-l-lg mx-auto lg:mx-0 flex flex-col justify-between lg:relative z-10 absolute top-0 bottom-0 transform transition-all duration-300 ${
        open
          ? "opacity-100 translate-x-2 visible"
          : "opacity-0 -translate-x-5 invisible"
      }`}
    >
      {/* Profile Image */}
      <div className="text-center mt-4 py-4 mb-4 rounded-sm">
        <div className="avatar mb-6">
          <div className="ring-primary ring-offset-base-100 w-30 rounded-full ring-2 ring-offset-2">
            <img src={user?.photoURL} />
          </div>
        </div>
        <h4>{user?.displayName}</h4>
        <p>{user?.email}</p>

        <hr className="w-full mb-8 mt-10" />

        {/* NavLink */}
        <div className="mx-4 mb-10">
          <div className="space-y-4 *:hover:bg-white *:hover:text-primary transform transition-all ease-in-out *:hover:duration-400">
            <Link to="/">
              <button className="flex gap-1 items-center cursor-pointer w-full hover:bg-white hover:text-primary mb-2">
                <IoHome />
                Home
              </button>
            </Link>
            <Link to="/findTutors">
              <button className="flex gap-1 items-center cursor-pointer w-full hover:bg-white hover:text-primary mb-2">
                <SiTask />
                Find Tutors
              </button>
            </Link>
            <Link to="/addTutorials">
              <button className="flex gap-1 items-center cursor-pointer w-full hover:bg-white hover:text-primary mb-2">
                <SiTask />
                Add Tutorials
              </button>
            </Link>
            <Link to="/myTutorials">
              <button className="flex gap-1 items-center cursor-pointer w-full hover:bg-white hover:text-primary mb-2">
                <MdAssignmentAdd />
                My Tutorials
              </button>
            </Link>
            <Link to="/myBookedTutors">
              <button className="flex gap-1 items-center cursor-pointer w-full hover:bg-white hover:text-primary mb-2">
                <SiGoogletasks />
                My Booked Tutors
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Update */}
      <div className="flex flex-col justify-between">
        {/* Profile Name and Photo Update form */}

        <div className="">
          <form
            onSubmit={handleUpdateProfile}
            className="fieldset mx-4 border p-4 border-white mb-4"
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
    </div>
  );
};

export default LeftSection;
