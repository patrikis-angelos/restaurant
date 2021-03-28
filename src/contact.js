export default function contact() {
  const item = document.querySelector('.item');

  const links = document.createElement('h2');
  links.classList.add('center');
  links.textContent = 'Follow us on ';

  const instaLink = document.createElement('a');
  instaLink.href = '#';
  instaLink.textContent = 'Instagram';
  links.appendChild(instaLink);

  const aboutText = document.createElement('p');
  aboutText.classList.add('center');
  aboutText.textContent = "You can contact us here, 'adress'";

  item.appendChild(aboutText);
  item.appendChild(links);
}