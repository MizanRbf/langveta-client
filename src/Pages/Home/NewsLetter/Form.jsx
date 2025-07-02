import React from "react";

const Form = ({ handleSubmit, form }) => {
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit} className=" w-full space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            name="first_name"
            placeholder="First-name"
            className="w-full py-3 rounded-sm pl-2 bg-white"
          />

          <input
            type="text"
            name="last_name"
            placeholder="Last-name"
            className="w-full py-3 rounded-sm pl-2 bg-white"
          />
        </div>
        <input
          type="email"
          placeholder="Your Work Email...."
          name="user_email"
          className="py-3 w-full rounded-sm pl-2 bg-white"
        />
        <br />
        <input
          type="Company"
          name="company_name"
          placeholder="Your Company"
          className="w-full py-3 rounded-sm pl-2 bg-white"
        />
        <br />
        <button
          type="submit"
          className="custom-width py-3 bg-primary text-white w-full rounded-sm cursor-pointer  shadow-2xl font-semibold"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
