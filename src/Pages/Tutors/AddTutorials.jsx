import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { motion } from "motion/react";
import { IoReturnDownBack } from "react-icons/io5";
const Section1 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);
const Section2 = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const AddTutorials = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tutorials, setTutorials] = useState([]);

  // Handle Add Tutorials
  const handleAddTutorials = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTutorial = Object.fromEntries(formData.entries());

    // Create Tutorial Collection in DB
    axios
      .post("http://localhost:3000/tutorials", newTutorial, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            icon: "error",
            title: "401 - Unauthorized",
            text: "You are not logged in or your session expired.",
          });
          newTutorial._id = res.data.insertedId;
          const newTutorials = [...tutorials, newTutorial];
          setTutorials(newTutorials);
          form.reset();
          navigate("/myTutorials");
        }
      })
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
  };

  return (
    <div className="pt-25 pb-20">
      <div className="  px-4 max-w-[1400px] mx-auto">
        <Helmet>
          <title>Add Tutorials || Langveta</title>
        </Helmet>

        <Section1>
          <div className="text-center mb-10">
            <div className="text-center mb-6">
              <h1 className="text-primary">Add Tutorials</h1>

              <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
                Add all field below with right information.
              </p>
            </div>
          </div>
        </Section1>
        {/* Form */}
        <Section2>
          <form
            onSubmit={handleAddTutorials}
            className="border border-primary p-4 rounded-lg text-black"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
                <label className="label text-black">User Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Enter Your Name"
                  defaultValue={user.displayName}
                  readOnly
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-black">User Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  defaultValue={user?.email}
                  readOnly
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-black">Image</label>
                <input
                  type="text"
                  name="image"
                  className="input w-full"
                  placeholder="Enter Tutorial Image"
                />
              </fieldset>

              {/* Language */}
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-black">Language</label>
                <input
                  type="text"
                  className="input w-full"
                  name="language"
                  placeholder="Enter Language"
                  list="browsers"
                />
                <datalist id="browsers">
                  <option value="Arabic"></option>
                  <option value="English"></option>
                  <option value="Bangla"></option>
                  <option value="Japanese"></option>
                  <option value="Chinese"></option>
                  <option value="Italian"></option>
                  <option value="German"></option>
                  <option value="French"></option>
                  <option value="Spanish"></option>
                </datalist>
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-black">Price</label>
                <input
                  type="text"
                  name="price"
                  className="input w-full"
                  placeholder="Enter Price"
                />
              </fieldset>
              <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
                <label className="label text-black">Review</label>
                <input
                  type="text"
                  name="review"
                  className="input w-full"
                  placeholder="Review"
                  defaultValue={0}
                />
              </fieldset>
            </div>
            {/* Description */}
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Description</label>
              <textarea
                type="text"
                name="description"
                className="input w-full"
                placeholder="Text Details"
              />
            </fieldset>

            {/* Button */}
            <fieldset className="fieldset  rounded-box w-full p-4 ">
              <input
                type="submit"
                className="input w-full font text-white bg-primary text-xl cursor-pointer"
                value="Submit"
              />
            </fieldset>
          </form>
        </Section2>
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

export default AddTutorials;
