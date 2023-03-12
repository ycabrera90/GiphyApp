import "@testing-library/jest-dom";
import MainHeader from "./MainHeader";
import { FC, SyntheticEvent } from "react";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
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

const MainHeaderFactory = () => {
  act(() => {
    render(
      <MemoryRouter initialEntries={["/test"]}>
        <MainHeader />
        <FakeComponent />
      </MemoryRouter>
    );
  });
};

describe("MainHeader Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  it("the component should be render with DOM content inside of it", async () => {
    MainHeaderFactory();

    await waitFor(() => {
      const mainHeader = screen.getByTestId("MainHeader");
      expect(mainHeader).not.toBeEmptyDOMElement();
    });
  });

  it("when do click on the logo the current path has to change to ('/')", async () => {
    MainHeaderFactory();

    act(() => {
      const mainHeader = screen.getByTestId("MainHeader");
      fireEvent.click(mainHeader.querySelector("section")!);
    });

    await waitFor(() => {
      expect(screen.getByTestId("pathname").textContent).toBe("/");
    });
  });

  it("the logo-icon should be rendered", async () => {
    MainHeaderFactory();

    await waitFor(() => {
      expect(screen.queryByAltText("logo-icon")).toBeInTheDocument();
    });
  });

  it("the logo-text should be rendered", async () => {
    MainHeaderFactory();

    await waitFor(() => {
      const mainHeader = screen.getByTestId("MainHeader");
      expect(mainHeader.querySelector("h1")).toBeInTheDocument();
    });
  });

  it("when the form is submitted the path has to change to /search/${text}", async () => {
    MainHeaderFactory();

    act(() => {
      const mainHeader = screen.getByTestId("MainHeader");
      fireEvent.submit(mainHeader.querySelector("form")!);
    });

    await waitFor(() => {
      expect(screen.getByTestId("pathname").textContent).toBe("/search/cat");
    });
  });
});
