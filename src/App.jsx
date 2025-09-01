import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import LoadingScreen from "./loadingScreen";
import MainPage from './MainPage';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LoadingScreen/>} />
        <Route path="/main" element={<MainPage/>} />
      </Routes>
    </Router>
  );
};

export default App;