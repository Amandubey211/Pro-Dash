import { Button, Input } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "./PasswordInput";
import { NavLink } from "react-router-dom";
import LoginInfoModal from "./LoginInfoModal";
import { LoginOptions } from "../../Data/LoginData/LoginOption";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import useSignUp from "../../Hooks/CustomAuthHooks/useSignUp";
import useSignIn from "../../Hooks/CustomAuthHooks/useSignIn";
const Form = ({
  email,
  setEmail,
  password,
  setPassword,
  userName,
  setUserName,
  handleClearForm,
}) => {
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  const signUpLoading = useSelector((store) => store.auth.signUpLoading);
  const signInLoading = useSelector((store) => store.auth.signInLoading);
  const isLoginPage = useSelector((store) => store.auth.isLoginPage);
  const currentPalette = useSelector(
    (state) => state.themes.palettes[state.themes.currentPalette]
  );
  const HandlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginPage) {
        signIn(email, password);
      } else {
        signUp(userName, email, password);
      }
    } catch (error) {
      toast.error("something went wrong", { position: "bottom-left" });
    } finally {
      handleClearForm();
    }
  };
  return (
    <div
      className={`${
        !isLoginPage
          ? "flex py-5 px-3 flex-col  gap-2 items-center justify-center lg:order-2"
          : "flex py-5 px-3 flex-col  gap-2 items-center justify-center "
      }`}
    >
      <h1 className="lg:text-3xl sm:text-xl font-bold">
        {isLoginPage ? "Sign in" : "Create Account"}
      </h1>
      <div className="Login Options  p-1 flex gap-1 justify-center">
        {LoginOptions?.map((data) => {
          return (
            <span
              onClick={() =>
                toast.success("this feature will be added soon", {
                  position: "bottom-left",
                })
              }
              key={data.Name}
              className="p-2 hover:cursor-pointer  border-black border-[1px] rounded-md shadow-lg "
            >
              {data.Logo}
            </span>
          );
        })}
      </div>
      <div className="flex gap-1 justify-center items-center">
        <p className="text-xs capitalize">
          {isLoginPage
            ? "sign in with your email and password"
            : "Create your email and password"}
        </p>
        <LoginInfoModal loginPage={isLoginPage} />
      </div>
      <form onSubmit={HandleSubmit} className="flex flex-col my-3 gap-2">
        {!isLoginPage && (
          <Input
            name="UserName"
            focusBorderColor={currentPalette.primary}
            variant="filled"
            value={userName}
            autoComplete="off"
            onChange={(e) => setUserName(e.target.value)}
            placeholder="User Name"
          />
        )}
        <Input
          name="Email"
          variant="filled"
          focusBorderColor={currentPalette.primary}
          errorBorderColor="crimson"
          value={email}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <PasswordInput
          onPasswordChange={HandlePasswordChange}
          passwordValue={password}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            title="subbmit"
            className="uppercase"
            onClick={HandleSubmit}
            isLoading={signUpLoading || signInLoading}
            loadingText={isLoginPage ? "verifying" : "Siginning Up"}
            colorScheme={currentPalette.colorScheme}
          >
            {isLoginPage ? "Sign In" : " Sign Up"}
          </Button>
        </div>

        <NavLink
          title="forget password"
          onClick={() =>
            toast.success("will be adding soon", { position: "bottom-left" })
          }
          className="text-center mt-3 hover:underline hover:text-blue-500 text-xs"
        >
          Forget your Password?
        </NavLink>
      </form>
    </div>
  );
};
export default Form;
