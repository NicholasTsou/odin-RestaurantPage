import { createHeader } from "./header";
import { createFooter } from "./footer";
import { createHomepage } from "./homepage";
import { createContactPage } from "./contact";
import { createMenu } from "./menu";

createHeader();

const homeTab = document.getElementById('home');
const menuTab = document.getElementById('menu');
const contactTab = document.getElementById('contact');
const contentContainer = document.createElement('main');
document.body.appendChild(contentContainer);

//function to show homepage
function showHomepage() {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(createHomepage());
}

//function to show contact page
function showContactPage() {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(createContactPage());
}

//function to show menu page
function showMenu() {
    contentContainer.innerHTML = '';
    contentContainer.appendChild(createMenu());
}

//adding event listeners
homeTab.addEventListener('click', showHomepage);
menuTab.addEventListener('click', showMenu);
contactTab.addEventListener('click', showContactPage);

showHomepage();
createFooter();


