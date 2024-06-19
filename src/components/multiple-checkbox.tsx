import {
  Group,
  Checkbox as MantineCheckbox,
  CheckboxProps as MantineCheckboxProps,
} from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface MultipleCheckboxProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  options: { value: string; label: string }[];
  props?: MantineCheckboxProps;
}

const MultipleCheckbox = <T,>({ form, field, label, options, props }: MultipleCheckboxProps<T>) => {
  return (
    <div>
      <label>{label}</label>
      <Group mt="xs">
        {options.map((option) => (
          <MantineCheckbox
            key={option.value}
            label={option.label}
            value={option.value}
            {...props}
            {...form.getInputProps(field)}
          />
        ))}
      </Group>
    </div>
  );
};

export default MultipleCheckbox;
