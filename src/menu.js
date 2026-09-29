import menu from "./menu.jpeg"
import "./menu.css";

export function renderMenu(){
    const cont = document.querySelector("#content");
    const card = document.createElement('div');

    card.classList.add('tab-content');

    let firstPara = document.createElement('p');
    firstPara.textContent = "Food & Drinks Menu";

    const image = document.createElement("img");
    image.src = menu;

    card.appendChild(firstPara);
    card.appendChild(image);
    card.setAttribute('id','menu-card');
    cont.appendChild(card);
}