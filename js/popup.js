let closeBtn = document.querySelector('.popup__close-button');
let editBtn = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup__container');
let inputName = document.querySelector('.popup__input_type_name');
let inputProf = document.querySelector('.popup__input_type_prof');
let name = document.querySelector('.profile__title');
let prof = document.querySelector('.profile__subtitle');
let form = document.querySelector('.popup__form');

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
