
let skills = [
  {
    name: `HTML`,
    icon:`<i class="fa-brands fa-html5 icon"></i>`
  },
  {
    name: `CSS`,
    icon:`<i class="fa-brands fa-css3-alt icon"></i>`
  },
  {
    name: `JAVASCRIPT`,
    icon:`<i class="fa-brands fa-js icon"></i>`
  },
  {
    name: `REACTJS`,
    icon:`<i class="fa-brands fa-react icon"></i>`
  },
  {
    name: `NODEJS`,
    icon:`<i class="fa-brands fa-node icon"></i>`
  },
  {
    name: `EXPRESSJS`,
    icon:`<i class="fa-brands fa-node-js icon"></i> `
  }
];

let skillEL = document.getElementById('skills-el');
skills.forEach((x)=>{
  skillEL.innerHTML += x.icon; 
})