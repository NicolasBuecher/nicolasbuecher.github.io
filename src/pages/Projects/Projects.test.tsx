import { render, screen } from "@testing-library/react";
import Projects from "./Projects";

jest.mock("../../components/ProjectItem/ProjectItem");

describe("Projects", () => {

  it("should render a projects page", () => {
    render(<Projects />);
    expect(screen.getByTestId("projects")).toBeInTheDocument();
  });

});
