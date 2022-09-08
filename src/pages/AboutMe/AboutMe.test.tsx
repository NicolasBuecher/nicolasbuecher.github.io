import { render, screen } from "@testing-library/react";
import AboutMe from "./AboutMe";


jest.mock("../../components/AboutSectionTitle/AboutSectionTitle");
jest.mock("../../components/AboutSectionContent/AboutSectionContent");
jest.mock("../../components/DownloadButton/DownloadButton");

describe("AboutMe", () => {

  // This test exists only for coverage
  it("should render an about page", () => {
    render(<AboutMe />);
    expect(screen.getByTestId("about-me")).toBeInTheDocument();
  });

});
