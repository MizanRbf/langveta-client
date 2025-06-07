import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const UpdateMyTutorials = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const myTutorial = useLoaderData();
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
          .put(`http://localhost:3000/tutorials/${_id}`, updatedMyTutorials)

          .then((res) => {
            console.log(res.data);
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
      <div className="px-4 max-w-[1400px] mx-auto mb-20">
        {/* Content */}
        <div className="">
          <h1 className="mb-4 py-1 rounded-tr-4xl rounded-tl-4xl rounded-bl-sm rounded-br-sm">
            Update Your Data
          </h1>
        </div>

        {/* Form */}
        <form
          onSubmit={handleUpdateMyTutorial}
          className="bg-slate-200 p-4 rounded-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <fieldset className="fieldset border-base-300 rounded-box w-full p-4">
              <label className="label text-black">User Name</label>
              <input
                type="text"
                defaultValue={myTutorial.name}
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
                defaultValue={myTutorial.image}
                name="image"
                className="input w-full"
                placeholder="Enter Tutorial Image"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Language</label>
              <input
                type="text"
                defaultValue={myTutorial.language}
                name="language"
                className="input w-full"
                placeholder="Enter Language"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Price</label>
              <input
                type="text"
                defaultValue={myTutorial.price}
                name="price"
                className="input w-full"
                placeholder="Enter Price"
              />
            </fieldset>
            <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
              <label className="label text-black">Review</label>
              <input
                type="text"
                defaultValue={myTutorial.review}
                name="review"
                className="input w-full"
                placeholder="Review"
              />
            </fieldset>
          </div>
          {/* Description */}
          <fieldset className="fieldset  border-base-300 rounded-box w-full p-4">
            <label className="label text-black">Description</label>
            <textarea
              defaultValue={myTutorial.description}
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
      </div>
    </div>
  );
};

export default UpdateMyTutorials;
