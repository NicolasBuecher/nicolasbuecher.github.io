import {
  createTheme,
  ThemeProvider
} from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Experience from "./pages/Experience/Experience";
import Home from "./pages/Home/Home";
import ProjectDisplay from "./pages/ProjectDisplay/ProjectDisplay";
import Projects from "./pages/Projects/Projects";
import "./App.css";

const theme = createTheme({
  palette : {
    primary : {
      main : "#fafafa"
    },
    secondary : {
      main : "#008c8c"
    }
  },
  typography : {
    fontFamily : "Poppins"
  }
});


function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" data-testid="app">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDisplay />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
