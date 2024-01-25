import { useState, ChangeEvent } from "react";

interface UseInputProps<T> {
  initialValue: T;
}

interface UseInputReturn<T> {
  value: T;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  reset: () => void;
}

const useInput = <T,>(initialValue: T): UseInputReturn<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(e.target.value as unknown as T);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

export default useInput;
