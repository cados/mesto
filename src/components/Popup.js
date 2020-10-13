export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClosePopup = this._handleClose.bind(this);
    this._escClosePopup = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._escClosePopup);
  }
  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._escClosePopup);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  setEventListeners() {
    document.addEventListener('click', this._handleClosePopup);
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
