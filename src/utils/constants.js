export const closeBtn = document.querySelectorAll('.popup__close-button');
export const profileEditBtn = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('.popup__container_prof');
export const profileInputName = document.querySelector(
  '.popup__input_type_name'
);
export const profileInputProf = document.querySelector(
  '.popup__input_type_prof'
);
export const profileTitle = document.querySelector('.profile__title');
export const profileSubtitle = document.querySelector('.profile__subtitle');
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileFormEdit = document.querySelector('.popup__form-prof');
export const profileFormAdd = document.querySelector('.popup__form_image-add');
export const profileAvatarEdit = document.querySelector('.popup__form_avatar');
export const profileAddBtn = document.querySelector('.profile__add-button');
export const itemContainer = document.querySelector('.cards');
export const cardElement = document.querySelector('#popup_add-card');
export const popupImage = document.querySelector('.popup__container_image');
export const popupImages = document.querySelector('.popup__images');
export const popupText = document.querySelector('.popup__text');
export const openPopUpSelector = 'popup_opened';
export const escKeyCode = 'Escape';

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

export const validationSetting = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};
