function createIcon(class1, class2) {
  const link = document.createElement('a');
  link.classList.add('m-left-10');
  link.href = '#';
  const icon = document.createElement('i');
  icon.classList.add(class1, class2);
  link.appendChild(icon);

  return link;
}

export default function contact() {
  const item = document.querySelector('.item');

  const links = document.createElement('h2');
  links.classList.add('center');
  links.textContent = 'Follow us on:';

  const instaLink = createIcon('fab', 'fa-instagram');
  const twitterLink = createIcon('fab', 'fa-twitter');
  const fbLink = createIcon('fab', 'fa-facebook-f');

  links.appendChild(instaLink);
  links.appendChild(twitterLink);
  links.appendChild(fbLink);

  const aboutText = document.createElement('p');
  aboutText.classList.add('center');
  aboutText.textContent = "You can contact us here, 'adress'";

  item.appendChild(aboutText);
  item.appendChild(links);
}