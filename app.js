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
let skillEL = document.getElementById("skills-el");

skills.forEach((x) => {
  skillEL.innerHTML += `<div class="icon-container">${x.icon}<div class="skill-name">${x.name}</div></div>`;
});



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
  },
  {
    projectName:`Microsoft Todo List Clone`,
    viewlink:``,
    codelink:``,
    img:``,
  },

];



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

const toTop = document.querySelector(".gototop");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 400) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


let experiences = [
  {
    org:"Technical Affairs (IIITDMK)",
    role :'Frontend Developer',
    duration:"Oct - Nov 2022",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi similique harum voluptas officia ad iure, suscipit distinctio numquam accusantium?"
  },
  {
    org:"Vashisth (IIITDMK)",
    role :'Frontend Developer',
    duration:"Dec 2022 - Jan 2023",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum modi similique harum voluptas officia ad iure, suscipit distinctio numquam accusantium?"
  },

]
let exp = document.querySelector('.exp')
function renderExperiences(){
  return(
    exp.innerHTML = experiences.map((experience)=>{
      return(
        `<div class="experience-card">
            <div class="org">${experience.org}</div>
            <div class="role">${experience.role}</div>
            <div class="duration">${experience.duration}</div>
            <div class="description">${experience.description}</div>
          </div>`
      )
    })
  )
}
renderExperiences();


window.addEventListener('scroll',()=>{
  if(window.pageYOffset > 1800){
    exp.classList.add('active');
  }
  else{
    exp.classList.remove('active');
  }
})
