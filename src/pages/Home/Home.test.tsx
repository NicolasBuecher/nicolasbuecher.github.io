import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Home", () => {

  it("should render a heading, 3 icons and a list", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { name: "Hi, My name is Nicolas" })).toBeInTheDocument();
    expect(screen.getAllByTestId(/Icon/i).length).toEqual(3);
    expect(screen.getAllByRole("listitem").length).toEqual(3);
  });

});
