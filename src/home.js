function loadHome() {
    const home = document.querySelector('#content');
    home.appendChild(createParagraph('Serving the area since 1988!'));
    home.appendChild(createImage('./images/chef.png'));
    home.appendChild(createParagraph('Online ordering and indoor seating available!'));
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