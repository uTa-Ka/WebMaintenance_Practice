// Script untuk menampilkan pesan sukses setelah form di-submit
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form refresh halaman
    alert('Thank you! Your message has been submitted.');
});

// Script untuk scroll halus ke section tertentu saat link diklik
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah default behavior
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
// Script untuk menampilkan pesan sukses setelah form di-submit
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form refresh halaman
    alert('Thank you! Your message has been submitted.');
});

// Script untuk scroll halus ke section tertentu saat link diklik
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Mencegah default behavior
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
// Validasi form sebelum submit
document.querySelector('form').addEventListener('submit', function (event) {
    // Ambil elemen input
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Cek apakah input kosong
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('All fields are required. Please fill them out.');
        event.preventDefault(); // Mencegah form di-submit
        return;
    }

    // Cek format email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Mencegah form di-submit
        return;
    }

    // Jika semua validasi lolos
    alert('Form submitted successfully!');
});
