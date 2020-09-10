const closeBtn = document.querySelectorAll('.popup__close-button');
const editProfileBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup__container_prof');
const inputName = document.querySelector('.popup__input_type_name');
const inputProf = document.querySelector('.popup__input_type_prof');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const formProf = document.querySelector('.popup__form-prof');
const profileAddBtn = document.querySelector('.profile__add-button');
const itemContainer = document.querySelector('.cards');
const cardElement = document.querySelector('#popup_add-card');
const popupImage = document.querySelector('.popup__container_image');
const popupImages = document.querySelector('.popup__images');
const itemTemplate = document.querySelector('#itemTemplate').content;
const popupText = document.querySelector('.popup__text');
const imageName = document.querySelector('.popup__input_type_name-image');
const imageLink = document.querySelector('.popup__input_type_prof-link');
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

function openProfileModal() {
  inputName.value = profileTitle.textContent;
  inputProf.value = profileSubtitle.textContent;
  openPopUp(profilePopup);
}

function saveProfileForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputProf.value;
  closePopUp(profilePopup);
}

function addCardElement(cardLink, cardName) {
  const itemElement = itemTemplate.cloneNode(true);
  const cardImage = itemElement.querySelector('.card__images');

  itemElement.querySelector('.card__title').textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = 'Фото ' + cardName;
  cardImage.addEventListener('click', function (evt) {
    popupImages.src = evt.target.src;
    popupImages.alt = cardImage.alt;
    popupText.textContent = evt.target
      .closest('.card')
      .querySelector('.card__title').textContent;
    openPopUp(popupImage);
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
  closePopUp(cardElement);
  cardName.value = '';
  cardLink.value = '';
}

closeBtn.forEach((popUpCloseButton) => {
  popUpCloseButton.addEventListener('click', function (evt) {
    closePopUp(evt.target.parentElement.parentElement);
  });
});

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

editProfileBtn.addEventListener('click', openProfileModal);

formProf.addEventListener('submit', saveProfileForm);

cardElement.addEventListener('submit', addCardItem);

profileAddBtn.addEventListener('click', function () {
  openPopUp(cardElement);
});
