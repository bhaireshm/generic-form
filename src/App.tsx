import "@mantine/core/styles.css";

import { Box, MantineProvider } from "@mantine/core";
import GenericForm from "./components/form";

const App: React.FC = () => {
  return (
    <MantineProvider>
      <Box pr={20} pl={20} pt={10} pb={10}>
        <GenericForm />
      </Box>
    </MantineProvider>
  );
};

export default App;
