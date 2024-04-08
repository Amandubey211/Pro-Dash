import React from "react";
import Layout from "../Layout/Layout";
import ErrorSVG from "../Assets/ErrorAssets/Error.svg";
import { NavLink } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";

const Error = () => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const currentMode = useSelector((state) => state.themes.currentPalette);
  return (
    <Layout title="404 Error">
      <div
        className={`flex h-screen justify-center items-center ${
          currentMode == "dark" ? "text-white" : "text-black"
        }  `}
      >
        <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-1 h-[70%]  shadow-2xl   rounded-2xl  w-[70%] ">
          <div className="lg:col-span-2   flex flex-col flex-wrap justify-center items-center">
            <img
              className="sm:h-[70%] sm:w-[100%] md:h-[70%] md:w-[70%] "
              src={ErrorSVG}
              alt="Error Image"
            />
          </div>
          <div
            style={{ backgroundColor: currentPalette.primary }}
            className="lg:rounded-l-[5rem]  shadow-2xl sm:rounded-2xl  rounded-r-md  flex  flex-col gap-1 justify-center items-center"
          >
            <b className="text-center font-bold text-3xl uppercase">opps!404</b>
            <span className="text-[10px] -mt-2 mb-4">Page Not Found</span>
            <span className="text-sm font-semibold">
              {" "}
              Let's bring you back!
            </span>
            <NavLink
              to="/"
              className="border-white  text-white hover:opacity-80  border  p-1 px-3 rounded-md flex items-center gap-1"
            >
              <IoMdArrowBack />
              <span>Home Page</span>
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Error;
