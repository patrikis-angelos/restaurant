import * as home from './home';
import about from './about';
import menu from './menu';
import contact from './contact';
import './reset.css';
import './style.css';

home.header();
home.main();
about();

const item = document.querySelector('.item');
const tabs = document.querySelectorAll('.tab');
const tabMethods = [about, menu, contact];

const openTab = (index) => {
  item.innerHTML = '';

  for (let i = 0; i < tabs.length; i += 1) {
    tabs[i].classList.remove('active');
  }

  tabs[index].classList.add('active');
  tabMethods[index]();
};

for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = openTab.bind(null, i);
}
