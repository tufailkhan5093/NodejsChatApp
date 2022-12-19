import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const getLoginStatus = () => {
  const items = localStorage.getItem("loginstatus");
  return items;
};

export const LoginCheck = () => {
  console.log(getLoginStatus());
  const navigate = useNavigate();
  useEffect(() => {
    if (getLoginStatus() === null) {
      navigate("/login");
    }
  });
};

export const setLoginStatus = (data) => {
  try {
    localStorage.setItem("loginstatus", data);
  } catch (err) {
    console.log(err);
  }
};
