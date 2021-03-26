const MenuCategory = (title, imgUrl, options) => {
  const getTitle = () => title;
  const getImg = () => imgUrl;
  const getOptions = () => options;

  return {
    getTitle, getImg, getOptions
  };
};

const Option = (title, price, description) => {
  const getTitle = () => title;
  const getPrice = () => price;
  const getDescription = () => description;

  return {
    getTitle, getPrice, getDescription
  };
};

const option1 = Option('Zuffoli di Salsiccia', '6,20', 'Τραγανές φλογέρες με λουκάνικο, κόκκινες πιπεριές και πεκορίνο.');
const mC = MenuCategory('Pizza', '../src/pizza2.jpg', [option1, option1, option1, option1]);
const categories = [mC, mC, mC];

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

function createOption (option) {
  const optionTitle = document.createElement('h4');
  optionTitle.classList.add('color-white');
  optionTitle.textContent = `${option.getTitle()} ${option.getPrice()}`;

  const desc = document.createElement('p');
  desc.classList.add('m-top-10');
  desc.textContent = option.getDescription();

  const container = document.createElement('div');
  container.classList.add('m-top-10');

  container.appendChild(optionTitle);
  container.appendChild(desc);

  return container;
}

function createCategory(catecory, flexDir){
  const options = document.createElement('div');
  options.classList.add('options');
  const optionsArr = catecory.getOptions();
  for (let i =0; i < optionsArr.length; i += 1) {
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
}

export default function menu () {
  const item = document.querySelector('.item');

  for (let i = 0; i < categories.length; i+= 1) {
    let flexDirection = 'n';
    if (i%2 === 0) {
      flexDirection = 'reverse';
    }
    const category = createCategory(categories[i], flexDirection);
    item.appendChild(category);
  }
};
