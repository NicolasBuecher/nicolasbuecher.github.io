import { render, screen } from "@testing-library/react";
import Projects from "./Projects";


jest.mock("./ProjectList", () => ([{
  id : 0,
  img : "Test",
  alt : "Test",
  title : "Test",
  subtitle : "Test"
}, {
  id : 1,
  img : "Test",
  alt : "Test",
  title : "Test",
  subtitle : "Test"
}]));

jest.mock("../../components/ProjectCard/ProjectCard", () => ({ img, alt, title, subtitle }: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}) => (
  <p>
    {img}
    {alt}
    {title}
    {subtitle}
  </p>
));

describe("Projects", () => {

  it("should render a list of projects", () => {
    render(<Projects />);
    expect(screen.getAllByText("TestTestTestTest").length).toEqual(2);
  });

});
