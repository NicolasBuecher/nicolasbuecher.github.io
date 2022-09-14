import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";


describe("ProjectCard", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProjectCard id={0} img="imgTest" alt="altTest" title="titleTest" subtitle="subtitleTest" />
      </BrowserRouter>
    );
  });

  it("should pass the img prop", () => {
    expect(screen.getByRole("img")).toHaveAttribute("src", "imgTest");
  });

  it("should pass the alt prop", () => {
    expect(screen.getByAltText("altTest")).toBeInTheDocument();
  });

  it("should pass the title prop", () => {
    expect(screen.getByText("titleTest")).toBeInTheDocument();
  });

  it("should pass the subtitle prop", () => {
    expect(screen.getByText("subtitleTest")).toBeInTheDocument();
  });

  describe("when the project card is clicked", () => {

    it("should route to the project page", () => {
      user.click(screen.getByRole("link"));
      expect(global.window.location.href).toContain("/projects/0");
    });

  });

});
