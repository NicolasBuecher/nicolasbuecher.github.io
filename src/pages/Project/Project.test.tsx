import { render, screen } from "@testing-library/react";
import React from "react";
import Router from "react-router-dom";
import Project from "./Project";


// Mock useParams function
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams : jest.fn()
}));

// Mock ProjectList array
jest.mock("../../data/ProjectList.tsx", () => ([{
  id : 0,
  img : "imgTest",
  alt : "altTest",
  title : "titleTest",
  subtitle : "subtitleTest",
  description : ["descriptionTest"],
  date : "dateTest",
  link : "",
  owned : true,
  github : "githubTest",
  media : []
}, {
  id : 1,
  img : "imgTest_1",
  alt : "altTest_1",
  title : "titleTest_1",
  subtitle : "subtitleTest_1",
  description : ["descriptionTest_1"],
  date : "dateTest_1",
  link : "",
  owned : false,
  github : "githubTest_1",
  media : []
}]));

// Mock NotFound component
jest.mock("../NotFound/NotFound", () => () => <div data-testid="not-found" />);

const renderProject = (): void => {
  render(<Project />);
};

// // Prevent of logging expected thrown errors
// const expectToThrowSilently = (snapshot: string): void => {
//   // Remove error logs
//   // See https://github.com/facebook/react/issues/11098#issuecomment-523977830
//   const spy = jest.spyOn(console, "error");
//   spy.mockImplementation(undefined);

//   expect(renderProject).toThrowErrorMatchingInlineSnapshot(snapshot);

//   // Restore error logs
//   spy.mockRestore();
// };

describe("Project", () => {

  describe("when id param is `undefined`", () => {

    it("should display a 404 page", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: undefined });
      renderProject();
      expect(screen.getByTestId("not-found")).toBeInTheDocument();
    });

  });

  describe("when id param is empty", () => {

    it("should display a 404 page", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "" });
      renderProject();
      expect(screen.getByTestId("not-found")).toBeInTheDocument();
    });

  });

  describe("when id param is invalid", () => {

    it("should display a 404 page", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "001" });
      renderProject();
      expect(screen.getByTestId("not-found")).toBeInTheDocument();
    });

  });

  describe("when id param does not match any project", () => {

    it("should display a 404 page", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "2" });
      renderProject();
      expect(screen.getByTestId("not-found")).toBeInTheDocument();
    });

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

  describe("when project is owned", () => {

    it("should not display a disclaimer", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "0" });
      renderProject();
      expect(screen.queryByText("(Please note this project could be taken offline at any moment as I don't own it)")).not.toBeInTheDocument();
    });

  });

  describe("when project is not owned", () => {

    it("should display a disclaimer", () => {
      jest.spyOn(Router, "useParams").mockReturnValue({ id: "1" });
      renderProject();
      expect(screen.getByText("(Please note this project could be taken offline at any moment as I don't own it)")).toBeInTheDocument();
    });

  });

});
