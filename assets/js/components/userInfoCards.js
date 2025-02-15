
export function profile() {
    let profileContainer = document.createElement('div');
    profileContainer.className = "profileContainer";

    let imgWrapper = document.createElement('div');
    imgWrapper.className = "profileimgWrapper";
    let profileimg = document.createElement('img');
    profileimg.className = "profileimg";
    profileimg.src = "../assets/img/avatar-male.svg";
    imgWrapper.append(profileimg);

    let credentialsWrapper = document.createElement('div');
    credentialsWrapper.className = "credentialsWrapper";
    credentialsWrapper.innerText = "testing if this working or not"

    let fullname = document.createElement('label');
    fullname.className = "fullname";

    let title = document.createElement('label');
    title.className = "title";

    let username = document.createElement('label');
    username.className = "username";

    credentialsWrapper.append(fullname, title, username);

    profileContainer.append(imgWrapper, credentialsWrapper);

    return profileContainer;
}