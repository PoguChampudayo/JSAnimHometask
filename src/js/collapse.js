export default class CollapsableWidget {
  constructor() {
    this.button = document.querySelector(".collapse-button");
    this.textArea = document.querySelector(".text");
  }

  init() {
    this.button.addEventListener("click", (evt) => {
      evt.preventDefault();
      this.textArea.classList.toggle("open");
    });
  }
}
