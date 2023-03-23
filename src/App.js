import { useState } from "react";
import AppRouter from "./router/AppRouter"
import { lightheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [themes, setThemes] = useState(lightheme);

  return (
    <ThemeProvider theme={themes}>
        <AppRouter/>
    </ThemeProvider>
  );
}

export default App;
