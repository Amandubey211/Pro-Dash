import React from "react";
import { useSelector } from "react-redux";

const LoginSidePanel = ({ loginPage, HandlePage }) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  return (
    <div
      style={{ backgroundColor: currentPalette.primary }}
      className={`${
        !loginPage
          ? " lg:rounded-r-[6rem] lg:rounded-l-3xl    flex flex-col gap-2 justify-center items-center p-8 "
          : "  lg:rounded-l-[6rem] lg:rounded-r-3xl  flex flex-col gap-2 justify-center items-center p-8 "
      }`}
    >
      <b className="text-white lg:text-3xl font-bold">
        {loginPage ? "Hello, Friend!" : "Welcome Back!"}
      </b>
      <div className="flex justify-center text-center ">
        <p className="text-white text-[12px]">
          {loginPage
            ? "Register with your personal details to use all of site features"
            : "Enter your personal details to use all of site features "}
        </p>
      </div>
      <button
        onClick={() => HandlePage()}
        className="border-white text-white p-1 px-7 rounded-md border hover:bg-white hover:text-black uppercase font-semibold"
      >
        {loginPage ? "Sign Up" : "Sign In"}
      </button>
    </div>
  );
};

export default LoginSidePanel;
