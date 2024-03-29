const lightModeButton = document.getElementById('light-mode-button');
const darkModeButton = document.getElementById('dark-mode-button');
const root = document.documentElement;

darkModeButton.addEventListener('click', () => {
    root.style.setProperty('--background-color', 'var(--dark-background-color)');
    root.style.setProperty('--title-color', 'var(--dark-title-color)');
    root.style.setProperty('--content-color', 'var(--dark-content-color)');
    root.style.setProperty('--hover-background-color', 'var(--dark-hover-background-color)');
    root.style.setProperty('--hover-color', 'var(--dark-hover-color)');
    root.style.setProperty('--icon-color', 'var(--dark-icon-color)');
});

lightModeButton.addEventListener('click', () => {
    root.style.setProperty('--background-color', 'var(--light-background-color)');
    root.style.setProperty('--title-color', 'var(--light-title-color)');
    root.style.setProperty('--content-color', 'var(--light-content-color)');
    root.style.setProperty('--hover-background-color', 'var(--light-hover-background-color)');
    root.style.setProperty('--hover-color', 'var(--light-hover-color)');
    root.style.setProperty('--icon-color', 'var(--light-icon-color)');
});