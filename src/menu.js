import pizzaImg from './pizza2.jpg';
import pastaImg from './pasta.png';
import burgerImg from './burgers.jpeg';

const MenuCategory = (title, imgUrl, options) => {
  const getTitle = () => title;
  const getImg = () => imgUrl;
  const getOptions = () => options;

  return {
    getTitle, getImg, getOptions,
  };
};

const Option = (title, price, description) => {
  const getTitle = () => title;
  const getPrice = () => price;
  const getDescription = () => description;

  return {
    getTitle, getPrice, getDescription,
  };
};

const option1 = Option('Lorem ipsum dolor sit amet', '6,20', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.');
const option2 = Option('Lorem ipsum dolor', '6,20', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.');
const category1 = MenuCategory('Pizza', pizzaImg, [option1, option2, option1, option2]);
const category2 = MenuCategory('Pasta', pastaImg, [option1, option2, option1, option2]);
const category3 = MenuCategory('Burgers', burgerImg, [option1, option2, option1, option2]);
const categories = [category1, category2, category3];

const createTitle = (title) => {
  const categoryTitle = document.createElement('h3');
  categoryTitle.textContent = title;
  categoryTitle.classList.add('category-title');
  return categoryTitle;
};

const createImg = (imgUrl) => {
  const img = document.createElement('img');
  img.classList.add('menu-img');
  img.src = imgUrl;

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  imgContainer.appendChild(img);

  return imgContainer;
};

const createOption = (option) => {
  const title = document.createElement('div');
  title.classList.add('color-white', 'flex', 'space-between');

  const optionTitle = document.createElement('h4');
  optionTitle.textContent = `${option.getTitle()}`;
  const optionPrice = document.createElement('p');
  optionPrice.textContent = `${option.getPrice()}`;

  title.appendChild(optionTitle);
  title.appendChild(optionPrice);

  const desc = document.createElement('p');
  desc.classList.add('m-top-10');
  desc.textContent = option.getDescription();

  const container = document.createElement('div');
  container.classList.add('m-top-10');

  container.appendChild(title);
  container.appendChild(desc);

  return container;
};

const createCategory = (catecory, flexDir) => {
  const options = document.createElement('div');
  options.classList.add('options');
  const optionsArr = catecory.getOptions();
  for (let i = 0; i < optionsArr.length; i += 1) {
    const option = createOption(optionsArr[i]);
    options.appendChild(option);
  }
  const image = createImg(catecory.getImg());
  const wrapper = document.createElement('div');
  wrapper.classList.add('flex-md', 'space-between', `${flexDir}`);

  wrapper.appendChild(image);
  wrapper.appendChild(options);
  const title = createTitle(catecory.getTitle());

  const menuCategory = document.createElement('div');
  menuCategory.classList.add('menu-category', 'm-top-20');
  menuCategory.appendChild(title);
  menuCategory.appendChild(wrapper);

  return menuCategory;
};

const menu = () => {
  const item = document.querySelector('.item');

  for (let i = 0; i < categories.length; i += 1) {
    let flexDirection = 'n';
    if (i % 2 === 0) {
      flexDirection = 'reverse';
    }
    const category = createCategory(categories[i], flexDirection);
    item.appendChild(category);
  }
};

export default menu;
