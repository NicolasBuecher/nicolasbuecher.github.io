import { render, screen } from "@testing-library/react";
import Experience from "./Experience";

jest.mock("react-vertical-timeline-component");

describe("Experience", () => {

  // This test exists only for coverage
  it("should render an experience page", () => {
    render(<Experience />);
    expect(screen.getByTestId("experience")).toBeInTheDocument();
  });

});
