import location from "./location.jpeg"
import "./contact.css";

export function renderContact(){
    const cont = document.querySelector("#content");
    const card = document.createElement('div');

    card.classList.add('tab-content');

    let firstPara = document.createElement('p');
    firstPara.textContent = "Contact details & directions";

    const image = document.createElement("img");
    image.src = location;

    card.appendChild(firstPara);
    card.appendChild(image);
    card.setAttribute('id','contact-card');
    cont.appendChild(card);
}