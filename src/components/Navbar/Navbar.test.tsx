import useMediaQuery from "@mui/material/useMediaQuery";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";


/**
 * When `useMediaQuery` is imported as a named import in the file to test,
 * then we should mock it this way:
 *
 * jest.mock("@mui/material", () => ({
 *   ...jest.requireActual("@mui/material"),
 *   useMediaQuery : jest.fn()
 * }));
 *
 * Independently we can change the returned value like this:
 *
 * jest.spyOn(material, "useMediaQuery").mockReturnValue(true);
 *
 * Or the mock implementation like this:
 *
 * jest.spyOn(material, "useMediaQuery").mockImplementation(jest.fn());
 *
 *
 * When `useMediaQuery` is imported as a default import in the file to test,
 * then we should mock it this way:
 *
 * jest.mock("@mui/material/useMediaQuery", () => ({
 *   __esModule: true,
 *   default: jest.fn()
 * }));
 *
 * And then we can change the returned value like this:
 *
 * (useMediaQuery as jest.Mock).mockReturnValue(true);
 */

// Mock useMediaQuery function
jest.mock("@mui/material/useMediaQuery", () => ({
  __esModule : true,
  default : jest.fn()
}));

describe("Navbar", () => {

  describe("when screen is too small", () => {

    beforeEach(() => {
      (useMediaQuery as jest.Mock).mockReturnValue(true);

      // Wrap Navbar into BrowserRouter otherwise we get an error
      // See https://stackoverflow.com/a/72980233/5053300
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );
    });

    it("should hide navigation links", () => {
      expect(screen.queryByTestId("navlinks")).not.toBeInTheDocument();
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
      (useMediaQuery as jest.Mock).mockReturnValue(false);

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
      expect(screen.getByTestId("navlinks")).toBeInTheDocument();
    });

    it("should display media icons", () => {
      expect(screen.getByTestId("media-icons")).toBeInTheDocument();
    });

    describe("when the logo button is clicked", () => {

      it("should route to the home page", () => {
        user.click(screen.getByRole("link", { name: "Nicolas BUECHER" }));
        expect(global.window.location.href).toBe("http://localhost/");
      });

    });

    describe("when the home button is clicked", () => {

      it("should route to the home page", () => {
        user.click(screen.getByRole("link", { name: "HOME" }));
        expect(global.window.location.href).toBe("http://localhost/");
      });

    });

    describe("when the about button is clicked", () => {

      it("should route to the home page", () => {
        user.click(screen.getByRole("link", { name: "ABOUT ME" }));
        expect(global.window.location.href).toContain("/about");
      });

    });

    describe("when the projects button is clicked", () => {

      it("should route to the home page", () => {
        user.click(screen.getByRole("link", { name: "PROJECTS" }));
        expect(global.window.location.href).toContain("/projects");
      });

    });

    describe("when the contact button is clicked", () => {

      it("should route to the home page", () => {
        user.click(screen.getByRole("link", { name: "CONTACT" }));
        expect(global.window.location.href).toContain("/contact");
      });

    });

  });

});
