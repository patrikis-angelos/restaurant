export default function contact () {
  const item = document.querySelector('.item');

  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('center');
  aboutTitle.textContent = 'Hello';

  const aboutText = document.createElement('p');
  aboutText.classList.add('center');
  aboutText.textContent = 'Hello';
  
  item.appendChild(aboutTitle);
  item.appendChild(aboutText);
};