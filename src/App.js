import { useContext } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { TechProvider } from "./contexts/TechContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { MainRoutes as Routes } from "./routes";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeContext } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <TechProvider>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={theme.title}
          />

          <GlobalStyle />
          <Routes />
        </TechProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
