function loadContact() {
    const contact = document.querySelector('#content');
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact');
    contactContainer.appendChild(createParagraph('Hours: 7AM-7PM (closed Sundays)'));
    contactContainer.appendChild(createParagraph('Phone: (555) 555-5555'));
    contactContainer.appendChild(createParagraph('Address: 20 W 34th St, New York, NY 10001'));
    contactContainer.appendChild(createImage('./images/rsz_citymap.png'));
    contact.appendChild(contactContainer);
    document.querySelector('#contact').classList.add('current-nav');
}

function createParagraph(content) {
    const para = document.createElement('p');
    para.textContent = content;
    return para;
}

function createImage(imageSRC) {
    const image = document.createElement('img');
    image.classList.add('contact-image');
    image.src = imageSRC;
    return image;
}

export default loadContact;