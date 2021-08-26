class FormValidation {
    constructor(form) {
        this._form = form;
        this._inputList = Array.from(this._form.querySelectorAll('.form__input'))
        this._btnElem = document.querySelector('.form__submit')
    }

    toggleBtnState() {
        const isInvalidInput = this._inputList.some(inputElement => !inputElement.validity.valid);
        if(isInvalidInput) {
          this._inactiveButtonSubmit();
        }
        else {
          this._activateButtonSubmit();
        }
    }

    _inactiveButtonSubmit() {
        this._btnElem.setAttribute('disabled', true);
        this._btnElem.classList.add('form__submit_disabled');
    }
    
    _activateButtonSubmit() {
        this._btnElem.removeAttribute('disabled', true);
        this._btnElem.classList.remove('form__submit_disabled');
    }

    _setEventListeners() {
        this._inactiveButtonSubmit();
        this._inputList.forEach((inputElement) => {
          inputElement.addEventListener('input', () => {
            this.toggleBtnState();
          });
        });
    }

    enableValidation() {
        this._form.addEventListener('submit', evt => evt.preventDefault())
        this._setEventListeners()
    }
}

const form = document.querySelector('.form')
const validation = new FormValidation(form)
validation.enableValidation()
