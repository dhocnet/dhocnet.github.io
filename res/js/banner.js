document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('#PosterTop div');
  const totalImages = images.length;
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      // Reset gambar lainnya
      img.style.opacity = '0';
      img.style.transform = 'translateX(100%)'; // Posisi gambar lainnya di luar kanan
      img.style.animation = ''; // Reset animasi
    });

    // Gambar aktif
    images[index].style.opacity = '1';
    images[index].style.transform = 'translateX(0)'; // Masuk ke posisi tengah
    images[index].style.animation = 'slideInRight 0.5s ease-out, slideOutRight 0.5s ease-out 5.5s';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Pindah ke gambar berikutnya
    showSlide(currentIndex);
  }

  // Inisialisasi slide pertama
  showSlide(currentIndex);

  // Pindah slide setiap 6 detik (0.5 detik geser in, 5 detik tampil, 0.5 detik geser out)
  setInterval(nextSlide, 6000);
});
