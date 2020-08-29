const closeBtn = document.querySelector('.popup__close-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input_type_name');
const inputProf = document.querySelector('.popup__input_type_prof');
const name = document.querySelector('.profile__title');
const prof = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const addCardBtn = document.querySelector('.profile__add-button');
const itemContainer = document.querySelector('.cards');
const addCard = document.querySelector('#popup_add-card');
const closePlaceBtn = document.querySelector('#popup__close');
const imgContainer = document.querySelector('.card__images');
const closeBtnImg = document.querySelector('.popup__close-button_img');
const popupImage = document.querySelector('.popup__container_image');
const popupImages = document.querySelector('.popup__images');
const popupAddImage = document.querySelector('.popup__form_image-add');
const itemTemplate = document.querySelector('#itemTemplate').content;
const popupText = document.querySelector('.popup__text');
const imageName = document.querySelector('.popup__input_type_name-image');
const imageLink = document.querySelector('.popup__input_type_prof-link');

const initialCards = [
  {
    name: 'Архыз',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link:
      'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

function togglePopup(target) {
  target.classList.toggle('popup_opened');
}

function toggleClass() {
  popup.classList.toggle('popup_opened');
}

function modalOpened() {
  inputName.value = name.textContent;
  inputProf.value = prof.textContent;
  toggleClass();
}

function saveForm(e) {
  e.preventDefault();
  name.textContent = inputName.value;
  prof.textContent = inputProf.value;
  toggleClass();
}

function addCards(cardLink, cardName) {
  const itemElement = itemTemplate.cloneNode(true);

  itemElement.querySelector('.card__title').textContent = cardName;
  itemElement.querySelector('.card__images').src = cardLink;
  itemElement.querySelector('.card__images').alt = 'Фото ' + cardName;

  itemElement
    .querySelector('.card__images')
    .addEventListener('click', function (evt) {
      popupImages.src = evt.target.src;
      popupText.textContent = evt.target
        .closest('.card')
        .querySelector('.card__title').textContent;
      togglePopup(popupImage);
    });

  itemElement
    .querySelector('.card__trash')
    .addEventListener('click', function (evt) {
      evt.target.parentElement.remove();
    });

  itemElement
    .querySelector('.card__like')
    .addEventListener('click', function (evt) {
      evt.target.classList.toggle('card__like_active');
    });

  return itemElement;
}

function renderCard() {
  initialCards.forEach(function (element) {
    const cardLink = element.link;
    const cardName = element.name;
    itemContainer.append(addCards(cardLink, cardName));
  });
}

renderCard();

function addCardItem(evt) {
  //evt.target.preventDefault();
  evt.preventDefault();
  const cardName = imageName.value;
  const cardLink = imageLink.value;
  itemContainer.prepend(addCards(cardLink, cardName));
  togglePopup(popup);
  cardName.value = '';
  cardLink.value = '';
}

editProfileBtn.addEventListener('click', modalOpened);

closeBtn.addEventListener('click', toggleClass);

form.addEventListener('submit', saveForm);

addCard.addEventListener('submit', addCardItem);

addCardBtn.addEventListener('click', function () {
  togglePopup(addCard);
});

closePlaceBtn.addEventListener('click', function () {
  togglePopup(addCard);
});

closeBtnImg.addEventListener('click', function () {
  togglePopup(popupImage);
});
