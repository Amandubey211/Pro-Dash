import React from "react";

const Offline = () => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-1  relative text-center"
      role="alert"
    >
      <strong className="font-bold">Offline!</strong>
      <span className="block sm:inline">
        {" "}
        You are currently offline. Please check your internet connection.
      </span>
    </div>
  );
};

export default Offline;
