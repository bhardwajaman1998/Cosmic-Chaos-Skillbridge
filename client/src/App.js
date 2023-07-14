import "./styles.scss";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/MUI-Theme/MUITheme'
import './components/Dashboard/Dashboard'
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./pages/Home/Home";
import Employee from "./pages/SamplePage/Employee/Employee";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TraineePage from "./pages/SamplePage/Employee/TraineePage";  


function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainees" element={<Employee />} />
          <Route path="/trainees/:id" element={<TraineePage />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
