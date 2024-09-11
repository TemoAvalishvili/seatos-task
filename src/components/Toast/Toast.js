import React from "react";
import "./Toast.css";

const Toast = ({ toast }) => {
  return (
    <div className={`toast ${toast.status}`}>
      <h4>{toast.title}</h4>
      <p>{toast.message}</p>
    </div>
  );
};

export default Toast;
