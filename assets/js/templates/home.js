import { projectXp, skillShart } from "../components/graphs.js";
import { constructHeader } from "../components/header.js";
import { auditRatio, levelCard, profile, xpCard } from "../components/userInfoCards.js";
import { profilequery } from "../graphql/login.js";
import { fetchcredentials } from "../services/services.js";

export async function home() {
    let userinfo = await fetchcredentials(profilequery);
    // console.log(userinfo.data.user[0].totalDown);

    let container = document.querySelector(".container");
    container.innerHTML = "";

    document.body.prepend(constructHeader());

    const projectName = document.createElement('div');
    projectName.className = "projectName";

    let cardsContainer = document.createElement('div');
    cardsContainer.className = "cardsContainer";

    cardsContainer.append(profile(userinfo.data.user[0].firstName,
        userinfo.data.user[0].lastName, userinfo.data.user[0].login, userinfo.data.user[0].attrs.gender));

    cardsContainer.append(xpCard(userinfo.data.transaction_aggregate.aggregate.sum.amount));

    cardsContainer.append(levelCard(userinfo.data.user[0].events[0].level));

    cardsContainer.append(auditRatio(userinfo.data.user[0].auditRatio,
        userinfo.data.user[0].totalUp, userinfo.data.user[0].totalDown
    ));

    const graphsHolder = document.createElement('div');
    graphsHolder.className = "graphsHolder";

    graphsHolder.append(projectName);

    graphsHolder.append(await projectXp(projectName));
    graphsHolder.append(await skillShart(projectName));


    container.append(cardsContainer, graphsHolder);
}