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

function createNavButton(content, id) {
    const button = document.createElement('button');
    button.textContent = content;
    button.id = id;
    return button;
}

function createTitle(pageTitle) {
    const title = document.createElement('h1');
    title.textContent = pageTitle;
    return title;
}

function createNavBar() {
    const nav = document.createElement('nav');
    nav.appendChild(createNavButton('Home', 'home'));
    nav.appendChild(createNavButton('Menu', 'menu'));
    nav.appendChild(createNavButton('Contact', 'contact'));
    return nav;
}

function init() {
    const main = document.querySelector('body');
    main.appendChild(createHeader());
    main.appendChild(createContentDiv());
}

export default init;