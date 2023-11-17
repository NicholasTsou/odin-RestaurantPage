export function createHomepage(){

    const fragment = document.createDocumentFragment();

    const section = document.createElement('section');
    section.classList.add('info');

    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = 'About Us';

    const aboutUs = document.createElement('p');
    aboutUs.textContent = 'Sakura Sushi & Ramen is a well-established Japanese restaurant located in the heart of Paris. With a focus on authentic Japanese cuisine, it has become a favorite for sushi and ramen enthusiasts.';

    const ul = document.createElement('ul');

    const li1 = document.createElement('li');
    li1.textContent = 'Culinary Excellence';

    const li2 = document.createElement('li');
    li2.textContent = 'Diverse Menu';

    const li3 = document.createElement('li');
    li3.textContent = 'Warm Atmosphere';

    const li4 = document.createElement('li');
    li4.textContent = 'Friendly Staff';

    section.appendChild(title);
    section.appendChild(aboutUs);
    section.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    fragment.appendChild(section);

    return fragment;
}