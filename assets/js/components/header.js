export function constructHeader() {
    let header = document.createElement('div');
    header.className = 'header';

    let logo = document.createElement('img');
    logo.className = 'logo';
    logo.src = "../assets/img/logo.svg"

    let headerText = document.createElement('p');
    headerText.className = 'headerText';
    headerText.innerText = 'Welcome to Graphql';


    let logoutbtn = document.createElement('button');
    logoutbtn.className = 'logout';
    logoutbtn.innerHTML = '<img id="logoutSvg" src="../assets/img/Sign-out-01.svg"> <p>Logout</p>'


    header.append(logo, headerText, logoutbtn);

    return header;
}