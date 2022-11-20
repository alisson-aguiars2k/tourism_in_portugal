/*
function menuToggle() {
    let menuArea = document.getElementById("menu_area");

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu_opened');
    } else {
        menuArea.classList.add('menu_opened');
    }
}
*/

function menuToggle() {
    let menuArea = document.getElementById("menu_area");

    if(menuArea.style.width == '170px') {
        menuArea.style.width ='0px';
    } else {
        menuArea.style.width = '170px';
    }
}

