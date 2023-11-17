export function createContactPage(){

    const fragment = document.createDocumentFragment();

    const section = document.createElement('section');
    section.classList.add('contact');

    const time = document.createElement('div');
    time.classList.add('time');

    const infoTitle = document.createElement('p');
    infoTitle.classList.add('infoTitle');
    infoTitle.textContent = 'Hours: ';

    const ul = document.createElement('ul');

    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const openingHours = '10:00 - 22:00';

    for (let i = 0; i < daysOfWeek.length; i++){
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.classList.add('timeInfo');
        p.textContent = daysOfWeek[i] + ': ';

        if(daysOfWeek[i] === 'Sunday'){
            p.textContent += 'CLOSED';
        }else{
            p.textContent += openingHours;
        }

        li.appendChild(p);
        ul.appendChild(li);
    }

    const imageHolder = document.createElement('div');
    imageHolder.classList.add('imageHolder');

    const infoTitle2 = document.createElement('p');
    infoTitle2.classList.add('infoTitle');
    infoTitle2.textContent = 'Address: '

    const lineBreak = document.createElement('br');

    const address = document.createElement('p');
    address.textContent = 'Champ de Mars, 5 Av. Anatole France, 75007 Paris, France';

    const img = document.createElement('img');
    img.src = "./pictures/map.png";

    time.appendChild(infoTitle);
    time.appendChild(ul);
    time.appendChild(imageHolder);
    time.appendChild(infoTitle2);
    time.appendChild(lineBreak);
    time.appendChild(address);
    time.appendChild(img);

    section.appendChild(time);

    fragment.appendChild(section);

    return fragment;
    
}