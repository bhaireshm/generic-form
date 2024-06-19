import { Checkbox as MantineCheckbox, CheckboxProps as MantineCheckboxProps } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface CheckboxProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  props?: MantineCheckboxProps;
}

const Checkbox = <T,>({ form, field, label, props }: CheckboxProps<T>) => {
  return (
    <MantineCheckbox
      p={3}
      label={label}
      {...props}
      {...form.getInputProps(field as string, { type: "checkbox" })}
    />
  );
};

export default Checkbox;
