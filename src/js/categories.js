const desktopWidth = window.matchMedia("(min-width: 1280px)");
const tabletWidth = window.matchMedia("(min-width: 768px)");
const mobileWidth = window.matchMedia("(min-width: 320px)");


const catigoriesContainer = document.querySelector("categories");

// window.addEventListener('resize', renderElements);

export function renderElements() {

    if (desktopWidth.matches) {

        console.log(`Комп`);
    }
    else if (tabletWidth.matches) {

        console.log(`Планшет`);
    }    
    else {
        console.log(`Телефон`);
    }    
}

renderElements();
