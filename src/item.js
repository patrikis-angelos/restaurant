const about = () => {
  const item = document.querySelector('.item');

  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('center');
  aboutTitle.textContent = 'La Pasteria Cucina Italiana';

  const aboutText = document.createElement('p');
  aboutText.classList.add('center');
  aboutText.textContent = 'Εσείς δεν χορταίνετε τα αγαπημένα σας πιάτα και εμείς δεν χορταίνουμε να βλέπουμε τη χαρά σας';
  
  item.appendChild(aboutTitle);
  item.appendChild(aboutText);
};

const menu = () => {

};

const contact = () => {
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

export default about;
export {about, menu, contact};