function loadHome() {
    const home = document.querySelector('#content');
    home.appendChild(createParagraph('Serving the area since 1988!'));
    home.appendChild(createImage('./images/chef.png'));
    home.appendChild(createParagraph('Online ordering and indoor seating available!'));
}

function createParagraph(content) {
    const para = document.createElement('p');
    para.textContent = content;
    return para;
}

function createImage(imageSRC) {
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = imageSRC;
    imageContainer.appendChild(image);
    return imageContainer;
}

export default loadHome;