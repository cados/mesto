import Popup from './Popup.js';
import { popupImages, popupText } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {
    super.open();

    popupImages.src = link;
    popupImages.alt = 'Изображение места ' + name;
    popupText.textContent = name;
  }
}
