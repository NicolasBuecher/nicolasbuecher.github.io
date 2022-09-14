import { render, screen } from "@testing-library/react";
import Router from "react-router-dom";
import Project from "./Project";


// Mock useParams function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams : jest.fn()
}));

// Mock ProjectList array
jest.mock("../../pages/Projects/ProjectList.tsx", () => ([{
  id : 0,
  img : "imgTest",
  alt : "altTest",
  title : "titleTest",
  subtitle : "subtitleTest",
  description : ["descriptionTest"],
  date : "dateTest",
  link : "",
  owned : false,
  github : "githubTest",
  media : []
}]));

const renderProject = (): void => {
  render(<Project />);
};

// Prevent of logging expected thrown errors
const expectToThrowSilently = (snapshot: string): void => {
  // Remove error logs
  // See https://github.com/facebook/react/issues/11098#issuecomment-523977830
  const spy = jest.spyOn(console, "error");
  spy.mockImplementation(undefined);

  expect(renderProject).toThrowErrorMatchingInlineSnapshot(snapshot);

  // Restore error logs
  spy.mockRestore();
};

describe("Project", () => {

  it("should throw if id param is `undefined`", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: undefined });
    expectToThrowSilently("\"No project id.\"");
  });

  it("should throw if id param is empty", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "" });
    expectToThrowSilently("\"No project id.\"");
  });

  it("should throw if id param is invalid", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "001" });
    expectToThrowSilently("\"Invalid project id.\"");
  });

  it("should throw if id param does not match any project", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "2" });
    expectToThrowSilently("\"Project ID does not match any project.\"");
  });

  it("should display project title matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProject();
    expect(screen.getByText("titleTest")).toBeInTheDocument();
  });

  it("should display project subtitle matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProject();
    expect(screen.getByText("subtitleTest")).toBeInTheDocument();
  });

  it("should display project image matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProject();
    expect(screen.getByAltText("altTest")).toBeInTheDocument();
  });

  it("should display project launch date matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProject();
    expect(screen.getByText("Launched in dateTest.")).toBeInTheDocument();
  });

  it("should display project description matching id param", () => {
    jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
    renderProject();
    expect(screen.getByText("descriptionTest")).toBeInTheDocument();
  });

  describe("when project link is not provided", () => {

    it("should disable the link button", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
      renderProject();
      expect(screen.getByRole("button", { name: "Link to the project" })).toHaveClass("Mui-disabled");
    });

  });

  describe("when project is not owned", () => {

    it("should display a disclaimer", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
      renderProject();
      expect(screen.getByText("(Please note this project could be taken offline at any moment as I don't own it)")).toBeInTheDocument();
    });

  });

  describe("when project github link is provided", () => {

    it("should display a github icon button", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
      renderProject();
      expect(screen.getByRole("link", { name: "GitHubIconButton" })).toBeInTheDocument();
    });

  });

});
