import Pizza from './pizza.jpg';
import Carne from './carne.png';
import Fetta from './fetta.png';
import Fungo from './fungo.png';
import Margherita from './margherita.png';
import Oliva from './oliva.png';
import Verde from './verde.png';
import Map from './map.png';
import './style.css';

function loadPage() {
    const content = document.querySelector('#content');
    content.appendChild(createBanner());
    content.appendChild(createContents());
}

function createBanner() {
    const banner = document.createElement('div');
    const logo = document.createElement('h1');

    logo.textContent = 'Neapolitan Dreams';

    banner.appendChild(logo);
    banner.appendChild(createTabs());
    banner.classList.add('banner');

    return banner;
}

function createTabs() {
    const tabs = document.createElement('div');
    const home = document.createElement('span');
    const menu = document.createElement('span');
    const contact = document.createElement('span');

    home.textContent = 'home';
    menu.textContent = 'menu';
    contact.textContent = 'contact';

    tabs.appendChild(home);
    tabs.appendChild(menu);
    tabs.appendChild(contact);
    tabs.classList.add('tabs');

    return tabs;
}

function createContents() {
    const contents = document.createElement('div');

    contents.classList.add('contents');
    contents.appendChild(createMain());
    contents.appendChild(createMenu());
    contents.appendChild(createContact());

    return contents;
}

function createMain() {
    const main = document.createElement('div');
    const title = document.createElement('h2');
    const desc = document.createElement('p');
    const img = new Image();
    
    title.textContent = 'Authentic Neapolitan Pizza'
    desc.textContent = 'Made with true artisan hands since 1902';
    img.src = Pizza;

    main.classList.add('main');
    main.appendChild(title);
    main.appendChild(desc);
    main.appendChild(img);

    return main;
}

function createMenu() {
    const menu = document.createElement('div');

    menu.classList.add('menu');
    menu.appendChild(createItem('Margherita', 'The classic', Margherita));
    menu.appendChild(createItem('Fungo', 'The enhancer', Fungo));
    menu.appendChild(createItem('Carne', 'For enthusiasts', Carne));
    menu.appendChild(createItem('Fetta', 'The refresher', Fetta));
    menu.appendChild(createItem('Oliva', 'Much depth', Oliva));
    menu.appendChild(createItem('Verde', 'Light and rich', Verde));

    return menu;
}

function createItem(name, desc, path) {
    const item = document.createElement('div');
    const title = document.createElement('h3');
    const paragraph = document.createElement('p');
    const img = new Image();

    title.textContent = name;
    paragraph.textContent = desc;
    img.src = path;

    item.classList.add('item');
    item.appendChild(title);
    item.appendChild(paragraph);
    item.appendChild(img);

    return item;
}

function createContact() {
    const contact = document.createElement('div');
    const number = document.createElement('h3');
    const address = document.createElement('h3');
    const map = new Image();

    number.textContent = 'Tel: 123-456-7890';
    address.textContent = '51 St Marks Pl #10, New York, NY 10003';
    map.src = Map;
    contact.classList.add('contact');

    contact.appendChild(number);
    contact.appendChild(address);
    contact.appendChild(map);

    return contact;
}

export default loadPage;