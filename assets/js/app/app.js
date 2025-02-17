import { home } from "../templates/home.js";
import { login } from "../templates/login.js";


export function isLoggedIn() {
let jwtKey = localStorage.getItem("jwtKey");
    if (jwtKey) {
        home();
    } else {
        login();
    }
}
isLoggedIn();