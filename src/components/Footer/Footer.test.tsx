import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

jest.mock("@mui/icons-material");

describe("Footer", () => {

  // This test exists only for coverage
  it("should render a footer component", () => {
    render(<Footer />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

});
