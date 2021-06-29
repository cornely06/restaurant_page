function loadMenu() {
    const menu = document.querySelector('#content');
    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');
    menuContainer.appendChild(createMenuItem('Cookies', './images/cookies.jpg'));
    menuContainer.appendChild(createMenuItem('Donuts', './images/donuts.jpg'));
    menuContainer.appendChild(createMenuItem('Breads', './images/breads.jpg'));
    menuContainer.appendChild(createMenuItem('Cakes', './images/cakes.jpg'));
    menu.appendChild(menuContainer);
    document.querySelector('#menu').classList.add('current-nav');
}

function createMenuItem(item, imageSRC) {
    const menuItem = document.createElement('div');
    menuItem.appendChild(createParagraph(item));
    menuItem.appendChild(createImage(imageSRC));
    menuItem.classList.add('menu-item');
    return menuItem;
}

function createParagraph(item) {
    const para = document.createElement('p');
    para.textContent = item;
    return para;
}

function createImage(imageSRC) {
    const image = document.createElement('img');
    image.classList.add('menu-image');
    image.src = imageSRC;
    return image;
}


export default loadMenu;