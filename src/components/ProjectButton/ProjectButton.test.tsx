import { render, screen } from "@testing-library/react";
import ProjectButton from "./ProjectButton";


describe("ProjectButton", () => {

  it("should pass the children prop", () => {
    render(<ProjectButton startIcon={<div />}>Test</ProjectButton>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("shouls display the startIcon prop", () => {
    render(<ProjectButton startIcon={<p>StartIconTest</p>}>Test</ProjectButton>);
    expect(screen.getByText("StartIconTest")).toBeInTheDocument();
  });

  describe("when href prop is not provided", () => {

    it("should disable the button", () => {
      render(<ProjectButton startIcon={<div />}>Test</ProjectButton>);
      expect(screen.getByRole("button")).toHaveClass("Mui-disabled");
    });

  });

});
