import "styles/index.css";

const title = document.createElement("h1");
title.textContent = "index.js loaded";
title.classList.add("title");

const body = document.querySelector("body");
body.appendChild(title);
