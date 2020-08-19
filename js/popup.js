const closeBtn = document.querySelector('.popup__close-button');
const editBtn = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup__container');
const inputName = document.querySelector('.popup__input_type_name');
const inputProf = document.querySelector('.popup__input_type_prof');
const name = document.querySelector('.profile__title');
const prof = document.querySelector('.profile__subtitle');
const form = document.querySelector('.popup__form');
const addCardBtn = document.querySelector('.profile__add-button');

function modalOpened() {
  inputName.value = name.textContent;
  inputProf.value = prof.textContent;
  popup.classList.add('popup_opened');
}

function modalClose() {
  popup.classList.remove('popup_opened');
}

function saveForm(e) {
  e.preventDefault();
  name.textContent = inputName.value;
  prof.textContent = inputProf.value;
  modalClose();
}

editBtn.addEventListener('click', modalOpened);
closeBtn.addEventListener('click', modalClose);
form.addEventListener('submit', saveForm);

/**------------------------ */

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

// const initialCards1 = [
//   'Архыз',
//   'Челябинская область',
//   'Иваново',
//   'Камчатка',
//   'Холмогорский район',
//   'Байкал',
// ];

// function cardsRender() {
//   const itemContainer = document.querySelector('.cards');
//   const itemTemplate = document
//     .querySelector('#itemTemplate')
//     .content.cloneNode(true);
//   initialCards.forEach(function (el) {
//     const cardName = el.name;
//     const cardLink = el.link;
//     itemContainer.append(cardName, cardLink);
//   });
// }
// cardsRender();
// initialCards1.forEach(addItemContainer);
