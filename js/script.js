// Menangani event klik pada tombol "Masuk/Daftar"
const loginButton = document.querySelector('.login-button');
loginButton.addEventListener('click', () => {
  alert('Fitur Masuk/Daftar belum tersedia. Mohon ditunggu!');
});

// Menambahkan efek hover pada fitur
const features = document.querySelectorAll('.feature');
features.forEach((feature) => {
  feature.addEventListener('mouseover', () => {
    feature.style.transform = 'scale(1.05)';
    feature.style.transition = 'transform 0.3s ease';
  });

  feature.addEventListener('mouseout', () => {
    feature.style.transform = 'scale(1)';
  });
});

// Simulasi navigasi untuk menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Navigasi ke ${link.textContent} belum tersedia.`);
  });
});

// Simulasi klik pada link di footer
const footerLinks = document.querySelectorAll('footer a');
footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Tautan ${link.textContent} belum aktif.`);
  });
});

// Tambahkan interaksi pada gambar fitur (opsional)
const featureImages = document.querySelectorAll('.feature img');
featureImages.forEach((img) => {
  img.addEventListener('click', () => {
    alert('Gambar ini hanya ilustrasi.');
  });
});
