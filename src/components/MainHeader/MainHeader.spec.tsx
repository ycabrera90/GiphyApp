import "@testing-library/jest-dom";
import { FC, SyntheticEvent } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import MainHeader from "./MainHeader";
import { MemoryRouter, useLocation } from "react-router-dom";

const SearchForm: FC<{ onSubmit: (searchText: string) => void }> = ({
  onSubmit,
}) => {
  const onSubmitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit("cat");
  };
  return <form onSubmit={onSubmitHandler}></form>;
};

const FakeComponent: FC = () => {
  const location = useLocation();
  return (
    <div>
      <p data-testid="pathname">{location.pathname}</p>
    </div>
  );
};

jest.mock("../SearchForm/SearchForm", () => SearchForm);

const MainHeaderFactory = async () => {
  const renderMethods = await render(
    <MemoryRouter initialEntries={["/test"]}>
      <MainHeader />
      <FakeComponent />
    </MemoryRouter>
  );
  return {
    ...renderMethods,
    mainHeader: renderMethods.getByTestId("MainHeader"),
  };
};

describe("MainHeader Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("the component should be render with DOM content inside of it", async () => {
    const { mainHeader } = await MainHeaderFactory();
    expect(mainHeader).not.toBeEmptyDOMElement();
  });

  it("when do click on the logo the current path has to change to ('/')", async () => {
    const { mainHeader, getByTestId } = await MainHeaderFactory();
    fireEvent.click(mainHeader.querySelector("section")!);
    expect(getByTestId("pathname").textContent).toBe("/");
  });

  it("the logo-icon should be rendered", async () => {
    const { queryByAltText } = await MainHeaderFactory();
    expect(queryByAltText("logo-icon")).toBeInTheDocument();
  });

  it("the logo-text should be rendered", async () => {
    const { mainHeader } = await MainHeaderFactory();
    expect(mainHeader.querySelector("h1")).toBeInTheDocument();
  });

  it("when the form is submitted the path has to change to /search/${text}", async () => {
    const { mainHeader, getByTestId } = await MainHeaderFactory();
    fireEvent.submit(mainHeader.querySelector("form")!);
    expect(getByTestId("pathname").textContent).toBe("/search/cat");
  });
});
