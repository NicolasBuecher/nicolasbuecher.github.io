import React from "react";
import ReactDOM from "react-dom";
import Navbar from "../../src/components/Navbar";

describe("Navbar component", () => {

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar />, div);
  });

});
