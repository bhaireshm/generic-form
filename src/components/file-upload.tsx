import { FileInput as MantineFileInput, type FileInputProps } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";

interface FileUploadProps<T> {
  form: UseFormReturnType<T>;
  field: keyof T;
  label: string;
  props?: FileInputProps;
}

const FileUpload = <T,>({ form, field, label, props }: FileUploadProps<T>) => {
  return (
    <MantineFileInput p={3} label={label} {...props} {...form.getInputProps(field as string)} />
  );
};

export default FileUpload;
