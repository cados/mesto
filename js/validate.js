<<<<<<< HEAD
enableValidation({
=======
const formParameters = {
>>>>>>> feature.function
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
<<<<<<< HEAD
  errorClass: 'popup__error_visible',
});
=======
  errorClass: 'popup__input-error_active',
};

//функция вывода сообщения об ошибке
const showInputError = function (formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(formParameters.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formParameters.errorClass);
};

//функция сокрытия сообщения об ошибке
const hideInputError = function (formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(formParameters.inputErrorClass);
  errorElement.classList.remove(formParameters.errorClass);
  errorElement.textContent = '';
};

//функции проверки формы на валидность
const isValid = function (formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = function (inputList) {
  return inputList.some(function (inputElement) {
    return !inputElement.validity.valid;
  });
};

//функция изменения состояния кнопки
const toggleButtonState = function (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formParameters.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(formParameters.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

//установка слушателей
const setEventListener = function (formElement) {
  const inputList = Array.from(
    formElement.querySelectorAll(formParameters.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    formParameters.submitButtonSelector
  );

  inputList.forEach(function (inputElement) {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = function () {
  const formList = Array.from(
    document.querySelectorAll(formParameters.formSelector)
  );
  formList.forEach(function (formElement) {
    setEventListener(formElement);
  });
};

enableValidation(formParameters);
>>>>>>> feature.function
