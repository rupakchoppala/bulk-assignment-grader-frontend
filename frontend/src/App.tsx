import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GradingProgress from './pages/GradingProgress';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/progress" element={<GradingProgress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
