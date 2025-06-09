import axios from "axios";
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

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
    <div className="pt-25">
      <div className="mb-10 text-black px-4 max-w-[1400px] mx-auto">
        {/* <Helmet>
          <title>Langveta || Add Tutorials</title>
        </Helmet> */}
        {/* Content */}
        <div className="text-center mb-10">
          <h1 className="mb-4 text-center rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm">
            Add Tutorials
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleAddTutorials}
          className="bg-slate-200 p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
              <label className="label text-black">User Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter Your Name"
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
                // placeholder="Enter Tutorial Image"
                value="https://i.ibb.co/LdL4MB6Z/download.jpg"
              />
            </fieldset>

            {/* Language */}
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Language</label>
              <input
                type="text"
                className="input w-full"
                name="search"
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
                readOnly
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
      </div>
    </div>
  );
};

export default AddTutorials;
