import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/common/home";
import UserSignup from "./pages/user/userSignup/userSignup";
import UserLogin from "./pages/user/userLogin/userLogin";
import ModLogin from "./pages/moderator/modLogin/modLogin";
import DeliveryLogin from "./pages/delivery/deliveryLogin/deliveryLogin";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* common  */}
          <Route path="/" element={<Home />} />
          {/* users  */}
          <Route path="/user/signup" element={<UserSignup/>} />
          <Route path="/user/login" element={<UserLogin/>} />
          
          {/* moderators  */}
          <Route path="/mod/login" element={<ModLogin/>} />

          {/* delivery  */}
          <Route path="/delivery/login" element={<DeliveryLogin/>} />
          
          
          <Route path="/*" element={<h1> 404 </h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
