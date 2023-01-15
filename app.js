
let skills = [
  {
    name: `HTML`,
    icon:`<i class="fa-brands fa-html5"></i>`
  },
  {
    name: `CSS`,
    icon:`<i class="fa-brands fa-css3-alt"></i>`
  },
  {
    name: `JAVASCRIPT`,
    icon:`<i class="fa-brands fa-js"></i>`
  },
  {
    name: `REACTJS`,
    icon:`<i class="fa-brands fa-react"></i>`
  },
  {
    name: `NODEJS`,
    icon:`<i class="fa-brands fa-node"></i>`
  },
  {
    name: `EXPRESSJS`,
    icon:`<i class="fa-brands fa-node-js"></i> `
  }
];

let skillEL = document.getElementById('skills-el1');
skills.forEach((x)=>{
  skillEL.innerHTML += x.icon; 
})