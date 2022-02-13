import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Auth } from "./components/pages";
import Home from "./components/pages/home";
import RegisterForm from "./modules/registerForm";

function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/register" element={<RegisterForm />} />

          <Route path="/im" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
