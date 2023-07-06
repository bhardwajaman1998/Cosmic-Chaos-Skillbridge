import "./styles.scss";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/MUI-Theme/MUITheme'
import './components/Dashboard/Dashboard'
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./pages/Home/Home";
import Employee from "./pages/SamplePage/Employee/Employee";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
