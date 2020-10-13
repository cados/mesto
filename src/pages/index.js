import './index.css';
import {
  initialCards,
  validationSetting,
  profileAddBtn,
  profileEditBtn,
  profileInputName,
  profileInputProf,
  profileFormEdit,
  profileFormAdd,
  itemContainer,
} from '../utils/constants.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import FormValidator from '../components/FormValidator.js';

const handleCardClick = function (name, link) {
  popupWithImage.open(name, link);
};

const createCard = function (cardData) {
  const card = new Card(
    cardData.name,
    cardData.link,
    handleCardClick,
    '#itemTemplate'
  );
  const cardElement = card.generateCard();
  cardsList.addItem(cardElement);
};

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      createCard(item);
    },
  },
  itemContainer
);

cardsList.renderItems();

const formEditSubmitHandler = function (userData) {
  userInfo.setUserInfo(userData);
  popupEdit.close();
};

const formAddSubmitHandler = function (cardData) {
  createCard(cardData);
  popupAdd.close();
};

const popupAdd = new PopupWithForm(
  '.popup__container_add',
  formAddSubmitHandler
);
const popupEdit = new PopupWithForm(
  '.popup__container_prof',
  formEditSubmitHandler
);
const popupWithImage = new PopupWithImage('.popup__container_image');

profileAddBtn.addEventListener('click', () => {
  popupAdd.open();
});

profileEditBtn.addEventListener('click', () => {
  popupEdit.open();
  const currentUserInfo = userInfo.getUserInfo();
  profileInputName.value = currentUserInfo.name;
  profileInputProf.value = currentUserInfo.prof;
});

const userInfo = new UserInfo({
  name: '.profile__title',
  prof: '.profile__subtitle',
});

popupAdd.setEventListeners();
popupEdit.setEventListeners();
popupWithImage.setEventListeners();

const validatorEditForm = new FormValidator(validationSetting, profileFormEdit);
validatorEditForm.enableValidation();

const validatorAddForm = new FormValidator(validationSetting, profileFormAdd);
validatorAddForm.enableValidation();
