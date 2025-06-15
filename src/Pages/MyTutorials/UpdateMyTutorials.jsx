import axios from "axios";
import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { IoReturnDownBack } from "react-icons/io5";
const Section = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    {children}
  </motion.div>
);

const UpdateMyTutorials = () => {
  const navigate = useNavigate();
  const myTutorial = useLoaderData();
  const { email, image, language, name, price, review, description } =
    myTutorial;
  const { _id } = myTutorial;

  // Handle Update MyTutorial
  const handleUpdateMyTutorial = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedMyTutorials = Object.fromEntries(formData.entries());

    // Update My Tutorials
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .put(
            `https://langveta-server.vercel.app/tutorials/${_id}`,
            updatedMyTutorials
          )

          .then((res) => {
            if (res.data.modifiedCount) {
              Swal.fire({
                title: "Updated Successfully!",
                icon: "success",
                draggable: true,
              });

              navigate("/myTutorials");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div className="pt-30">
      <Helmet>
        <title>UpdateTutorials || Langveta</title>
      </Helmet>
      <div className="px-4 max-w-[1400px] mx-auto mb-20">
        {/* Content */}
        <Section>
          <div className="text-center mb-6">
            <h1 className="text-primary">Update Your Data</h1>

            <p className="bg-secondary inline-block text-white px-4 rounded-sm mt-2">
              Sorry for cannot be updated all fields.
            </p>
          </div>
        </Section>

        {/* Form */}
        <form
          onSubmit={handleUpdateMyTutorial}
          className="border-2 border-primary p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 *:text-black">
            <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
              <label className="label text-black">User Name</label>
              <input
                type="text"
                defaultValue={name}
                name="name"
                className="input w-full"
                placeholder="Enter Your Name"
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">User Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                defaultValue={email}
                readOnly
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Image</label>
              <input
                type="text"
                defaultValue={image}
                name="image"
                className="input w-full"
                placeholder="Enter Tutorial Image"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Language</label>
              <input
                type="text"
                defaultValue={language}
                name="language"
                className="input w-full"
                placeholder="Enter Language"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Price</label>
              <input
                type="text"
                defaultValue={price}
                name="price"
                className="input w-full"
                placeholder="Enter Price"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Review</label>
              <input
                type="text"
                defaultValue={review}
                name="review"
                className="input w-full"
                placeholder="Review"
                readOnly
              />
            </fieldset>
          </div>
          {/* Description */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4 text-black">
            <label className="label text-black">Description</label>
            <textarea
              defaultValue={description}
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
              value="Update Now"
            />
          </fieldset>
        </form>
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

export default UpdateMyTutorials;
