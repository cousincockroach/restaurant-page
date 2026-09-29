

import outside from "./outside.jpeg";
import "./home.css";

export function renderHome() {
    const container = document.querySelector("#content");
    
    container.innerHTML = "";

    const card = document.createElement('div');

    card.classList.add('tab-content');
    card.setAttribute('id', 'card');

    const firstPara = document.createElement('p');
    const secondPara = document.createElement('p');
    const thirdPara = document.createElement('p');

    firstPara.textContent = "Best wine and dine in the city";
    secondPara.textContent = "Made with passion since 1900";
    thirdPara.textContent = "Visit us or order online!";

    const img = document.createElement('img');
    img.src = outside;
    img.alt = "Restaurant Exterior";

    card.appendChild(firstPara);
    card.appendChild(secondPara);
    card.appendChild(img);
    card.appendChild(thirdPara);

    container.appendChild(card);
}