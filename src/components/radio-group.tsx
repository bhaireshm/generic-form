import { RadioGroup as MantineRadioGroup, Radio } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { useEffect, useState } from "react";

interface RadioGroupProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  options?: { value: string; label: string }[];
  url?: string;
}

const RadioGroup = <T,>({
  form,
  field,
  label,
  options,
  url = "http://localhost:3000/radio",
}: RadioGroupProps<T>) => {
  const [_options, setOptions] = useState(options);

  // alternate options
  // const mealOptions = [
  //   { value: "veg", label: "Vegetarian" },
  //   { value: "non-veg", label: "Non-Vegetarian" },
  // ];
  console.log("file: radio-group.tsx:41  useEffect  url", url);

  useEffect(() => {
    if (url)
      fetch(url)
        .then((r) => r.json())
        .then((resp) => {
          console.log("file: radio-group.tsx:34  .then  resp", resp);
          setOptions(() => {
            return [...resp];
          });

          // form.setFieldValue(field, resp);
        })
        .catch(console.error);
  }, [url]);

  return (
    <MantineRadioGroup label={label} {...form.getInputProps(field)}>
      {_options?.map((option) => (
        <Radio p={3} key={option.value} label={option.label} value={option.value} />
      ))}
    </MantineRadioGroup>
  );
};
export default RadioGroup;
