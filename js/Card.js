import { popupImage, popupImages, popupText, openPopUp } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content;
    const cardElement = cardTemplate.cloneNode(true);
    return cardElement;
  }
  _showPic(evt) {
    popupImages.src = evt.target.src;
    popupImages.alt = evt.target.alt;
    popupText.textContent = evt.target
      .closest('.card')
      .querySelector('.card__title').textContent;
    openPopUp(popupImage);
  }

  _removeCard(evt) {
    evt.target.parentElement.remove();
  }

  _like(evt) {
    evt.target.classList.toggle('card__like_active');
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.card__images');
    cardImage.src = this._link;
    cardImage.alt = `Фото ${this._name}`;
    this._element.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element
      .querySelector('.card__trash')
      .addEventListener('click', this._removeCard);

    this._element
      .querySelector('.card__like')
      .addEventListener('click', this._like);

    this._element
      .querySelector('.card__images')
      .addEventListener('click', this._showPic);
  }
}
