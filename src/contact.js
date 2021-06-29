function loadContact() {
    const contact = document.querySelector('#content');
    contact.appendChild(createParagraph('Hours: 7AM-7PM (closed Sundays)'));
    contact.appendChild(createParagraph('Phone: (555) 555-5555'));
    contact.appendChild(createParagraph('Address: 20 W 34th St, New York, NY 10001'));
    contact.appendChild(createImage('./images/rsz_citymap.png'));
    document.querySelector('#contact').classList.add('current-nav');
}

function createParagraph(content) {
    const para = document.createElement('p');
    para.textContent = content;
    para.classList.add('contact');
    return para;
}

function createImage(imageSRC) {
    const image = document.createElement('img');
    image.src = imageSRC;
    return image;
}

export default loadContact;