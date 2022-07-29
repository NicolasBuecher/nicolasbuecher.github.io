import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {

  beforeEach(() => {
    render(<App />);
  });

  it("should render a navbar and a footer", () => {
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("should render home page", () => {
    expect(screen.getAllByText("Home").length).toEqual(2);
  });

});
