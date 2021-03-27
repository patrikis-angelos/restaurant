import bgImg from './pizza.jpg';
const content = document.querySelector('#content')

const header = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  nav.classList.add("fixed", "navbar");
  const restaurant = document.createElement('h1');
  restaurant.textContent = 'Restaurant name'
  restaurant.classList.add('center');

  nav.appendChild(restaurant);
  header.appendChild(nav);
  content.appendChild(header);
};

const main = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.style.background = `url(${bgImg})`;
  main.style.backgroundRepeat = 'no-repeat';
  main.style.backgroundSize = 'cover';

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const about = document.createElement('div');
  about.classList.add('tab', 'active');
  about.textContent = 'About';
  const menu = document.createElement('div');
  menu.classList.add('tab');
  menu.textContent = 'Menu';
  const contact = document.createElement('div');
  contact.classList.add('tab');
  contact.textContent = 'Contact';

  const item = document.createElement('div')
  item.classList.add('item');

  wrapper.appendChild(about);
  wrapper.appendChild(menu);
  wrapper.appendChild(contact);
  wrapper.appendChild(item);

  main.appendChild(wrapper);

  content.appendChild(main);
  
  menu.style.left = about.offsetWidth + 'px';
  contact.style.left = about.offsetWidth + menu.offsetWidth + 'px';
};

const footer = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  content.appendChild(footer);
}

export default header
export {header, main, footer};