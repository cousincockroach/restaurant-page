
import "./styles.css";
import restaurantImage from "./restaurant.jpeg";
import { renderHome } from "./home.js";
import { renderContact } from "./contact.js";
import { renderMenu } from "./menu.js";

const body = document.querySelector("body");
const content = document.querySelector("#content");

body.style.backgroundImage = `url(${restaurantImage})`; 
body.style.backgroundSize = 'cover';
body.style.backgroundPosition = 'center';

const homeBtn = document.querySelector("#home");
const contactBtn = document.querySelector("#contact");
const menuBtn = document.querySelector("#menu");

let activeTab = "home";

function switchTab(tabName, renderFunction) {
  if (activeTab === tabName) return;


  if (content.firstElementChild) {
    content.firstElementChild.classList.add("fade-out");


    setTimeout(() => {
      content.replaceChildren();
      renderFunction();
      activeTab = tabName;
    }, 300);
  } else {
    renderFunction();
    activeTab = tabName;
  }
}

homeBtn.addEventListener("click", () => {
  switchTab("home", renderHome);
});

contactBtn.addEventListener("click", () => {
  switchTab("contact", renderContact);
});

menuBtn.addEventListener("click",() =>{
    switchTab("menu", renderMenu);
})

renderHome();