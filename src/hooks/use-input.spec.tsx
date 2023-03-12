import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FC } from "react";
import useInput from "./use-input";

const FakeComponent: FC<{ validateResult: (value: string) => boolean }> = ({
  validateResult,
}) => {
  const {
    value,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
    hasError,
    inputKeyDownHandler,
    isValid,
  } = useInput(validateResult);

  return (
    <form
      data-testid="fakeForm"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBlurHandler}
        onKeyDown={inputKeyDownHandler}
      />
      <button onClick={() => resetInput()}>Reset</button>
      <label>{`{"hasError": ${hasError}, "isValid": ${isValid}}`}</label>
    </form>
  );
};

const useInputFactory = ({
  validateResult,
}: {
  validateResult?: (value: string) => boolean;
}) => {
  act(() => {
    render(
      <FakeComponent
        validateResult={validateResult ? validateResult : () => false}
      />
    );
  });
};

describe("useInput Hook", () => {
  it("'value' should be updated when valueChangeHandler is fired", async () => {
    useInputFactory({});

    const typedText = "a value only for test";
    const fakeForm = screen.getByTestId("fakeForm");
    const input = fakeForm.querySelector("input")!;

    act(() => {
      fireEvent.change(input, { target: { value: typedText } });
    });

    waitFor(() => {
      expect(input.value).toBe(typedText);
    });
  });

  it("'hasError' should be true when inputBlurHandler is fired and validateValue return false", async () => {
    useInputFactory({ validateResult: () => false });
    
    const fakeForm = screen.getByTestId("fakeForm");
    const input = fakeForm.querySelector("input")!;

    act(() => {
      fireEvent.blur(input);
    });

    waitFor(() => {
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
      ).toBe(true);
    });
  });

  it("'hasError' should be false when inputBlurHandler is fired and validateValue return true", async () => {
    useInputFactory({ validateResult: () => true });

    const fakeForm = screen.getByTestId("fakeForm");
    const input = fakeForm.querySelector("input")!;

    act(() => {
      fireEvent.blur(input);
    });

    waitFor(() => {
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
      ).toBe(false);
    });
  });

  it("'hasError' should be it last state when inputBlurHandler isnt fired", async () => {
    useInputFactory({
      validateResult: (value) => value !== "falseValue",
    });

    const fakeForm = screen.getByTestId("fakeForm");

    act(() => {
      fireEvent.change(fakeForm.querySelector("input")!, {
        target: { value: "falseValue" },
      });
    });

    // condition 1
    await waitFor(() => {
      const hasErrorLastStateCondition1 = JSON.parse(
        fakeForm.querySelector("label")!.textContent!
      ).hasError;
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
      ).toBe(hasErrorLastStateCondition1);
    });

    act(() => {
      fireEvent.change(fakeForm.querySelector("input")!, {
        target: { value: "trueValue" },
      });
    });

    // condition 2
    await waitFor(() => {
      const hasErrorLastStateCondition2 = JSON.parse(
        fakeForm.querySelector("label")!.textContent!
      ).hasError;
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
      ).toBe(hasErrorLastStateCondition2);
    });
  });

  it("'isValid' should be true when validateValue return true", async () => {
    useInputFactory({
      validateResult: () => true,
    });

    await waitFor(() => {
      const fakeForm = screen.getByTestId("fakeForm");
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).isValid
      ).toBe(true);
    });
  });

  it("'isValid' should be false when validateValue return false", async () => {
    useInputFactory({
      validateResult: () => false,
    });

    await waitFor(() => {
      const fakeForm = screen.getByTestId("fakeForm");
      expect(
        JSON.parse(fakeForm.querySelector("label")!.textContent!).isValid
      ).toBe(false);
    });
  });

  it("'value' should be '' when resetInput() is called", async () => {
    useInputFactory({
      validateResult: () => false,
    });

    const fakeForm = screen.getByTestId("fakeForm");
    const input = fakeForm.querySelector("input")! as HTMLInputElement;
    const button = fakeForm.querySelector("button")! as HTMLButtonElement;

    // set some value to input
    act(() => {
      fireEvent.change(input, {
        target: { value: "someValue" },
      });
    });

    act(() => {
      fireEvent.click(button);
    });

    await waitFor(() => {
      expect(input.value).toBe("");
    });
  });

  it("'value' should be 'value ' and after 1ms 'value' again, when inputKeyDownHandler is fired", async () => {
    useInputFactory({
      validateResult: () => false,
    });

    const fakeForm = screen.getByTestId("fakeForm");
    const input = fakeForm.querySelector("input")! as HTMLInputElement;

    act(() => {
      fireEvent.keyDown(input, {
        key: "Unidentified",
        target: { value: "someValue" },
      });
    });

    await waitFor(() => {
      expect(input.value).toBe("someValue ");
    });

    await waitFor(() => {
      expect(input.value).toBe("someValue");
    });
  });
});
