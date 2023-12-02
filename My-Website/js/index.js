const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `Ridge ${thisYear}`;

footer.appendChild(copyright);



const skills = ["Javascript", "HTML", "Welding",];

const skillsSection = document.getElementById("skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");

    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = e.target.userName.value;
    const userEmail = e.target.userEmail.value;
    const userMessage = e.target.userMessage.value;

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>: 
    <span>${userMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener('click', (e) => {
        const entry = removeButton.parentNode;
        entry.remove();
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);
    })

    e.target.reset();
});