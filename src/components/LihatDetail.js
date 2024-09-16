import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate untuk navigasi
import '../CSS/LihatDetail.css'; // Jalur yang benar ke file CSS

function LihatDetail() {
    const location = useLocation();
    const navigate = useNavigate(); // Inisialisasi useNavigate
    const { animeItem } = location.state; // Ambil data anime yang dikirim dari Home.js

    // Tambahkan parameter autoplay=0 jika video berasal dari YouTube
    const getEmbedUrl = (url) => {
        try {
            const urlObj = new URL(url);
            urlObj.searchParams.set('autoplay', '0'); // Pastikan autoplay=0
            return urlObj.toString();
        } catch (error) {
            console.error('Invalid URL:', url);
            return ''; // Kembalikan string kosong jika URL tidak valid
        }
    };

    return (
        <div className="detail">
            
            <h2>{animeItem.title}</h2>
            <img
                src={animeItem.images.jpg.large_image_url || animeItem.images.webp.large_image_url}
                alt={animeItem.title_japanese}
            />
            <p><strong>Status:</strong> {animeItem.status}</p>
            <p><strong>Rating:</strong> {animeItem.rating}</p>
            <p><strong>Eps:</strong> {animeItem.episodes}</p>
            <p><strong>Synopsis:</strong> {animeItem.synopsis}</p>

            {animeItem.trailer && animeItem.trailer.embed_url && (
                <div>
                    <h3>Trailer</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={getEmbedUrl(animeItem.trailer.embed_url)} // Menggunakan URL yang dimodifikasi
                        title="Anime Trailer"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
            <button onClick={() => navigate('/')} className="back-btn">Back ke Home...</button>
        </div>
    );
}

export default LihatDetail;
