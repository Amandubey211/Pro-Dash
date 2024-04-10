import React from "react";
import { useSelector } from "react-redux";
import useGetServerInfo from "../../Hooks/CustomAuthHooks/useGetServerInfo";
import { FcApproval } from "react-icons/fc";
import { ImSpinner2 } from "react-icons/im";
const LoginSidePanel = ({ loginPage, HandlePage }) => {
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );

  const { loading, serverRunning } = useGetServerInfo();
  return (
    <div
      style={{ backgroundColor: currentPalette.primary }}
      className={`${
        !loginPage
          ? " lg:rounded-r-[6rem] lg:rounded-l-3xl rounded-b-2xl    flex flex-col gap-5 justify-center items-center p-5 "
          : "  lg:rounded-l-[6rem] lg:rounded-r-3xl rounded-b-2xl   flex flex-col gap-5 justify-center items-center p-5 "
      } relative pb-9 lg:pb-2`}
    >
      <b className="text-white lg:text-3xl font-bold">
        {loginPage ? "Hello, Friend!" : "Welcome Back!"}
      </b>
      <div className="flex justify-center text-center ">
        <p className="text-white text-xs">
          {loginPage
            ? "Register with your personal details to use all of site features"
            : "Enter your personal details to use all of site features "}
        </p>
      </div>
      <button
        title={loginPage ? "Sign Up" : "Sign In"}
        onClick={() => HandlePage()}
        className="border-white text-white p-1 px-7 rounded-md border hover:bg-white hover:text-black uppercase font-semibold"
      >
        {loginPage ? "Sign Up" : "Sign In"}
      </button>

      <div className="absolute bottom-0 right-0 mr-4 mb-4">
        {!serverRunning ? (
          <div className="flex items-center gap-1  ">
            <span className="text-white text-xs  ">Server staring</span>
            <ImSpinner2 className="animate-spin text-white" />
          </div>
        ) : (
          <div className="flex items-center gap-1  ">
            <span className="text-white ">Server </span>
            <FcApproval className="text-md lg:text-xl mt-1" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSidePanel;
