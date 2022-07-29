import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar component", () => {

  it("renders Navbar component", () => {

    // Wrap Navbar into BrowserRouter otherwise we get an error
    // See https://stackoverflow.com/a/72980233/5053300
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByRole("button")).toBeDefined();
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("Projects")).toBeDefined();
    expect(screen.getByText("Experience")).toBeDefined();

  });

});
