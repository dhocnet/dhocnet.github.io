document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('#PosterTop div');
  const totalImages = images.length;
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.style.opacity = '0';
      img.style.transform = 'translateX(100%)'; // Mulai dari kanan luar
      img.style.animation = ''; // Reset animasi sebelumnya
    });

    // Set animasi untuk gambar aktif
    images[index].style.opacity = '1';
    images[index].style.transform = 'translateX(0)';
    images[index].style.animation = 'slideInRight 0.5s ease-out, slideOutRight 0.5s ease-out 5.5s';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop selamanya
    showSlide(currentIndex);
  }

  // Inisialisasi pertama
  showSlide(currentIndex);

  // Pindah slide setiap 6 detik (5 detik standby, 0.5 detik geser in, 0.5 detik geser out)
  setInterval(nextSlide, 6000);
});