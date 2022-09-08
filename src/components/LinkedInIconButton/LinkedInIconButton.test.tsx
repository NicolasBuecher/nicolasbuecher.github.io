import { render, screen } from "@testing-library/react";
import LinkedInIconButton from "./LinkedInIconButton";


describe("LinkedInIconButton", () => {

  // Jest limitation prevents Jest from detecting that location has changed
  // This test exists only for coverage
  it("should render a footer component", () => {
    render(<LinkedInIconButton />);
    expect(screen.getByRole("link"))
      .toHaveAttribute("href", "https://www.linkedin.com/in/nicolas-buecher-03636b10a/");
  });

});
