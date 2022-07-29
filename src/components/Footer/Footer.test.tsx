import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {

  it("should render 4 icons and a paragraph", () => {
    render(<Footer />);
    expect(screen.getAllByTestId(/Icon/i).length).toEqual(4);
    expect(screen.getByText("© 2022 nicolasbuecher.github.io")).toBeInTheDocument();
  });

});
