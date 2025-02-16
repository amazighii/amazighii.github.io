import { isLoggedIn } from "../app/app.js";
import { profilequery } from "../graphql/login.js";

export async function fetchLogin(credentials) {
    try {
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
            isLoggedIn();
        }
    } catch (error) {
        console.error(error);
    }
}


export async function fetchcredentials(query) {
    let url = 'https://learn.zone01oujda.ma/api/graphql-engine/v1/graphql';
    try {
        let response = await fetch(url, {
            method: 'Post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("jwtKey")}`
            },
            body: JSON.stringify({ query: query }),
        })
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.error(error);
    }

}