import "@testing-library/jest-dom";
import SearchForm from "./SearchForm";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { FakeComponent } from "./SearchForm.mocks";

const mockOnSubmit = jest.fn();

const SearchFormFactory = () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <SearchForm onSubmit={mockOnSubmit} />
        <FakeComponent />
      </MemoryRouter>
    );
  });
};

describe("SearchForm Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    SearchFormFactory();

    await waitFor(() => {
      const searchForm = document.querySelector("form")!;
      expect(searchForm).not.toBeEmptyDOMElement();
    });
  });

  it("the form shold not submit with empty input", async () => {
    SearchFormFactory();

    act(() => {
      const searchForm = document.querySelector("form")!;
      fireEvent.submit(searchForm);
    });

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it("the form shold submit with valid input", async () => {
    SearchFormFactory();

    act(() => {
      const searchForm = document.querySelector("form")!;
      const input = searchForm.querySelector("input")!;
      fireEvent.change(input, { target: { value: "cat" } });
      fireEvent.submit(searchForm);
    });

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith("cat");
    });
  });

  it("the input should be emty when the path is ['/']", async () => {
    SearchFormFactory();

    act(() => {
      const searchForm = document.querySelector("form")!;
      fireEvent.change(searchForm.querySelector("input")!, {
        target: { value: "cat" },
      });
    });

    act(() => {
      fireEvent.click(screen.getByTestId("FakeComponent"));
    });

    await waitFor(
      () => {
        const searchForm = document.querySelector("form")!;
        expect(searchForm.querySelector("input")!).toHaveValue("");
      },
      { timeout: 10000 }
    );
  });
});
