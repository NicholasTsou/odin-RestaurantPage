export function createHeader() {

    const body = document.querySelector('body');

    const header = document.createElement('header');
    header.classList.add('header');

    const top = document.createElement('div');
    top.classList.add('top');

    const title = document.createElement('p');
    title.textContent = 'Sakura Sushi & Ramen';

    const bottom = document.createElement('div');
    bottom.classList.add('bottom');

    const left = document.createElement('div');
    left.classList.add('left');

    const img = document.createElement('img');
    img.src = "../src/pictures/rice.png";

    const right = document.createElement('div');
    right.classList.add('right');

    const homeTab = document.createElement('button');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('button');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('button');
    contactTab.textContent = 'Contact';

    header.appendChild(top);
    top.appendChild(title);

    header.appendChild(bottom);
    bottom.appendChild(left);
    bottom.appendChild(right);
    left.appendChild(img);
    right.appendChild(homeTab);
    right.appendChild(menuTab);
    right.appendChild(contactTab);

    body.appendChild(header);


}