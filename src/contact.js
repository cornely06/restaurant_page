function loadContact() {
    const home = document.querySelector('#content');
    home.appendChild(createParagraph('Hours: 7AM-7PM (closed Sundays)'));
    home.appendChild(createParagraph('Phone: (555) 555-5555'));
    home.appendChild(createParagraph('Address: 20 W 34th St, New York, NY 10001'));
    home.appendChild(createImage('./images/rsz_citymap.png'));
    document.querySelector('#contact').classList.add('current-nav');
}

function createParagraph(content) {
    const para = document.createElement('p');
    para.textContent = content;
    para.classList.add('contact');
    return para;
}

function createImage(imageSRC) {
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    image.src = imageSRC;
    imageContainer.appendChild(image);
    return imageContainer;
}

export default loadContact;