import "./styles.scss";
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/MUI-Theme/MUITheme'
import './components/Dashboard/Dashboard'
import Dashboard from './components/Dashboard/Dashboard';
import Home from "./pages/SamplePage/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
