export default class Card {
  constructor(
    cardData,
    handleCardClick,
    showConfirmPopupHandle,
    likeAddHandler,
    likeRemoveHandler,
    cardSelector,
    myId
  ) {
    this._link = cardData.link;
    this._name = cardData.name;
    this._likes = cardData.likes;
    this._id = cardData._id;
    this._ownerId = cardData.owner._id;
    this._handleCardClick = handleCardClick;
    this._showConfirmPopupHandle = showConfirmPopupHandle;
    this._likeAddHandler = likeAddHandler;
    this._likeRemoveHandler = likeRemoveHandler;
    this._cardSelector = cardSelector;
    this._myId = myId;
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

  _showConfirmMessage() {
    this._showConfirmPopupHandle(this);
  }

  getCardId() {
    return this._id;
  }

  removeCard() {
    this._element.remove();
  }

  _likeToggle() {
    this._buttonLike.classList.toggle('card__like_active');

    if (this._buttonLike.classList.contains('card__like_active')) {
      this._likeAddHandler(this);
    } else {
      this._likeRemoveHandler(this);
    }
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector('.card__images');
    cardImage.src = this._link;
    cardImage.alt = `Фото ${this._name}`;

    this._buttonLike = this._element.querySelector('.card__like');
    this._buttonRemove = this._element.querySelector('.card__trash');

    if (this._ownerId === this._myId) {
      this._buttonRemove.classList.add('card__trash_active');
    }

    if (
      this._likes.some((item) => {
        return item._id === this._myId;
      })
    ) {
      this._buttonLike.classList.add('card__like_active');
    }

    this._element.querySelector('.card__title').textContent = this._name;
    this.countLikes(this._likes);
    this._setEventListeners();
    return this._element;
  }

  countLikes(likes) {
    this._element.querySelector('.card__count').textContent = likes.length;
  }

  _setEventListeners() {
    if (this._ownerId === this._myId) {
      this._buttonRemove.addEventListener('click', () => {
        this._showConfirmMessage();
      });
    }
    this._buttonLike.addEventListener('click', () => {
      this._likeToggle();
    });

    this._element
      .querySelector('.card__images')
      .addEventListener('click', () => {
        this._showImg();
      });
  }
}
