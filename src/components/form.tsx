import { Box, Button, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import Checkbox from "./checkbox";
import FileUpload from "./file-upload";
import Input from "./input";
import MultipleCheckbox from "./multiple-checkbox";
import RadioGroup from "./radio-group";

interface FormValues {
  mealOptions: string;
  difficult: string;
  profile: File | null;
  name: string;
  terms: boolean;
}

const GenericForm: React.FC = () => {
  const form = useForm<FormValues>({
    // mode: "uncontrolled", // https://mantine.dev/form/uncontrolled/#controlled-mode
    initialValues: {
      mealOptions: "",
      difficult: "",
      profile: null,
      name: "",
      terms: false,
    },
    validate: {
      mealOptions: (value) => (value ? null : "Meal option is required"),
      profile: (value) => (value ? null : "Profile is required"),
      name: (value) => (value ? null : "Name is required"),
      difficult: (value) => (value ? null : "Difficulty level is required"),
    },
  });


  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  const difficultOptions = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Box
        maw={400}
        mx="auto"
        // w={{ base: 200, sm: 400, lg: 500 }}
        py={{ base: "xs", sm: "md", lg: "xl" }}
      >
        <Text>Generic Form</Text>

        <Input props={{ placeholder: "Enter your name" }} form={form} field="name" label="Name" />
        <RadioGroup form={form} field="mealOptions" label="Meal Options"/>

        <MultipleCheckbox
          form={form}
          field="difficult"
          label="Difficult"
          options={difficultOptions}
        />

        <FileUpload
          form={form}
          field="profile"
          label="Profile"
          props={{ placeholder: "Upload file" }}
        />

        <Checkbox form={form} field="terms" label="Terms & Condition" />

        <Button my={5} type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default GenericForm;
