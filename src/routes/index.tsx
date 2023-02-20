import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "../pages/home/homepage";

const index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default index;
