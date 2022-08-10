import { render, screen } from "@testing-library/react";
import App from "./App";

jest.mock("react-router-dom");

describe("App", () => {

  // This test exists only for coverage
  it("should render a single page application", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

});
