import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("../../components/Banner/Banner");
jest.mock("../AboutMe/AboutMe");
jest.mock("../Projects/Projects");

describe("Home", () => {

  // This test exists only for coverage
  it("should render a home page", () => {
    render(<Home />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

});
