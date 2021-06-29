function createContentDiv() {
    const content = document.createElement('div');
    content.id = 'content';
    return content;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.appendChild(createTitle('Cornely\'s Bakery'));
    header.appendChild(createNavBar());
    return header;
}

function createTitle(pageTitle) {
    const title = document.createElement('h1');
    title.textContent = pageTitle;
    return title;
}

function createNavBar() {
    const nav = document.createElement('nav');
    nav.appendChild(createNavButton('Home', 'home', loadHome));
    nav.appendChild(createNavButton('Menu', 'menu', loadMenu));
    nav.appendChild(createNavButton('Contact', 'contact', loadContact));
    return nav;
}

function createNavButton(content, id, pageLoad) {
    const button = document.createElement('button');
    button.textContent = content;
    button.id = id;
    button.addEventListener('click', clearContent);
    button.addEventListener('click', pageLoad);
    return button;
}

function clearContent() {
    const content = document.querySelector('#content');
    while (content.firstChild) {content.removeChild(content.firstChild);}
}

function init() {
    const main = document.querySelector('body');
    main.appendChild(createHeader());
    main.appendChild(createContentDiv());
}

export default init;
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';