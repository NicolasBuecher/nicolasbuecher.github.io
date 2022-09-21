import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { act, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Contact from "./Contact";


const successResponseStatus: EmailJSResponseStatus = {
  text : "test",
  status : 200
};

describe("Contact", () => {

  describe("when submit form button is clicked", () => {

    it("should send an email", async () => {
      const promise = Promise.resolve(successResponseStatus);
      const sendFormMock = jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

      render(<Contact />);
      user.click(screen.getByRole("button", { name: "Send" }));

      expect(sendFormMock).toHaveBeenCalled();

      // This prevents awful act warning
      // act warning happens because setState is called when sendForm has resolved but we don't wait for it
      await act(async () => {
        await promise;
      });
    });

    describe("when email has been successfully sent", () => {

      it("should display a success alert", async () => {
        const promise = Promise.resolve(successResponseStatus);
        jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

        render(<Contact />);
        user.click(screen.getByRole("button", { name: "Send" }));

        // `waitFor` replaces the `await promise` needed in the previous test
        await waitFor(() => expect(screen.getByTestId("success-alert")).not.toHaveClass("MuiCollapse-hidden"));
      });

      describe("when alert close button is clicked", () => {

        it("should close the alert", async () => {
          const promise = Promise.resolve(successResponseStatus);
          jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

          render(<Contact />);
          user.click(screen.getByRole("button", { name: "Send" }));

          await act(async () => {
            await promise;
          });

          user.click(screen.getByRole("button", { name: "Close" }));

          // Before the Collpase element gets the MuiCollapse-hidden class there's 300ms of animation going on
          // That's why we need `waitFor` async function here
          await waitFor(() => expect(screen.queryByTestId("success-alert")).toHaveClass("MuiCollapse-hidden"));
        });

      });

    });

    describe("when email has not been sent", () => {

      it("should display an error alert", async () => {
        const promise = Promise.reject();
        jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

        render(<Contact />);
        user.click(screen.getByRole("button", { name: "Send" }));

        // `waitFor` replaces the `await promise` needed in the previous test
        await waitFor(() => expect(screen.getByTestId("error-alert")).not.toHaveClass("MuiCollapse-hidden"));
      });

      describe("when alert close button is clicked", () => {

        it("should close the alert", async () => {
          const promise = Promise.resolve(successResponseStatus);
          jest.spyOn(emailjs, "sendForm").mockImplementation(jest.fn(() => promise));

          render(<Contact />);
          user.click(screen.getByRole("button", { name: "Send" }));

          await act(async () => {
            await promise;
          });

          user.click(screen.getByRole("button", { name: "Close" }));

          // Before the Collpase element gets the MuiCollapse-hidden class there's 300ms of animation going on
          // That's why we need `waitFor` async function here
          await waitFor(() => expect(screen.queryByTestId("error-alert")).toHaveClass("MuiCollapse-hidden"));
        });

      });

    });

  });

});
