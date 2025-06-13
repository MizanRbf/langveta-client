import React from "react";

const BookedCard = ({ singleTutor, index, handleReview }) => {
  const { name, image, language, price, tutorId } = singleTutor;

  return (
    <tr key={singleTutor._id} className="border-2  border-slate-200">
      <th>{index + 1}</th>
      <td>
        <img
          className="rounded-xl md:max-w-20 md:h-20 min-w-30 h-30 border-2 p-1 border-primary"
          src={image}
          alt=""
        />
      </td>
      <td className="font-bold">{name}</td>
      <td>{language}</td>
      <td>$ {price}</td>
      <td>
        <div>
          <button
            onClick={() => handleReview(tutorId)}
            className="btn bg-primary text-white"
          >
            Review
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookedCard;
