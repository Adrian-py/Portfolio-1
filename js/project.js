//Project Detail
const projectDesc = {
  "twitter-clone": {
    title: "Twitter Clone",
    desc: "On this project, I created the front end for a twitter clone. This was my first ever attempt of a project, so the code was admittedly a bit slopy. The technologies used in the project is plain vanilla css and javascript.",
  },
  "kenshin-impact": {
    title: "Kenshin Impact",
    desc: "This project was a final project for my second semester in BINUS University. In particular, this project was for the Human Computer Interaction course. The website is a website about a fictional game called Kenshin Impact. There are in total five pages for this website, including the register, home, characters, gallery and about page.",
  },
  "social-dashboard": {
    title: "Social Dashboard",
    desc: "I found this project through frontendmentor.com. For this project, I tried something new which is SASS. I also tried to improve my workflow, naming conventions and improve accesibility in the website.",
  },
  "stats-preview": {
    title: "Stats Preview",
    desc: "On this project I tried to improve my workflow by using BEM naming conventions to increase my efficiency when writing CSS. I also tried experimenting with accesibility and figure out areas where I need to improve on.",
  },
  "sunnyside-landing-page": {
    title: "Sunnyside Landing Page",
    desc: "This is one of the first projects that I got from frontendmentor. On this project I tried to improve in layouting and practice on making a website more responsive.",
  },
  "profile-card": {
    title: "Profile Card",
    desc: "This is the first ever project that I got from frontendmentor. For this project, I only tried to improve on my CSS skills and using Semantic HTML. After finishing this project, a feedback from the community really got me interested in accesibility and Semantic HTML even more.",
  },
};

const previewBox = document.querySelector(".project-detail__container"),
  boxDesc = document.querySelector(".project-detail__box__desc"),
  boxProjectName = document.querySelector(".project-detail__box__title"),
  overlayBox = document.querySelector(".project-detail__overlay"),
  closeBox = document.querySelector(".project-detail__box__close"),
  project = document.getElementsByClassName(
    "projects__list__cards__card__image__container"
  );
let boxOpen = false;

for (let i = 0; i < project.length; i++) {
  project[i].addEventListener("click", () => {
    let temp = projectDesc[project[i].id];
    boxProjectName.innerHTML = temp.title;
    boxDesc.innerHTML = temp.desc;
    openPreview();
  });
}

closeBox.addEventListener("click", closePreview);
overlayBox.addEventListener("click", closePreview);

function openPreview() {
  previewBox.style.display = "block";
}

function closePreview() {
  previewBox.style.display = "none";
}
