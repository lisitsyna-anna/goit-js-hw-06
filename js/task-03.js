const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryListEl = document.querySelector('.gallery');

const makeGalleryMarkup = images => {
  return images
    .map(({ url, alt }) => {
      return `<li class = "gallery__item"><img src = "${url}" alt = "${alt}" width = "320" height = "200" class = "gallery__img"></li>`;
    })
    .join('');
};

const galleryMarkup = makeGalleryMarkup(images);

galleryListEl.insertAdjacentHTML('afterbegin', galleryMarkup);