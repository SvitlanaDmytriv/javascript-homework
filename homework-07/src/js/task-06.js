const inputEl = document.querySelector('#validation-input')

inputEl.onblur = function () {
    console.log(this.value.length);
    if (this.getAttribute('data-length') > this.value.length || this.getAttribute('data-length') < this.value.length) {
    this.classList.add('invalid');
  } else {
    this.classList.remove('invalid');
    this.classList.add('valid');
  }
};
