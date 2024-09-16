import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Home from './components/Home';
import TopAnime from './components/TopAnime';
import LihatDetail from './components/LihatDetail'; // Import komponen LihatDetail
import './App.css';

function App() {
  const navigate = useNavigate(); // Mendapatkan fungsi navigate

  // Fungsi untuk menangani klik pada logo
  const handleLogoClick = () => {
    navigate('/'); // Mengarahkan ke halaman utama
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo" onClick={handleLogoClick}>
          Anime<span>Finder</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/top-anime">Top Anime</Link></li>
          </ul>
        </nav>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-anime" element={<TopAnime />} />
        <Route path="/lihat-detail" element={<LihatDetail />} /> {/* Tambah rute untuk LihatDetail */}
      </Routes>
    </div>
  );
}

export default App;
