import "@testing-library/jest-dom";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FC } from "react";
import useInput from "./use-input";

const waitForATime = new Promise((resolve) => setTimeout(resolve, 1));

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

const useInputFactory = async ({
  validateResult,
}: {
  validateResult?: (value: string) => boolean;
}) => {
  const renderMethods = await render(
    <FakeComponent
      validateResult={validateResult ? validateResult : () => false}
    />
  );
  return {
    ...renderMethods,
    fakeForm: renderMethods.getByTestId("fakeForm"),
  };
};

describe("useInput Hook", () => {
  it("'value' should be updated when valueChangeHandler is fired", async () => {
    const typedText = "a value only for test";
    const { fakeForm } = await useInputFactory({});
    const input = fakeForm.querySelector("input")!;
    fireEvent.change(input, { target: { value: typedText } });
    expect(input.value).toBe(typedText);
  });

  it("'hasError' should be true when inputBlurHandler is fired and validateValue return false", async () => {
    const { fakeForm } = await useInputFactory({ validateResult: () => false });
    const input = fakeForm.querySelector("input")!;
    fireEvent.blur(input);
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
    ).toBe(true);
  });

  it("'hasError' should be false when inputBlurHandler is fired and validateValue return true", async () => {
    const { fakeForm } = await useInputFactory({ validateResult: () => true });
    const input = fakeForm.querySelector("input")!;
    fireEvent.blur(input);
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
    ).toBe(false);
  });

  it("'hasError' should be it last state when inputBlurHandler isnt fired", async () => {
    const { fakeForm } = await useInputFactory({
      validateResult: (value) => value !== "falseValue",
    });

    // condition 1
    const hasErrorLastStateCondition1 = JSON.parse(
      fakeForm.querySelector("label")!.textContent!
    ).hasError;
    fireEvent.change(fakeForm.querySelector("input")!, {
      target: { value: "falseValue" },
    });
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
    ).toBe(hasErrorLastStateCondition1);

    // condition 2
    const hasErrorLastStateCondition2 = JSON.parse(
      fakeForm.querySelector("label")!.textContent!
    ).hasError;
    fireEvent.change(fakeForm.querySelector("input")!, {
      target: { value: "trueValue" },
    });
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).hasError
    ).toBe(hasErrorLastStateCondition2);
  });

  it("'isValid' should be true when validateValue return true", async () => {
    const { fakeForm } = await useInputFactory({
      validateResult: () => true,
    });
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).isValid
    ).toBe(true);
  });

  it("'isValid' should be false when validateValue return false", async () => {
    const { fakeForm } = await useInputFactory({
      validateResult: () => false,
    });
    expect(
      JSON.parse(fakeForm.querySelector("label")!.textContent!).isValid
    ).toBe(false);
  });

  it("'value' should be '' when resetInput() is called", async () => {
    const { fakeForm } = await useInputFactory({
      validateResult: () => false,
    });

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

    expect(input.value).toBe("");
  });

  it("'value' should be 'value ' and after 1ms 'value' again, when inputKeyDownHandler is fired", async () => {
    const { fakeForm } = await useInputFactory({
      validateResult: () => false,
    });

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
