import { home } from "../templates/home.js";
import { login } from "../templates/login.js";

let jwtKey = localStorage.getItem("jwtKey");

export function isLoggedIn() {
    if (jwtKey) {
        home();
    } else {
        login();
    }
}
isLoggedIn();