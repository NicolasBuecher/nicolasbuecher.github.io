import { render, screen } from "@testing-library/react";
import App from "./App";


jest.mock("./components/Navbar/Navbar");
jest.mock("./components/Footer/Footer");
jest.mock("./pages/Home/Home");

describe("App", () => {

  // This test exists only for coverage
  it("should render a single page application", () => {
    render(<App />);
    expect(screen.getByTestId("app")).toBeInTheDocument();
  });

});
