import React from "react";

const BookedCard = ({ singleTutor, index, handleReview }) => {
  const { name, image, language, price, tutorId } = singleTutor;

  return (
    <tr key={singleTutor._id} className="border-2 border-white">
      <th>{index + 1}</th>
      <td>
        <img className="rounded-xl w-20 h-20" src={image} alt="" />
      </td>
      <td>{name}</td>
      <td>{language}</td>
      <td>$ {price}</td>
      <td>
        <div>
          <button onClick={() => handleReview(tutorId)} className="btn">
            Review
          </button>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-3"></div>
      </td>
    </tr>
  );
};

export default BookedCard;
