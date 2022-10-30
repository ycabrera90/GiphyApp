import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BaseTemplate from './BaseTemplate';

describe('BaseTemplate Component', () => {
  it("the component should be render with DOM content inside of it", async () => {
    await render(<BaseTemplate sampleTextProp='This prop is only for test'/>);
    expect(screen.getByTestId("BaseTemplate")).not.toBeEmptyDOMElement();
  });

  it("the component should be render with the correct props", () => {
    render(<BaseTemplate sampleTextProp="This prop is only for test" />);
    const element = screen.getByText("This prop is only for test", {
      exact: false,
    });
    expect(element).toBeInTheDocument();
  });
});
