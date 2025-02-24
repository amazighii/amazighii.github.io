import { projectXp, skillChart } from "../components/graphs.js";
import { constructHeader } from "../components/header.js";
import { auditRatio, levelCard, profile, xpCard } from "../components/userInfoCards.js";
import { profilequery } from "../graphql/login.js";
import { fetchcredentials } from "../services/services.js";

export async function home() {
    let userinfo = await fetchcredentials(profilequery);

    let container = document.querySelector(".container");
    container.innerHTML = "";

    document.body.prepend(constructHeader());

    const projectName = document.createElement('div');
    projectName.className = "projectName";

    let cardsContainer = document.createElement('div');
    cardsContainer.className = "cardsContainer";
   
let credXp = document.createElement('div');
credXp.className =  "credXp";
let levelRatio = document.createElement('div');
levelRatio.className = "levelRatio";

    credXp.append(profile(userinfo.data.user[0].firstName,
        userinfo.data.user[0].lastName, userinfo.data.user[0].login, userinfo.data.user[0].attrs.gender));

    credXp.append(xpCard(userinfo.data.transaction_aggregate.aggregate.sum.amount));

    levelRatio.append(levelCard(userinfo.data.user[0].events[0].level));

    levelRatio.append(auditRatio(userinfo.data.user[0].auditRatio,
        userinfo.data.user[0].totalUp, userinfo.data.user[0].totalDown
    ));

    cardsContainer.append(credXp, levelRatio);

    const graphsHolder = document.createElement('div');
    graphsHolder.className = "graphsHolder";

    graphsHolder.append(projectName);

    graphsHolder.append(await projectXp(projectName));
    graphsHolder.append(await skillChart(projectName, 1120));


    container.append(cardsContainer, graphsHolder);

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(async () => {
            console.log('testing debounce')
            let skillChartWidth = document.querySelector('.skillChart').getBoundingClientRect().width;

            // console.log('help im being resized');
            document.querySelector('.skillChart').innerHTML = "";
            // console.log(document.querySelector('.skillChart').getBoundingClientRect().width)
            await skillChart(projectName, skillChartWidth);
        }, 200);

    })

}