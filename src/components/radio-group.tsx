import { RadioGroup as MantineRadioGroup, Radio } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface RadioGroupProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  options: { value: string; label: string }[];
}

const RadioGroup = <T,>({ form, field, label, options }: RadioGroupProps<T>) => {
  return (
    <MantineRadioGroup label={label} {...form.getInputProps(field)}>
      {options.map((option) => (
        <Radio p={3} key={option.value} label={option.label} value={option.value} />
      ))}
    </MantineRadioGroup>
  );
};
export default RadioGroup;
