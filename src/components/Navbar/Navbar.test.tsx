import material from "@mui/material";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

// Mock useMediaQuery function
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useMediaQuery : jest.fn()
}));

describe("Navbar", () => {

  describe("when screen is too small", () => {

    beforeEach(() => {
      jest.spyOn(material, "useMediaQuery").mockReturnValue(true);

      // Wrap Navbar into BrowserRouter otherwise we get an error
      // See https://stackoverflow.com/a/72980233/5053300
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });

    it("should hide navigation links", () => {
      expect(screen.queryByTestId("navigation-links")).not.toBeInTheDocument();
    });

    it("should hide media icons", () => {
      expect(screen.queryByTestId("media-icons")).not.toBeInTheDocument();
    });

    it("should display a menu button", () => {
      expect(screen.getByTestId("main-menu-button")).toBeInTheDocument();
    });

    describe("when menu button is clicked", () => {

      it("should open menu", () => {
        user.click(screen.getByTestId("main-menu-button"));
        expect(screen.getByTestId("main-menu")).toBeInTheDocument();
      });

    });

  });

  describe("when screen is wider", () => {

    beforeEach(() => {
      jest.spyOn(material, "useMediaQuery").mockReturnValue(false);

      // Wrap Navbar into BrowserRouter otherwise we get an error
      // See https://stackoverflow.com/a/72980233/5053300
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });

    it("should hide menu button", () => {
      expect(screen.queryByTestId("main-menu-button")).not.toBeInTheDocument();
    });

    it("should display navigation links", () => {
      expect(screen.getByTestId("navigation-links")).toBeInTheDocument();
    });

    it("should display media icons", () => {
      expect(screen.getByTestId("media-icons")).toBeInTheDocument();
    });

  });

});
