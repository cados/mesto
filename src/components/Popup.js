export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClose = this._handleClose.bind(this);
    this._escClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._escClose);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._escClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    document.addEventListener('click', this._handleClose);
  }

  _handleClose(evt) {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      this.close();
    }
  }
}
