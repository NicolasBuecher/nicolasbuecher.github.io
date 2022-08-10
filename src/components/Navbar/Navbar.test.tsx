import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

jest.mock("@mui/icons-material");

describe("Navbar", () => {

  beforeEach(() => {
    // Wrap Navbar into BrowserRouter otherwise we get an error
    // See https://stackoverflow.com/a/72980233/5053300
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  it("should not be expanded at first", () => {
    expect(screen.getByTestId("navbar")).toHaveAttribute("id", "close");
  });

  describe("when reorder icon is clicked", () => {

    beforeEach(() => {
      user.click(screen.getByRole("button"));
    });

    it("should open navbar", () => {
      expect(screen.getByTestId("navbar")).toHaveAttribute("id", "open");
    });

    it("should close navbar", () => {
      user.click(screen.getByRole("button"));
      expect(screen.getByTestId("navbar")).toHaveAttribute("id", "close");
    });

  });

  describe("when navbar is open and location has changed", () => {

    beforeEach(() => {
      user.click(screen.getByRole("button"));
      user.click(screen.getByRole("link", { name: "Projects" }));
    });

    it("should close the navbar", () => {
      expect(screen.getByTestId("navbar")).toHaveAttribute("id", "close");
    });

  });

});
