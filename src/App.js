import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/common/home";
import UserSignup from "./pages/user/userSignup/userSignup";
import UserLogin from "./pages/user/userLogin/userLogin";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/signup" element={<UserSignup/>} />
          <Route path="/user/login" element={<UserLogin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
