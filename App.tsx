import { ThemeProvider } from "styled-components/native";
import { Groups } from "./src/screens/Groups";

import theme from "./src/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}