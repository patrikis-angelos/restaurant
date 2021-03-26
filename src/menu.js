function createTitle (title) {
  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = title;
  categoryTitle.classList.add('category-title');
  return categoryTitle;
}

function createImg (imgUrl) {
  const img = document.createElement('img');
  img.classList.add('menu-img');
  img.src = imgUrl;

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  imgContainer.appendChild(img);

  return imgContainer;
}

function createOption (title, price, description) {
  const optionTitle = document.createElement('h4');
  optionTitle.classList.add('color-white');
  optionTitle.textContent = `${title} ${price}`;

  const desc = document.createElement('p');
  desc.classList.add('m-top-10');
  desc.textContent = description;

  const container = document.createElement('div');
  container.classList.add('m-top-10');

  container.appendChild(optionTitle);
  container.appendChild(desc);

  return container;
}

export default function menu () {
  const options = document.createElement('div');
  options.classList.add('options');
  let option = createOption(
    'Zuffoli di Salsiccia', 
    '6,20', 
    'Τραγανές φλογέρες με λουκάνικο, κόκκινες πιπεριές και πεκορίνο.');
    options.appendChild(option);

  const image = createImg('../src/pizza2.jpg');

  const wrapper = document.createElement('div');
  wrapper.classList.add('flex-md', 'space-between');

  wrapper.appendChild(image);
  wrapper.appendChild(options);

  const title = createTitle('Pizza');

  const menuCategory = document.createElement('div');
  menuCategory.classList.add('menu-category');
  menuCategory.appendChild(title);
  menuCategory.appendChild(wrapper);

  const item = document.querySelector('.item');
  item.appendChild(menuCategory);
};