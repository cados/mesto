import './index.css';
import {
  validationSetting,
  profileAddBtn,
  profileEditBtn,
  profileInputName,
  profileInputProf,
  profileFormEdit,
  profileFormAdd,
  profileAvatar,
  profileAvatarEdit,
  itemContainer,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithSubmit from '../components/PopupWithSubmit.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';
import Api from '../components/Api.js';

let myId = 0;

const userInfo = new UserInfo({
  name: '.profile__title',
  about: '.profile__subtitle',
  avatar: '.profile__avatar',
});

const cardList = new Section(
  {
    items: [],
    renderer: (item) => {
      createCard(item);
    },
  },
  itemContainer
);

const createCard = function (cardData) {
  const card = new Card(
    cardData,
    handleCardClick,
    handleConfirmRemove,
    handleAddLikes,
    handleRemoveLikes,
    '#itemTemplate',
    myId
  );
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
};

//добавление и удаление лайков
const handleAddLikes = function (card) {
  api
    .addLike(card.getCardId())
    .then((cardData) => {
      card.countLikes(cardData.likes);
    })
    .catch((error) => alert(error));
};

const handleRemoveLikes = function (card) {
  api
    .deleteLike(card.getCardId())
    .then((cardData) => {
      card.countLikes(cardData.likes);
    })
    .catch((error) => alert(error));
};

const confirmSubmitHandler = function (card) {
  api
    .deleteCard(card.getCardId())
    .then(() => {
      card.removeCard();
      popupCofirmRemove.close();
    })
    .catch((error) => alert(error));
};

const formEditSubmitHandler = function (userData) {
  api
    .updateUserData(userData)
    .then((newUserData) => {
      userInfo.setUserInfo(newUserData);
      popupEdit.close();
    })
    .catch((error) => alert(error))
    .finally(() => {
      popupEdit.renderLoading(false);
    });
};

const formAddSubmitHandler = function (cardData) {
  api
    .addNewCard(cardData)
    .then((newCardData) => {
      createCard(newCardData);
      popupAdd.close();
    })
    .catch((error) => alert(error))
    .finally(() => {
      popupAdd.renderLoading(false);
    });
};

const formAvatarSubmitHandler = function (formData) {
  api
    .updateAvatar(formData)
    .then((res) => {
      userInfo.setUserInfo(res);
      popupAvatar.close();
    })
    .catch((error) => alert(error))
    .finally(() => {
      popupAvatar.renderLoading(false);
    });
};

const popupWithImage = new PopupWithImage('.popup__container_image');
const popupEdit = new PopupWithForm(
  '.popup__container_prof',
  formEditSubmitHandler
);
const popupAdd = new PopupWithForm(
  '.popup__container_add',
  formAddSubmitHandler
);
const popupCofirmRemove = new PopupWithSubmit(
  '.popup__container_confirm',
  confirmSubmitHandler
);

const popupAvatar = new PopupWithForm(
  '.popup__container_avatar',
  formAvatarSubmitHandler
);

popupWithImage.setEventListeners();
popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupCofirmRemove.setEventListeners();
popupAvatar.setEventListeners();

//открытие попап подтверждения удаления карточки
const handleConfirmRemove = function (card) {
  popupCofirmRemove.open(card);
};

//открытие попапа
const handleCardClick = function (name, link) {
  popupWithImage.open(name, link);
};

// отрисовка карточек
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-17',
  headers: {
    authorization: '1cc28c27-5ad4-4b72-97ab-db6c8b468da3',
    'content-type': 'application/json',
  },
});

const initialCards = api.getInitialCards();
const initialUserInfo = api.getUserData();
const promises = [initialCards, initialUserInfo];

Promise.all(promises)
  .then((arrays) => {
    myId = arrays[1]._id;
    userInfo.setUserInfo(arrays[1]);
    arrays[0].forEach((card) => {
      createCard(card);
    });
  })
  .catch((error) => alert(error));

// валидация форм
const validatorEditForm = new FormValidator(validationSetting, profileFormEdit);
validatorEditForm.enableValidation();

const validatorAddForm = new FormValidator(validationSetting, profileFormAdd);
validatorAddForm.enableValidation();

const validatorAvatar = new FormValidator(validationSetting, profileAvatarEdit);
validatorAvatar.enableValidation();

profileAddBtn.addEventListener('click', () => {
  popupAdd.open();
});

profileEditBtn.addEventListener('click', () => {
  popupEdit.open();
  const currentUserInfo = userInfo.getUserInfo();
  profileInputName.value = currentUserInfo.name;
  profileInputProf.value = currentUserInfo.about;
});

profileAvatar.addEventListener('click', () => {
  popupAvatar.open();
});
