// Mengambil elemen yang dibutuhkan
const editButton = document.querySelector('.edit-button');
const logoutButton = document.querySelector('.sidebar button');

// Fungsi untuk membuka popup edit profile
function openPopup() {
  const popupOverlay = document.querySelector('.popup-overlay');
  popupOverlay.style.display = 'block'; // Menampilkan pop-up
}

// Fungsi untuk menutup popup
function closePopup() {
  const popupOverlay = document.querySelector('.popup-overlay');
  popupOverlay.style.display = 'none'; // Menyembunyikan pop-up
}

// Fungsi untuk logout
function logout() {
  const confirmLogout = confirm('Apakah Anda yakin ingin logout?');
  if (confirmLogout) {
    alert('Anda telah logout.');
    window.location.href = 'login.html'; // Ganti dengan halaman login Anda
  }
}

// Event listener untuk tombol edit profile
if (editButton) {
  editButton.addEventListener('click', openPopup);
}

// Event listener untuk tombol logout
if (logoutButton) {
  logoutButton.addEventListener('click', logout);
}
