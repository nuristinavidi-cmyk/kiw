'use client';

import React, { useState, useEffect } from 'react';

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [showPhotos, setShowPhotos] = useState(false);
  
  // Daftar nama file foto kamu di folder public
  const photos = [
    '/kepo1.png',
    '/kepo2.png',
    '/kepo3.png',
    '/kepo1.png',
    '/kepo2.png',
    '/kepo3.png',
  ];

  const handleButtonClick = () => {
    setShowCard(true);
  };
  
  useEffect(() => {
    if (showCard) {
      // Tunda tampilan foto setelah 2 detik
      const timer = setTimeout(() => {
        setShowPhotos(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showCard]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 to-purple-200 p-8 text-center">
      {/* Efek Salju (Pure CSS) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute z-0 bg-white rounded-full opacity-70 animate-snowfall"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Audio akan diputar otomatis dan berulang */}
      <audio autoPlay loop>
        <source src="/song.mp3" type="audio/mpeg" />
        Browser kamu tidak mendukung pemutaran audio.
      </audio>

      {!showCard && (
        <div className="z-10 bg-white/50 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl border border-white/30 max-w-lg w-full transition-all duration-500 ease-in-out">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-4 animate-pulse shake-it">
            Ada Pesan Spesial!
          </h1>
          <p className="text-xl sm:text-2xl text-purple-800 font-medium mb-8">
            Klik tombol suratt ini ya
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-purple-600"
          >
            Buka Kartu Ulang Tahun
          </button>
        </div>
      )}

      {showCard && (
        <div className="z-10 bg-white/50 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl border border-white/30 max-w-lg w-full transition-all duration-500 ease-in-out fade-in">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-pink-600 mb-4">
            Happy Birthday! 🎉
          </h1>
          <p className="text-xl sm:text-2xl text-purple-800 font-semibold mb-6">
            Selamat ulang tahun, [galangggggg]!
          </p>
          <div className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            <p className="mb-4">
              ""Selamat ulang tahun.

Semoga di tahun ini kamu menemukan seseorang yang bisa membuatmu tersenyum setiap hari, yang bisa melengkapi hidupmu, dan yang tidak akan pernah menyakitimu. Kamu pantas mendapatkan kebahagiaan yang tulus.

Terima kasih untuk semuanya."
            </p>
            <p className="italic text-right">
              - [vidicanss]
            </p>
          </div>

          {showPhotos && (
            <div className="mt-8 pt-6 border-t border-purple-300/50">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">Kenangan Opoaews ✨</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Kenangan ${index + 1}`}
                    className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300 image-fade-in"
                    style={{ animationDelay: `${0.2 * index}s` }}
                  />
                ))}
              </div>
            </div>
          )}
          
          {/* Bagian Pesan Rahasia */}
          <div className="mt-8 pt-6 border-t border-purple-300/50 text-center">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Ada Kejutan Lain!</h2>
            <details className="bg-white/50 p-4 rounded-lg shadow-md transition-all duration-300 open:bg-pink-200">
              <summary className="text-lg font-semibold text-gray-800 cursor-pointer">
                Klik di sini untuk melihat pesan rahasia
              </summary>
              <p className="mt-4 text-gray-700 italic">
                : 'Kamu bien harapanku terkahir la kok kyk jmb tp gpp'"
              </p>
            </details>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;