import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global.css";
import { Container } from "./components/styles/Container.styled";

const theme = {
  colors: {
    primary: "hsl(26, 100%, 55%)",
    primary_pale: "Pale orange: hsl(25, 100%, 94%)",
    neutral: {
      very_dark: "hsl(220, 13%, 13%)",
      grayish_blue_1: "hsl(219, 9%, 45%)",
      grayish_blue_2: "hsl(220, 14%, 75%)",
      grayish_blue_3: "hsl(223, 64%, 98%)",
    },
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <div>
          <Home />
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
