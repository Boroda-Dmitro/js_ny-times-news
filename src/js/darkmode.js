const toggleBtn = document.querySelector('.toggle-button');
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
