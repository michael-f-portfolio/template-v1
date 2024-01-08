import Header from "components/header";
import Footer from "components/footer";
import MainContent from "../../components/mainContent";

export default class MainController {
  constructor() {
    this.body = document.querySelector("body");
    this.copyrightInfo = "Copyright © 2024 Michael F.";
    this.copyrightSource = "https://github.com/michael-f-portfolio";
  }

  initialize() {
    this.header = new Header(this.body, "My Template Header Title");
    this.mainContent = new MainContent(this.body, "My Main Content");
    this.footer = new Footer(
      this.body,
      this.copyrightInfo,
      this.copyrightSource
    );
  }
}
