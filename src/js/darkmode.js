toggleBtn = document.querySelector('.toggle-button');
if (localStorage.getItem('theme') === 'dark') {
    setTheme('dark');
} else {
    setTheme('light');
}
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
        toggleBtn.checked = themeName === 'dark';
    }
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
        toggleBtn.checked = false;
    } else {
        setTheme('dark');
        toggleBtn.checked = true;
    }
}
