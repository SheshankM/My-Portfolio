let skills = [
  {
    name: `HTML`,
    icon: `<i class="fa-brands fa-html5 icon"></i>`,
  },
  {
    name: `CSS`,
    icon: `<i class="fa-brands fa-css3-alt icon"></i>`,
  },
  {
    name: `JAVASCRIPT`,
    icon: `<i class="fa-brands fa-js icon"></i>`,
  },
  {
    name: `REACTJS`,
    icon: `<i class="fa-brands fa-react icon"></i>`,
  },
  {
    name: `NODEJS`,
    icon: `<i class="fa-brands fa-node icon"></i>`,
  },
  {
    name: `EXPRESSJS`,
    icon: `<i class="fa-brands fa-node-js icon"></i> `,
  },
];

let projects = [
  {
    projectName: `Task Manager`,
    viewLink:``,
    codeLink:``,
    img:``
  },
  {
    projectName: `ToDo List`,
    viewLink:``,
    codeLink:`https://github.com/SheshankM/simple-Todo-using-PERN`,
    img:``
  },
  {
    projectName: `Social Media Website`,
    viewLink:``,
    codeLink:``,
    img:``
  },
  {
    projectName: `Instagram Clone`,
    viewLink:``,
    codeLink:`https://github.com/SheshankM/Instagram-Clone`,
    img:``
  }

];
let skillEL = document.getElementById("skills-el");

skills.forEach((x) => {
  skillEL.innerHTML += `<div class="icon-container">${x.icon}<div class="skill-name">${x.name}</div></div>`;
});

const toTop = document.querySelector(".gototop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

let projectcontainer = document.querySelector(".projects-container");
let projectname = document.querySelector(".project-name");
let codelink = document.querySelector(".code");
let viewlink = document.querySelector(".view");
function renderProjects(){
  return (
  projectcontainer.innerHTML = projects.map((p)=>{
    return(
    `<div class="project-card" id="project-card">
    <img src="" alt="" />
    <div class="hover-content">
      <div class="project-name">${p.projectName}</div>
      <div class="project-links">
        <a href="${p.codeLink}" class="code">Code</a>
        <a href="${p.viewLink}" class="view">View</a>
      </div>
    </div>
  </div>`
  )
  }).join(""));
};

renderProjects();