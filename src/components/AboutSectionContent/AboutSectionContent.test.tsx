import { render, screen } from "@testing-library/react";
import AboutSectionContent from "./AboutSectionContent";

describe("AboutSectionContent", () => {

  it("should pass the children prop", () => {
    render(<AboutSectionContent>Test</AboutSectionContent>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  describe("when justify prop is true", () => {

    it("should justify the content", () => {
      render(<AboutSectionContent justify>Test</AboutSectionContent>);
      expect(screen.getByText("Test")).toHaveClass("MuiTypography-alignJustify");
    });

  });

});
