import { projectxp } from "../graphql/login.js";
import { fetchcredentials } from "../services/services.js";

export async function projectXp() {
    const data = await fetchcredentials(projectxp);

    console.log(data)

    const svg = document.createElement('svg');
    svg.className = "xpGraph";
    svg.setAttribute('viewBox', "0 0 100 100")
    
    const path = document.createElement('path');
    path.className = "path";
    path.setAttribute('d', "M 10 20 l 15 3 l 20 10")

    svg.append(path);

    return svg;
}