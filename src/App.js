import { createTheme, ThemeProvider } from "@material-ui/core";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";

const theme = createTheme({

  typography: {
    useNextVariants: true,
    fontFamily: 'Poppins',
    fontWeightLight: 400,
    fontWeightRegular: 400,
    fontWeightMedium: 400,
    fontWeightBold: 400,
  },
  palette: {
    primary: {
      main: '#ef5350',
      light: '#ff867c',
      dark: '#b61827'
    },
    secondary: {
      main: '#607d8b',
      light: '#8eacbb',
      dark: '#34515e'
    }
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav>
        <Home />
      </Nav>
    </ThemeProvider>
  );
}

export default App;
