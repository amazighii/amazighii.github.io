import { projectxp } from "../graphql/login.js";
import { fetchcredentials } from "../services/services.js";

export async function projectXp(graphHolder) {
    const svgNS = "http://www.w3.org/2000/svg";

    const data = await fetchcredentials(projectxp);

    console.log(data.data.transaction)

    const width = 300;
    const height = 150;
    const padding = 20;

    const maxValue = Math.max(...data.data.transaction.map(item => item.amount));
    // console.log(maxValue)

    const xStep = (width - 2 * padding) / (data.data.transaction.length - 1);

    const scaleY = (value) => height - padding - (value / maxValue) * (height - 2 * padding);

    let pathD = `M ${padding},${scaleY(data.data.transaction[0].amount)}`;
    data.data.transaction.forEach((value, index) => {
        const x = padding + index * xStep;
        const y = scaleY(value.amount);
        // console.log('value', x)
        pathD += ` L ${x},${y}`;
    });

    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    svg.classList.add("xpGraph");

    const path = document.createElementNS(svgNS, "path");
    // console.log(pathD)
    path.setAttribute("d", pathD);
    path.setAttribute("stroke", "black");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("fill", "none");

    svg.appendChild(path);

    const projectName = document.createElement('div');
    projectName.className = "projectName";
    graphHolder.append(projectName);

    data.data.transaction.forEach((value, index) => {
        const circle = document.createElementNS(svgNS, "circle");
        const x = padding + index * xStep;
        const y = scaleY(value.amount);
        circle.classList.add("circle")
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", 3);
        circle.setAttribute("fill", "#626161");
        svg.appendChild(circle);

        circle.addEventListener('mouseover', (e) => {
            projectName.innerHTML = `${(value.amount/1000).toFixed(1)}kB`;
            projectName.style.display = "block";
            projectName.style.transform = `translate(${e.clientX+5}px, ${e.clientY -25}px)`

        })
        circle.addEventListener('mouseout', ()=> {
            projectName.style.display = "none";
        })
    });





    return svg;


}