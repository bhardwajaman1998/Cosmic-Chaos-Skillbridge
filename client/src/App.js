import "./styles.scss";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/MUI-Theme/MUITheme'
import './components/Dashboard/Dashboard'
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Dashboard />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
