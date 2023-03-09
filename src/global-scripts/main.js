/// Main JavaScript File
/// Here we import all the global JavaScript files we need for our project.

import "../global-styles/style.scss";

{
  const proceedButton = document.querySelector(".proceedButton-js");

  proceedButton.addEventListener("click", () => {
    proceedButton.textContent = "";
    const loaderDiv = document.createElement("div");
    loaderDiv.classList.add("loader");
    proceedButton.appendChild(loaderDiv);
  });
}
