import { constructHeader } from "../components/header.js";
import { profile } from "../components/userInfoCards.js";

export function home() {
    let container = document.querySelector(".container");
    container.innerHTML = "";

    document.body.prepend(constructHeader());

    let cardsContainer = document.createElement('div');
    cardsContainer.className = "cardsContainer";

    cardsContainer.append(profile());
    container.append(cardsContainer);
}