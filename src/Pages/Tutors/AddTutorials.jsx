import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { motion } from "motion/react";
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
            position: "top-end",
            icon: "success",
            title: "Tutorials Added Successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          newTutorial._id = res.data.insertedId;
          const newTutorials = [...tutorials, newTutorial];
          setTutorials(newTutorials);
          form.reset();
          navigate("/myTutorials");
        }
      });
  };

  return (
    <div className="pt-25 pb-20">
      <div className=" text-black px-4 max-w-[1400px] mx-auto">
        {/* <Helmet>
          <title>Langveta || Add Tutorials</title>
        </Helmet> */}
        {/* Content */}
        <Section1>
          <div className="text-center mb-10">
            <h1 className="mb-4 text-primary text-center">Add Tutorials</h1>
          </div>
        </Section1>
        {/* Form */}
        <Section2>
          <form
            onSubmit={handleAddTutorials}
            className="bg-slate-100 border border-slate-300 p-4 rounded-lg"
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
      </div>
    </div>
  );
};

export default AddTutorials;
