document.addEventListener('DOMContentLoaded', function() {
    // Typing animation for the hero section
    const typeText = document.querySelector('.type-text');
    const text = typeText.textContent;
    typeText.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            typeText.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        } else {
            typeText.classList.remove('type-text');
        }
    }

    type();

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];

    if (!currentPage || currentPage === 'index') {
        currentPage = 'home';
    }

    navLinks.forEach(link => link.classList.remove('active'));
    const matchingLink = Array.from(navLinks).find(link => link.getAttribute('data-page') === currentPage);
    if (matchingLink) {
        matchingLink.classList.add('active');
    }
});

document.querySelectorAll('.publication-item').forEach(item => {
    item.addEventListener('click', function() {
        const info = this.getAttribute('data-info');
        document.getElementById('popup-text').textContent = info;
        document.getElementById('popup').style.display = 'block';
    });
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function fadeOutAndNavigate(url) {
    const contentDiv = document.querySelector('.content');
    contentDiv.style.opacity = 0;
    setTimeout(function() {
        window.location.href = url;
    }, 300);
}

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        fadeOutAndNavigate(target);
    });
});

window.addEventListener('load', function() {
    const contentDiv = document.querySelector('.content');
    contentDiv.style.opacity = '1';
});

// Fade-in animation for experience items
const experienceItems = document.querySelectorAll('.experience-item');
experienceItems.forEach((item, index) => {
    item.style.setProperty('--i', index);
});

function showCertification(certId) {
    document.getElementById(certId).style.display = 'block';
}

function closeModal(certId) {
    document.getElementById(certId).style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    let items = document.querySelectorAll('.education-item, .responsibility-item, .certification-item');
    items.forEach((item, index) => {
        item.style.setProperty('--i', index);
    });
});
