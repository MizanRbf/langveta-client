import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import { IoReturnDownBack } from "react-icons/io5";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { motion } from "motion/react";
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

const MyTutorials = () => {
  const { user } = useAuth();
  const [myTutorials, setMyTutorials] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    if (user?.email) {
      axios(`http://localhost:3000/myTutorials/${user.email}`, {
        withCredentials: true,
      })
        .then((res) => setMyTutorials(res.data))
        .catch((error) => console.log(error.message));
    }
  }, [user]);

  // Handle Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/tutorials/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.result1.deletedCount) {
            const remainingMyTutorials = myTutorials.filter(
              (myTutorial) => myTutorial._id !== id
            );
            setMyTutorials(remainingMyTutorials);
            console.log("after delete ");
          }
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="pt-30">
      <div className="max-w-[1400px] mx-auto mb-6 px-4">
        {/* <Helmet>
          <title>Skilnado || MyTasks</title>
        </Helmet> */}

        {/* Title */}
        <div>
          <Section>
            <h1 className="mb-10 text-center text-primary">My Tutorials</h1>
          </Section>

          {/* Empty Message */}
          <div
            className={`bg-slate-200 rounded-lg py-30 ${
              myTutorials.length > 0 ? "hidden" : "block"
            }`}
          >
            <h1 className="text-center text-black">
              You have not added any tutorials yet.
            </h1>
            <h4 className="text-center mt-8 text-black">
              Go to AddTutorials for posting your tutorials.
            </h4>
          </div>
          <div className="overflow-x-auto">
            <table className="table bg-secondary text-white">
              {/* head */}

              <thead
                className={`text-white text-lg ${
                  myTutorials.length < 1 && "hidden"
                }`}
              >
                <tr>
                  <th>No.</th>
                  <th>Image</th>
                  <th>Language</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>review</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {myTutorials.map((myTutorials, index) => (
                  <tr key={myTutorials._id} className="border-2 border-white">
                    <th>{index + 1}</th>
                    <td>
                      <img
                        className="rounded-xl w-20 h-20"
                        src={myTutorials.image}
                        alt=""
                      />
                    </td>
                    <td>{myTutorials.language}</td>
                    <td>{myTutorials.price}</td>
                    <td>{myTutorials.description}</td>
                    <td>{myTutorials.review}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        {/* Update Button */}
                        <Link to={`/updateMyTutorials/${myTutorials._id}`}>
                          <button className="bg-blue-700 p-2 rounded-sm text-white btn border-0">
                            <MdEdit className="text-xl" />
                          </button>
                        </Link>
                        {/* Delete Button */}
                        <Link>
                          <button
                            onClick={() => handleDelete(myTutorials._id)}
                            className="bg-red-500 p-2 rounded-sm text-white btn border-0"
                          >
                            <MdDelete className="text-xl" />
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Link className="font text-xl" to="/addTutorials">
              <button className="border rounded-sm px-3 bg-primary text-white flex gap-2 items-center mt-6 mb-4 cursor-pointer">
                <IoReturnDownBack className="text-4xl font-bold" />
                <span className="font-bold"> Add Tutorials</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTutorials;
