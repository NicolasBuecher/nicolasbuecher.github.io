import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import ProjectItem from "./ProjectItem";

describe("ProjectItem", () => {

  beforeEach(() => {
    // Wrap Navbar into BrowserRouter otherwise we get an error
    // See https://stackoverflow.com/a/72980233/5053300
    render(
      <BrowserRouter>
        <ProjectItem id={0} name="someName" image="someImage" />
      </BrowserRouter>
    );
  });

  it("should display the name prop", () => {
    expect(screen.getByText("someName")).toBeInTheDocument();
  });

  it("should display the image prop", () => {
    expect(screen.getByTestId("projectItemBgImage")).toHaveStyle({ backgroundImage: "url(someImage)" });
  });

  describe("when an item is clicked", () => {

    it("should update the route", () => {
      user.click(screen.getByRole("button"));
      expect(global.window.location.href).toContain("/projects/0");
    });

  });

});
