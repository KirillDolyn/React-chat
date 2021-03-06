import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm from "../../../modules/loginForm/components/LoginForm";

import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Auth;
