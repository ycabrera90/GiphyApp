import { useState } from 'react';

interface IEvent {
  target: HTMLInputElement | HTMLTextAreaElement;
  key?: string;
}

const useInput = (validateValue: (value: string) => boolean) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event: IEvent) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event: IEvent) => {
    setIsTouched(true);
  };

  // with these lines I listen the autofill event and write some space for avoid the prestyled by default
  const inputKeyDownHandler = (event: any) => {
    if (event.key === 'Unidentified') {
      setTimeout(() => {
        setEnteredValue(`${event.target.value} `);
        setTimeout(() => {
          setEnteredValue((lastValue) => lastValue.trim());
        }, 1);
      }, 1);
    }
  };

  const resetInput = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    resetInput,
    inputKeyDownHandler,
  };
};

export default useInput;
