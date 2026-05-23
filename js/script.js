// Mobil Menü Açma/Kapatma Etkileşimi
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Hamburger ikonunu tıklanınca 'X' işaretine dönüştürür
    const icon = mobileMenu.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
});

// Menü linklerinden birine tıklandığında mobil menüyü otomatik kapatır
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenu.querySelector('i').className = 'fas fa-bars';
    });
});