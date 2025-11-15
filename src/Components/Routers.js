import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";

import Textform from "./Textform";

export default function Routers(props) {
  console.log("PROPS", props);
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route
        path="/"
        element={
          <Textform
            hadings="Enter text here ...."
            mode={props.mode}
            showalert={props.showalert}
          />
        }
      />
    </Routes>
  );
}
