import { home } from "../templates/home.js";
import { login } from "../templates/login.js";

let jwtKey = localStorage.getItem("jwtKey");

if (jwtKey) {
    home();
} else {
    login();
}