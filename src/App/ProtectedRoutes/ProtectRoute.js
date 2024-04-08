import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ Component }) => {
  const isSignedIn = useSelector((store) => store.auth.isSignedIn);
  return <div>{isSignedIn ? <Component /> : <Navigate to="/" />}</div>;
};

export default ProtectRoute;
