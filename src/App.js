import { ColorModeContext, useMode} from "./them";
import { CssBaseline, ThemeProvider} from "@mui/material";
import Topbar from "./scenes/global/Topbar";

function App() {
  const [theme, colormode] = useMode();

  return (
      <ColorModeContext.Provider value={colormode}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="app">
            <main className="content">
              <Topbar/>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
