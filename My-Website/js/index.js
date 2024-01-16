// Footer
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Ridge ${thisYear}`;
footer.appendChild(copyright);

// Skills
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
    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a><br><span>${userMessage}</span><div class="date">${dateTimeString}</div>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";
    newMessage.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        entry.remove();
    })

    messageList.appendChild(newMessage);
    e.target.reset();
});

// Fetch GitHub Repositories
fetch("https://api.github.com/users/TyeCtlm/repos")
    .then(response => response.json())
    .then(repos => {
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector("ul");

        repos.forEach(repo => {
            const project = document.createElement("li");
            project.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
            projectList.appendChild(project);
        });
    });
