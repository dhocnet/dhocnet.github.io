document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('#PosterTop div');
  const totalImages = images.length;
  const duration = totalImages * 6; // Durasi total: 6 detik per gambar (0.5 detik in, 5 detik standby, 0.5 detik out)

  // Set animasi untuk setiap gambar
  images.forEach((img, index) => {
    img.style.animation = `fade ${duration}s infinite`;
    img.style.animationDelay = `${index * 6}s`;
  });
});