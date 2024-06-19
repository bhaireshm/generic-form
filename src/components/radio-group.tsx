import { RadioGroup as MantineRadioGroup, Radio } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useEffect, useState } from "react";

interface RadioGroupProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  options?: { value: string; label: string }[];
  // url?: string;
}

const RadioGroup = <T,>({ form, field, label, options }: RadioGroupProps<T>) => {
  const [_options, setOptions] = useState(options);

  useEffect(() => {
    fetch("http://localhost:3000/radio")
      .then((r) => r.json())
      .then((resp) => {
        console.log("file: radio-group.tsx:34  .then  resp", resp);
        setOptions(() => {
          return [...resp];
        });
      })
      .catch(console.error);
  }, []);

  return (
    <MantineRadioGroup label={label} {...form.getInputProps(field)}>
      {_options?.map((option) => (
        <Radio p={3} key={option.value} label={option.label} value={option.value} />
      ))}
    </MantineRadioGroup>
  );
};
export default RadioGroup;
