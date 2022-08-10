import { render, screen } from "@testing-library/react";
import ProjectItem from "./ProjectItem";

describe("ProjectItem", () => {

  beforeEach(() => {
    render(<ProjectItem name="someName" image="someImage" />);
  });

  it("should display the name prop", () => {
    expect(screen.getByText("someName")).toBeInTheDocument();
  });

  it("should display the image prop", () => {
    expect(screen.getByTestId("projectItemBgImage")).toHaveStyle({ backgroundImage: "url(someImage)" });
  });

});
