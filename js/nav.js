//WINDOW SIZE LISTENER RULES/////////////////////////////////////////////

window.addEventListener("resize", listenerWindowSize);

function listenerWindowSize() {
  var userAgent = navigator.userAgent;
  var hSize = screen.height;
  var wSize = screen.width;

  console.log(userAgent);

  console.log("Alto:", hSize);

  console.log("Ancho:", wSize);

  const heroSection = document.querySelector(".hero");
  const video = document.querySelector("#myVideo");
  const musicWrap = document.querySelector(".musicwrap");

  if (
    (wSize == 812 && hSize == 375) ||
    (wSize == 846 && hSize == 414) ||
    (wSize == 823 && hSize == 411)
  ) {
    console.log("works");
    heroSection.style.top = "20%";
    video.style.left = "0";
    video.style.width = "100vw";
    video.style.height = "initial";
    musicWrap.style.gridTemplateRows = "repeat(6,80vh)";
  } else if (
    (hSize == 812 && wSize == 375) ||
    (hSize == 846 && wSize == 414) ||
    (hSize == 823 && wSize == 411)
  ) {
    heroSection.style.top = "40%";
    video.style.left = "-140%";
    video.style.width = "initial";
    video.style.height = "100vh";
    musicWrap.style.gridTemplateRows = "repeat(12,50vh)";
  } else if (userAgent.match(/iPad/i) && wSize == 1024 && hSize == 768) {
    video.style.left = "0";
    musicWrap.style.gridTemplateColums = "repeat(2,42vw)";
    musicWrap.style.gridTemplateRows = "repeat(6,50vh)";
  } else if (userAgent.match(/iPad/i) && hSize == 1024 && wSize == 768) {
    video.style.left = "-70%";
    musicWrap.style.gridTemplateRows = "repeat(6,30vh)";
  }

  ////NAVIGATION///////////////////////////////////////////////////////

  //////SECTIONS//////////////////////////////////////////////////////

  const sectionContainer = document.querySelector(".slider");
  console.log(sectionContainer);

  const sections = Array.from(sectionContainer.children);
  console.log(sections);

  const amountToMove = wSize;
  console.log(amountToMove);

  const home = document.getElementById("home");
  const bio = document.getElementById("bio");
  const music = document.getElementById("music");
  const gigs = document.getElementById("gigs");
  console.log("hay gigs");
  const mainCont = document.querySelector(".mainCont");
  console.log(mainCont);

  ///////DISTANCE TO MOVE/////////////////////////////////////////////

  ////BUTTONS////////////////////////////////////////////////////////

  const navigation = document.querySelector(".navigation");

  const navbtn = document.querySelectorAll("li a");

  const buttons = Array.from(navbtn);

  navigation.addEventListener("click", (e) => {
    console.log("click");
    e.preventDefault();
    const targetButton = e.target.closest("a");
    if (amountToMove <= 768) return;
    if (!targetButton) return;

    const activeSection = sectionContainer.querySelector(".active");

    const targetIndex = buttons.findIndex((button) => button === targetButton);

    const targetSection = sections[targetIndex];

    sections.forEach((section) => {
      section.style.transform =
        "translateX(" + -amountToMove * targetIndex + "px)";
    });

    activeSection.classList.remove("active");
    targetSection.classList.add("active");

    if (gigs.classList.contains("active")) {
      console.log("contains");
      mainCont.style.overflowY = "scroll";
      console.log("added");
    } else {
      mainCont.style.overflowY = "";
      console.log("removed");
    }
  });
}
listenerWindowSize();
