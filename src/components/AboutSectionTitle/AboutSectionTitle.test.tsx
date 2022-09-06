import { render, screen } from "@testing-library/react";
import AboutSectionTitle from "./AboutSectionTitle";

describe("AboutSectionTitle", () => {

  it("should pass the children prop", () => {
    render(<AboutSectionTitle>Test</AboutSectionTitle>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

});
