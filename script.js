console.log('Selamat datang di Kebun Binatang Virtual!');

document.addEventListener('DOMContentLoaded', function () {
  const qrBox = document.querySelector('.qr-box');
  const bgMusic = document.getElementById('bg-music');
  const speakerBtn = document.getElementById('speaker-btn');
  const themeBtn = document.getElementById('theme-btn');
  let isPink = false;

  // Mainkan musik setelah klik pertama
  const enableMusic = () => {
    bgMusic.muted = false;
    bgMusic.play();
    speakerBtn.textContent = '🔊';
    document.body.removeEventListener('click', enableMusic);
  };
  document.body.addEventListener('click', enableMusic);

  if (qrBox) {
    qrBox.addEventListener('click', function () {
      alert('Kamu siap menjelajahi dunia hewan!');
    });
  }

  document.body.style.backgroundColor = '#e0ffe0';

  speakerBtn.addEventListener('click', function () {
    if (bgMusic.paused) {
      bgMusic.play();
      bgMusic.muted = false;
      speakerBtn.textContent = '🔊';
    } else {
      bgMusic.pause();
      speakerBtn.textContent = '🔇';
    }
  });

  // Ganti tema
  themeBtn.addEventListener('click', function () {
    isPink = !isPink;
    if (isPink) {
      document.body.classList.add('pink-theme');
      document.body.style.backgroundColor = '#ffe6f0';
    } else {
      document.body.classList.remove('pink-theme');
      document.body.style.backgroundColor = '#e0ffe0';
    }
  });
});
