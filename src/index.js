import * as home from './home'
import about from './about'
import menu from './menu'
import contact from './contact'

home.header();
home.main();
home.footer();

const item = document.querySelector('.item');
const tabs = document.querySelectorAll('.tab');
const tabMethods = [about, menu, contact]

function openTab(index) {
  item.innerHTML = '';

  for (let i = 0; i < tabs.length; i+=1) {
    tabs[i].classList.remove('active');
  }

  tabs[index].classList.add('active');
  tabMethods[index]();
}


for (let i = 0; i < tabs.length; i += 1) {
  tabs[i].onclick = openTab.bind(null, i);
}