import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

const closeBtn = document.querySelectorAll('.popup__close-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup__container_prof');
const profileInputName = document.querySelector('.popup__input_type_name');
const profileInputProf = document.querySelector('.popup__input_type_prof');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileFormEdit = document.querySelector('.popup__form-prof');
const profileFormAdd = document.querySelector('.popup__form_image-add');
const profileAddBtn = document.querySelector('.profile__add-button');
const itemContainer = document.querySelector('.cards');
const cardElement = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('.popup__container_image');
const popupImages = document.querySelector('.popup__images');
const popupText = document.querySelector('.popup__text');
const openPopUpSelector = 'popup_opened';
const escKeyCode = 'Escape';

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

const validationSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

export { popupImage, popupImages, popupText, openPopUp };

initialCards.forEach((item) => {
  const card = new Card(item, '#itemTemplate');
  const cardElement = card.generateCard();
  addCardToPage(cardElement);
});

function openProfileModal() {
  profileInputName.value = profileTitle.textContent;
  profileInputProf.value = profileSubtitle.textContent;
  openPopUp(profilePopup);
}

function saveProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = profileInputName.value;
  profileSubtitle.textContent = profileInputProf.value;
  closePopUp(profilePopup);
}

function addCardToPage(card) {
  itemContainer.prepend(card);
}

function openPopUp(element) {
  element.classList.add(openPopUpSelector);
  element.addEventListener('click', eventHandler);
  document.addEventListener('keydown', escKeyHandler);
}

function closePopUp(element) {
  element.classList.remove(openPopUpSelector);
  element.removeEventListener('click', eventHandler);
  document.removeEventListener('keydown', escKeyHandler);
}

function eventHandler(evt) {
  if (evt.target.classList.contains(openPopUpSelector)) {
    closePopUp(evt.target);
  }
}

function escKeyHandler(evt) {
  if (evt.key === escKeyCode) {
    const target = document.querySelector('.popup_opened');
    closePopUp(target);
  }
}

closeBtn.forEach((element) => {
  element.addEventListener('click', function () {
    const target = document.querySelector('.popup_opened');
    closePopUp(target);
  });
});

function addCardItem(evt) {
  evt.preventDefault();
  const data = {
    name: document.forms.image_add.name.value,
    link: document.forms.image_add.prof.value,
  };
  const card = new Card(data, '#itemTemplate');
  const element = card.generateCard();

  addCardToPage(element);
  closePopUp(cardElement);
}

const validatorEditForm = new FormValidator(validationSetting, profileFormEdit);
validatorEditForm.enableValidation();

const validatorAddForm = new FormValidator(validationSetting, profileFormAdd);
validatorAddForm.enableValidation();

editProfileBtn.addEventListener('click', openProfileModal);

profileFormEdit.addEventListener('submit', saveProfileForm);

cardElement.addEventListener('submit', addCardItem);

profileAddBtn.addEventListener('click', function () {
  openPopUp(cardElement);
});
