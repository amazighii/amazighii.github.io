import { home } from "../templates/home.js";

export async function fetchLogin(credentials) {
    let response = await fetch('https://learn.zone01oujda.ma/api/auth/signin', {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Basic ${credentials}`
        },
    })
    if (!response.ok) {
        let showerror = document.querySelector('.showerror');
        showerror.innerText = "Invalid Credentials";
    } else {
        localStorage.setItem("jwtKey", await response.json())
        let container = document.querySelector(".container");
        container.innerHTML = "";
        home();
    }
}