function getBlogPosts() {
    return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

function saveBlogPosts(posts) {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function setupModeToggleButton() {
    const modeToggle = document.getElementById('mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', toggleDarkMode);
    }
}

function redirectTo(page) {
    window.location.href = page;
}

function setupBackButton() {
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', () => redirectTo('index.html'));
    }
}

function setup() {
    setupModeToggleButton();
    setupBackButton();
}

document.addEventListener('DOMContentLoaded', setup);