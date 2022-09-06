import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {

  // This test exists only for coverage
  it("should render a home page", () => {
    render(<Banner />);
    expect(screen.getByTestId("banner")).toBeInTheDocument();
  });

});
