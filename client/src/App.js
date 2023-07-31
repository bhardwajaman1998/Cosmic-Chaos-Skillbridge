import "./styles.scss";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/MUI-Theme/MUITheme'
import './components/Dashboard/Dashboard'
import Home from "./pages/Home/Home";
import Employee from "./pages/SamplePage/Employee/Employee";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./components/LandingPage/LandingPage";
import TraineePage from "./pages/SamplePage/Employee/TraineePage";  
import SignUp from "./components/Authentication/SignUp";
import SignIn from "./components/Authentication/SignIn";
import TraineeFeedback from "./pages/TraineeFeedback/TraineeFeedback";
import WelcomeMessage from "./components/Authentication/WelcomeMessage";
function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/trainees" element={<Employee />} />
          <Route path="trainees/traineePage" element={<TraineePage />} />
          <Route path="trainees/traineePage/feedback" element={<TraineeFeedback />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/WelcomeMessage" element={<WelcomeMessage/>} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
