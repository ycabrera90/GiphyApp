import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import BaseTemplate from "./BaseTemplate";

const BaseTemplateFactory = async () => {
  const renderMethods = await render(
    <BaseTemplate sampleTextProp="This prop is only for test" />
  );
  return {
    ...renderMethods,
    baseTemplate: renderMethods.getByTestId("BaseTemplate"),
  };
};

describe("BaseTemplate Component", () => {
  it("the component should be render with DOM content inside of it", async () => {
    const { baseTemplate } = await BaseTemplateFactory();
    expect(baseTemplate).not.toBeEmptyDOMElement();
  });

  it("the component should be render with the correct props", async () => {
    await BaseTemplateFactory();
    const element = screen.getByText("This prop is only for test", {
      exact: false,
    });
    expect(element).toBeInTheDocument();
  });
});
