var toggleBtn=document.querySelector(".toggle-button");function setTheme(e){localStorage.setItem("theme",e),document.documentElement.className=e}function toggleTheme(){"dark"===localStorage.getItem("theme")?setTheme("light"):setTheme("dark")}"dark"===localStorage.getItem("theme")?setTheme("dark"):setTheme("light");
//# sourceMappingURL=read.1e641a9b.js.map
