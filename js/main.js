const closeBtn = document.querySelector('.popup__close-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__container');
const popupList = Array.from(document.querySelectorAll('.popup'));
const inputName = document.querySelector('.popup__input_type_name');
const inputProf = document.querySelector('.popup__input_type_prof');
const name = document.querySelector('.profile__title');
const prof = document.querySelector('.profile__subtitle');
const formProf = document.querySelector('.popup__form-prof');
const addCardBtn = document.querySelector('.profile__add-button');
const itemContainer = document.querySelector('.cards');
const cardElement = document.querySelector('#popup_add-card');
const closePlaceBtn = document.querySelector('#popup__close');
//const imgContainer = document.querySelector('.card__images');
const closeBtnImg = document.querySelector('.popup__close-button_img');
const popupImage = document.querySelector('.popup__container_image');
const popupImages = document.querySelector('.popup__images');
//const popupAddImage = document.querySelector('.popup__form_image-add');
const itemTemplate = document.querySelector('#itemTemplate').content;
const popupText = document.querySelector('.popup__text');
const imageName = document.querySelector('.popup__input_type_name-image');
const imageLink = document.querySelector('.popup__input_type_prof-link');
const escKeyCode = 'Escape';
//const formImage = document.forms.image;

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

// function toggleClass() {
//   popup.classList.toggle('popup_opened');
// }

function modalOpened() {
  inputName.value = name.textContent;
  inputProf.value = prof.textContent;
  togglePopup(popup);
}

function saveForm(evt) {
  evt.preventDefault();
  name.textContent = inputName.value;
  prof.textContent = inputProf.value;
  togglePopup(popup);
}

function addCardElement(cardLink, cardName) {
  const itemElement = itemTemplate.cloneNode(true);
  const cardImage = itemElement.querySelector('.card__images');

  itemElement.querySelector('.card__title').textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = 'Фото ' + cardName;

  cardImage.addEventListener('click', function (evt) {
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

function renderCards() {
  initialCards.forEach(function (element) {
    const cardLink = element.link;
    const cardName = element.name;
    itemContainer.append(addCardElement(cardLink, cardName));
  });
}

renderCards();

function addCardItem(evt) {
  evt.preventDefault();
  const cardName = imageName.value;
  const cardLink = imageLink.value;
  itemContainer.prepend(addCardElement(cardLink, cardName));
  togglePopup(cardElement);
  cardName.value = '';
  cardLink.value = '';
}

function closePopupByOverlay() {
  popupList.forEach((element) => {
    element.addEventListener('click', function (evt) {
      evt.target.classList.remove('popup_opened');
    });
  });
}

closePopupByOverlay();

function closePopupByEsc() {
  document.body.addEventListener('keydown', function (evt) {
    if (evt.key === escKeyCode) {
      popupList.forEach((item) => {
        item.childNodes[1].classList.remove('popup_opened');
      });
    }
  });
}

closePopupByEsc();

editProfileBtn.addEventListener('click', modalOpened);

closeBtn.addEventListener('click', function () {
  togglePopup(popup);
});

formProf.addEventListener('submit', saveForm);

cardElement.addEventListener('submit', addCardItem);
addCardBtn.addEventListener('click', function () {
  togglePopup(cardElement);
});
closePlaceBtn.addEventListener('click', function () {
  togglePopup(cardElement);
});

closeBtnImg.addEventListener('click', function () {
  togglePopup(popupImage);
});
