//Footer

const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `Ridge ${thisYear}`;

footer.appendChild(copyright);

//Skills

const skills = ['Construction', 'Coding', 'Welding', 'Cooking'];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("section");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("p");

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// Create Form

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit', (e) => {
    console.log('hello');
    e.preventDefault();

    const userName = e.target.usersName.value;
    const userEmail = e.target.usersEmail.value;
    const userMessage = e.target.usersMessage.value;

    if (userName.trim() === "" || userEmail.trim() === "" || userMessage.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    if (!/\S+@\S+\.\S+/.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
    <br> 
    <span>${userMessage}</span>
    <div class="date">${dateTimeString}</div>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    newMessage.appendChild(removeButton);

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    messageList.appendChild(newMessage);
    e.target.reset();
});

// ajax

const githubRequest = new XMLHttpRequest();
const url = "https://api.github.com/users/TyeCtlm/repos"

githubRequest.open('GET', url);
githubRequest.send();

githubRequest.addEventListener('load', function () {
    const repos = JSON.parse(this.response);
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repos.length; i++) {
        const project = document.createElement("li");
        project.innerHTML = `
        <a href="${repos[i].html_url}">${repos[i].name}</a>
        
        `;
        projectList.appendChild(project);
    } console.log(repos[0]);
});
// <p>${repos[i].description}</p>