console.log("Hello world!")

/* Javascript-code voor het dropdown-menu */

const dropdown_knop = document.getElementById("dropdown-button");
const dropdown_menu = document.getElementById("dropdown-menu");

let stateMenu = false;

function menuToggle(){
    if(stateMenu == false){
        dropdown_menu.style.display = 'flex';
        stateMenu=true;
        dropdown_knop.textContent = 'Minder ^';
    } else {
        dropdown_menu.style.display = 'none';
        stateMenu=false;
        dropdown_knop.textContent = 'Meer v'
    }
}

dropdown_knop.addEventListener('click',menuToggle);

/* --- */

/* Javascript-code voor de progressbar */

let progress = document.getElementById ('progressbar');

let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

/* --- */