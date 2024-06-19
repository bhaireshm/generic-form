import { TextInput as MantineTextInput, TextInputProps } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface InputComponentProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  props?: TextInputProps;
}

const Input = <T,>({ form, field, label, props }: InputComponentProps<T>) => {
  return <MantineTextInput label={label} {...props} {...form.getInputProps(field)} />;
};

export default Input;
