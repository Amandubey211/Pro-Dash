import React, { useState } from "react";
import Layout from "../Layout/Layout";
import LoginSidePanel from "./LoginComponents/LoginSidePanel";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoginPage } from "../Redux/Slices/AuthSlice";
import Form from "./LoginComponents/Form";
import useAutomaticLogin from "../Hooks/CustomAuthHooks/useAutoLoginWithToken ";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const isLoginPage = useSelector((store) => store.auth.isLoginPage);
  const dispatch = useDispatch();
  useAutomaticLogin();
  const handleClearForm = () => {
    setEmail("");
    setPassword("");
    setUserName("");
  };

  const HandlePage = () => {
    handleClearForm();
    dispatch(setIsLoginPage(!isLoginPage));
  };

  return (
    <Layout title={isLoginPage ? "Login Page" : "Register Page"}>
      <div className="sm:h-full lg:h-screen flex justify-center items-center  ">
        <div className="lg:w-[65%] sm:w-[95%] lg:h-[87%]   border shadow-2xl grid lg:grid-cols-2  sm:grid-cols-1  gap-2 rounded-3xl ">
          <Form
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            userName={userName}
            setUserName={setUserName}
            handleClearForm={handleClearForm}
          />
          <LoginSidePanel loginPage={isLoginPage} HandlePage={HandlePage} />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
