import { useState, ChangeEvent } from "react";

type Event = ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;

interface UseInputReturn<T> {
  value: T;
  onChange: (e: Event) => void;
  reset: () => void;
  setValue: (v: T) => void;
}

const useInput = <T,>(initialValue: T): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: Event) => setValue(e.target.value as unknown as T);
  const reset = () => setValue(initialValue);
  return {
    value,
    onChange: handleChange,
    reset,
    setValue,
  };
};

export default useInput;
