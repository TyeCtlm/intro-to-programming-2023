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
const messageForm = document.getElementsByName("leave_message");
messageForm.addEventListener('submit', (e) => {
    const yourName = document.getElementById("userName");
    const email = document.getElementById("email");
    const userMessage = document.getElementById("userMessage");
});