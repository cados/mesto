export default class Card {
  constructor(name, link, handleCardClick, cardSelector) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector(this._cardSelector).content
      .children[0];

    const cardElement = cardTemplate.cloneNode(true);
    return cardElement;
  }
  _showImg() {
    this._handleCardClick(this._name, this._link);
  }

  _removeCard() {
    this._element.remove();
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
      .addEventListener('click', () => {
        this._removeCard();
      });

    this._element
      .querySelector('.card__like')
      .addEventListener('click', this._like);

    this._element
      .querySelector('.card__images')
      .addEventListener('click', () => {
        this._showImg();
      });
  }
}
