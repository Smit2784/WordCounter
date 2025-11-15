import React, { useState } from "react";

export default function Textform(props) {
  const handleUppercase = () => {
    const Newtext = Text.toUpperCase();
    setText(Newtext);
    props.showalert("Coverted in UpperCase", "success");
  };
  const handleLowercase = () => {
    const Newtext = Text.toLocaleLowerCase();
    setText(Newtext);
    props.showalert("Coverted in LowerCase", "success");
  };
  const handleClear = () => {
    const Newtext = "";
    setText(Newtext);
    props.showalert("Text Cleared", "success");
  };

  const handlechange = (e) => {
    setText(e.target.value);
  };

  const [Text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label
            htmlFor="Mybox"
            className={`form-label text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <h1>{props.hadings}</h1>
          </label>
          <textarea
            className={`form-control text-${
              props.c === "dark" ? "light" : "dark"
            }`}
            value={Text}
            placeholder="Enter Your text here..."
            onChange={handlechange}
            id="Mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
          <button className="btn btn-primary my-4" onClick={handleUppercase}>
            Convert to uppercase
          </button>
          <button
            className="btn btn-primary my-4 mx-4"
            onClick={handleLowercase}
          >
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-4" onClick={handleClear}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
        <h1>Your Text Summary</h1>
        <p>
          {Text.trim() === "" ? 0 : Text.trim().split(/\s+/).length} Words and{" "}
          {Text.trim() === "" ? 0 : Text.length} Charactors
        </p>
        <p>
          {Text.trim() === "" ? 0 : 0.008 * Text.split(" ").length} Minutes to
          Read
        </p>
        <h2>Preview</h2>
        <p>{Text}</p>
      </div>
    </>
  );
}
