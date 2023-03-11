import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import { ControlApp } from "./SearchForm.mocks";
import SearchForm from "./SearchForm";

const mockOnSubmit = jest.fn();

const SearchFormFactory = async () => {
  const { getByTestId } = await render(
    <MemoryRouter initialEntries={["/test"]}>
      <SearchForm onSubmit={mockOnSubmit} />
      <ControlApp />
    </MemoryRouter>
  );
  return {
    searchForm: getByTestId("SearchForm"),
    controlApp: getByTestId("ControlApp"),
  };
};

describe("SearchForm Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    const { searchForm } = await SearchFormFactory();
    expect(searchForm).not.toBeEmptyDOMElement();
  });

  it("the form shold not submit with empty input", async () => {
    const { searchForm } = await SearchFormFactory();
    fireEvent.submit(searchForm);
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  it("the form shold submit with valid input", async () => {
    const { searchForm } = await SearchFormFactory();
    const input = searchForm.querySelector("input")!;
    fireEvent.change(input, { target: { value: "cat" } });
    fireEvent.submit(searchForm);
    expect(mockOnSubmit).toHaveBeenCalledWith("cat");
  });

  it("the input should be emty when the path is ['/']", async () => {
    const { searchForm, controlApp } = await SearchFormFactory();
    const input = searchForm.querySelector("input")!;

    fireEvent.change(input, {
      target: { value: "cat" },
    });

    act(() => {
      fireEvent.click(controlApp);
    });

    expect(input).toHaveValue("");
  });
});
