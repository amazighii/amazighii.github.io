import { doughnutChart } from "../utils/graphs.js";
import { auditRatioFixedValue, levelTitle } from "../utils/utils.js";

export function profile(firstName, lastName, login, gender) {

    let profileContainer = document.createElement('div');
    profileContainer.className = "profileContainer";

    let imgWrapper = document.createElement('div');
    imgWrapper.className = "profileimgWrapper";
    let profileimg = document.createElement('img');
    profileimg.className = "profileimg";
    if (gender == 'Male') profileimg.src = "../assets/img/avatar-male.svg";
    else profileimg.src = "../assets/img/avatar-female.svg";
    imgWrapper.append(profileimg);

    let credentialsContainer = document.createElement('div');
    credentialsContainer.className = "credentialsContainer";

    let credentialsWrapper = document.createElement('div');
    credentialsWrapper.className = "credentialsWrapper";

    let fullname = document.createElement('label');
    fullname.className = "fullname";
    fullname.innerText = `${firstName} ${lastName}`

    let title = document.createElement('label');
    title.className = "title";
    title.innerText = "Talent";

    let username = document.createElement('label');
    username.className = "username";
    username.innerText = `${login}`

    credentialsWrapper.append(fullname, title, username);
    credentialsContainer.append(credentialsWrapper);

    profileContainer.append(imgWrapper, credentialsContainer);

    return profileContainer;
}


export function xpCard(xp) {
    const xpContainer = document.createElement("div");
    xpContainer.className = "xpContainer";

    const xpText = document.createElement('div');
    xpText.className = "xpText"
    xpText.innerText = "XP";

    const xpAmountWrapper = document.createElement("div");
    xpAmountWrapper.className = "xpAmountWrapper";

    const xpAmount = document.createElement("label");
    xpAmount.className = "xpAmount";
    xpAmount.innerText = (xp / 1000).toFixed(0)

    xpAmountWrapper.appendChild(xpAmount);

    const hrLine = document.createElement('hr');
    hrLine.className = "hrLine";

    const kbLogoWrapper = document.createElement("div");
    kbLogoWrapper.className = "kbLogoWrapper";

    const kbLogo = document.createElement("label");
    kbLogo.className = "kbLogo";
    kbLogo.innerText = 'kB'

    kbLogoWrapper.appendChild(kbLogo);

    xpContainer.appendChild(xpText);
    xpContainer.appendChild(xpAmountWrapper);
    xpContainer.appendChild(hrLine);
    xpContainer.appendChild(kbLogoWrapper);

    return xpContainer;
}

export function levelCard(levelNb) {
    const levelContainer = document.createElement("div");
    levelContainer.className = "levelContainer";

    const levelText = document.createElement('div');
    levelText.className = "levelText";
    levelText.innerText = "Level";

    const titleWrapper = document.createElement("div");
    titleWrapper.className = "titleWrapper";

    const titleBorder = document.createElement('div');
    titleBorder.className = "titleBorder";

    const proTitel = document.createElement("label");
    proTitel.className = "proTitel";
    proTitel.innerText = levelTitle(levelNb);

    titleBorder.appendChild(proTitel);
    titleWrapper.appendChild(titleBorder);

    const hr = document.createElement("hr");
    // hr.className = "hrLine";

    const levelWrapper = document.createElement("div");
    levelWrapper.className = "levelWrapper";

    const level = document.createElement("label");
    level.className = "level";
    level.innerText = levelNb;

    levelContainer.appendChild(levelText);
    levelWrapper.appendChild(level);
    levelContainer.appendChild(titleWrapper);
    levelContainer.appendChild(hr);
    levelContainer.appendChild(levelWrapper);

    return levelContainer
}

export function auditRatio(auditRatioValue, totalUp, totalDown) {
    const auditContainer = document.createElement("div");
    auditContainer.className = "auditContainer";

    const audtiRatioText = document.createElement('div');
    audtiRatioText.className = "auditRatioText";
    audtiRatioText.innerText = "Audits Ratio";

    const auditRatioWrapper = document.createElement("div");
    auditRatioWrapper.className = "auditRatioWrapper";

    const auditRatio = document.createElement("label");
    auditRatio.className = "auditRatio";
    auditRatio.innerText = auditRatioFixedValue(auditRatioValue);

    auditRatioWrapper.appendChild(auditRatio);

    const hr = document.createElement("hr");
    hr.className = "hrLine";

    const auditGraphWrapper = document.createElement("div");
    auditGraphWrapper.className = "auditGraphWrapper";
    auditGraphWrapper.append(doughnutChart(totalUp, totalDown));

    auditContainer.appendChild(audtiRatioText);
    auditContainer.appendChild(auditRatioWrapper);
    auditContainer.appendChild(hr);
    auditContainer.appendChild(auditGraphWrapper);

    return auditContainer;
}