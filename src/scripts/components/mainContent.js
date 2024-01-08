import "styles/mainContent.css";

export default class MainContent {
  constructor(parentElement, content) {
    this.parent = parentElement;

    this.mainContentContainer = document.createElement("div");
    this.mainContentContainer.id = "main-content-container";

    this.header = document.createElement("h2");
    this.header.textContent = content;

    this.mainContentContainer.appendChild(this.header);
    this.parent.appendChild(this.mainContentContainer);
  }
}
