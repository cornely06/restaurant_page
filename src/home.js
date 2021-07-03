function loadHome() {
    const home = document.querySelector('#content');
    const homeContainer = document.createElement('div');
    homeContainer.classList.add('home');
    homeContainer.appendChild(createParagraph('Serving the area since 1988!'));
    homeContainer.appendChild(createImage('./images/chef.png'));
    homeContainer.appendChild(createParagraph('Online ordering and indoor seating available!'));
    home.appendChild(homeContainer);
    document.querySelector('#home').classList.add('current-nav');
}

function createParagraph(content) {
    const para = document.createElement('p');
    para.textContent = content;
    return para;
}

function createImage(imageSRC) {
    const image = document.createElement('img');
    image.classList.add('home-image');
    image.src = imageSRC;
    return image;
}

export default loadHome;