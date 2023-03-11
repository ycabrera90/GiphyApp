import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import BaseTemplate from "./BaseTemplate";

const BaseTemplateFactory = () => {
  render(<BaseTemplate sampleTextProp="This prop is only for test" />);
};

describe("BaseTemplate Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    await act(() => {
      BaseTemplateFactory();
    });
    expect(screen.getByTestId("BaseTemplate")).not.toBeEmptyDOMElement();
  });

  it("the component should be render with the correct props", async () => {
    await act(() => {
      BaseTemplateFactory();
    });

    const element = screen.getByText("This prop is only for test", {
      exact: false,
    });

    expect(element).toBeInTheDocument();
  });
});
