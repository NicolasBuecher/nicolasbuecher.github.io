import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProjectCard from "./ProjectCard";


describe("ProjectCard", () => {

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ProjectCard img="imgTest" alt="altTest" title="titleTest" subtitle="subtitleTest" />
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

});
