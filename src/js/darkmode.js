
const themeToggle = document.querySelector('.toggle-button');
const app = document.getElementById('app');
    
    function chosenTheme() {
    if(localStorage.getItem('theme') === 'dark') {
        app.classList.add('dark');
    }
    if(localStorage.getItem('theme') === 'light') {
        app.classList.add('light');
    }
    }
    
    const themeChange = () => {
    if(app.classList.contains('light')) {
        app.classList.remove('light');
        app.classList.add('dark');
        localStorage.removeItem('theme', 'light')
        localStorage.setItem('theme', 'dark')
    } else {
        app.classList.remove('dark');
        app.classList.add('light');
        localStorage.removeItem('theme', 'dark')
        localStorage.setItem('theme', 'light')
    }
    }
    themeToggle.addEventListener('click', themeChange)
    chosenTheme()