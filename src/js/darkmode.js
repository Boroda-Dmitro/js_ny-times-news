const toggleBtn = document.querySelector('.toggle-button');
const btnLight = document.querySelector('.toggle-light');
const btnDark = document.querySelector('.toggle-dark');
    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }
function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
}
    (function () {
        if (localStorage.getItem('theme') === 'dark') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    })();
