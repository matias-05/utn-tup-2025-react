import './App.css'
import RecetasListPage from './pages/RecetasListPage'
import RecetaDetallePage from './pages/RecetaDetallePage';
import Navbar from './components/layout/Navbar'
import InicioPage from './pages/InicioPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<InicioPage />} />
        <Route path="/recetas" element={<RecetasListPage />} />
        <Route path="/recetas/:id" element={<RecetaDetallePage />} />
      </Routes>
    </Router>
  );
}
export default App
