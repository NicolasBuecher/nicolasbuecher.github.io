import { render, screen } from "@testing-library/react";
import GitHubIconButton from "./GitHubIconButton";


describe("GitHubIconButton", () => {

  // Jest limitation prevents Jest from detecting that location has changed
  // This test exists only for coverage
  it("should render a footer component", () => {
    render(<GitHubIconButton />);
    expect(screen.getByRole("link"))
      .toHaveAttribute("href", "https://github.com/NicolasBuecher/nicolasbuecher.github.io");
  });

});
