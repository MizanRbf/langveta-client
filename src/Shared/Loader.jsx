import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-288px)]">
      <h2>
        Data Loading <span className="loading loading-dots loading-xl"></span>
      </h2>
    </div>
  );
};

export default Loader;
