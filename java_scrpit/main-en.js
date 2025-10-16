function switchLanguage(lang) {
    if (lang === 'ar') {
        window.location.href = 'html_web.html';
    } else {
        window.location.href = 'index-en.html';
    }
}

function handleScroll() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

function updateLinkIcons() {
    const partnerLink = document.querySelector('[data-key="partner_link"]');
    const deliveryLink = document.querySelector('[data-key="delivery_link"]');
    const icon = `<i class="fa fa-chevron-right"></i>`;

    if (partnerLink) {
        partnerLink.innerHTML = `Discover More ${icon}`;
    }

    if (deliveryLink) {
        deliveryLink.innerHTML = `Register Now ${icon}`;
    }
}

const loginBtn = document.getElementById('login-modal-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOverlay = document.getElementById('login-modal-overlay');
const passwordInput = document.getElementById('password-input-field');
const togglePassword = document.getElementById('toggle-password');

function openModal() {
    modalOverlay.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('is-visible');
    document.body.style.overflow = '';
}

function togglePasswordVisibility() {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    togglePassword.textContent = isPassword ? 'Hide' : 'Show';
}

document.addEventListener('DOMContentLoaded', () => {
    handleScroll();
    updateLinkIcons();
    window.addEventListener('scroll', handleScroll);

    if (loginBtn) {
        loginBtn.addEventListener('click', openModal);
    }
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && modalOverlay.classList.contains('is-visible')) {
            closeModal();
        }
    });

    if (togglePassword) {
        togglePassword.addEventListener('click', togglePasswordVisibility);
    }

    if (passwordInput) {
        passwordInput.type = 'password';
        togglePassword.textContent = 'Show';
    }
});