import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import MediaPage from './pages/MediaPage';
import ProgramsPage from './pages/ProgramsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/*' element={<Navigate to={'/'} replace />} />
          <Route path='/' element={<Homepage />} />
          {/* <Route path='/gallery' element={<MediaPage />} /> */}
          <Route path='/programs' element={<ProgramsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
