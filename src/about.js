const about = () => {
  const item = document.querySelector('.item');

  const aboutTitle = document.createElement('h2');
  aboutTitle.classList.add('center');
  aboutTitle.textContent = 'La Pasta Italian cusine';

  const aboutText = document.createElement('p');
  aboutText.classList.add('center');
  aboutText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  item.appendChild(aboutTitle);
  item.appendChild(aboutText);
};

export default about;