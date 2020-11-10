// export default class FormValidator {
//   constructor(data, formElement) {
//     this.formSelector = data.formSelector;
//     this.inputSelector = data.inputSelector;
//     this.submitButtonSelector = data.submitButtonSelector;
//     this.inactiveButtonClass = data.inactiveButtonClass;
//     this.inputErrorClass = data.inputErrorClass;
//     this.errorClass = data.errorClass;
//     this.formElement = formElement;
//   }
//   _showInputError(
//     formElement,
//     inputElement,
//     errorMessage,
//     inputErrorClass,
//     errorClass
//   ) {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.add(inputErrorClass);
//     errorElement.textContent = errorMessage;
//     errorElement.classList.add(errorClass);
//   }

//   _hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//     inputElement.classList.remove(inputErrorClass);
//     errorElement.classList.remove(errorClass);
//     errorElement.textContent = '';
//   }
//   _isValid(formElement, inputElement, inputErrorClass, errorClass) {
//     if (!inputElement.validity.valid) {
//       this._showInputError(
//         formElement,
//         inputElement,
//         inputElement.validationMessage,
//         inputErrorClass,
//         errorClass
//       );
//     } else {
//       this._hideInputError(
//         formElement,
//         inputElement,
//         inputErrorClass,
//         errorClass
//       );
//     }
//   }

//   _hasInvalidInput(inputList) {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     });
//   }
//   _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
//     if (this._hasInvalidInput(inputList)) {
//       buttonElement.classList.add(inactiveButtonClass);
//       buttonElement.disabled = true;
//     } else {
//       buttonElement.classList.remove(inactiveButtonClass);
//       buttonElement.disabled = false;
//     }
//   }
//   _setEventListeners(formElement) {
//     const inputList = Array.from(
//       formElement.querySelectorAll(this.inputSelector)
//     );
//     const buttonElement = formElement.querySelector(this.submitButtonSelector);

//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', () => {
//         this._isValid(formElement, inputElement);
//         this._toggleButtonState(
//           inputList,
//           buttonElement,
//           this.inactiveButtonClass
//         );
//       });
//     });
//     this._toggleButtonState(inputList, buttonElement, this.inactiveButtonClass);
//   }
//   enableValidation() {
//     this._setEventListeners(this.formElement);
//   }
// }

export default class FormValidator {
  constructor(data, formElement) {
    this.formSelector = data.formSelector;
    this.inputSelector = data.inputSelector;
    this.submitButtonSelector = data.submitButtonSelector;
    this.inactiveButtonClass = data.inactiveButtonClass;
    this.inputErrorClass = data.inputErrorClass;
    this.errorClass = data.errorClass;
    this.formElement = formElement;
  }
  _showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.errorClass);
  }

  _hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = '';
  }
  _isValid(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }
  _setEventListeners(formElement) {
    const inputList = Array.from(
      formElement.querySelectorAll(this.inputSelector)
    );
    const buttonElement = formElement.querySelector(this.submitButtonSelector);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(
          inputList,
          buttonElement,
          this.inactiveButtonClass
        );
      });
    });
    this._toggleButtonState(inputList, buttonElement, this.inactiveButtonClass);
  }
  enableValidation() {
    this._setEventListeners(this.formElement);
  }
}
