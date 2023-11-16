export function createFooter(){

    const body = document.querySelector('body');

    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const footerText = document.createElement('p');
    footerText.textContent = 'Copyright © The Odin Project 2023 | Nicholas Tsoukatos';

    footer.appendChild(footerText);
    body.appendChild(footer);
}