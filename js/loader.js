const loader = document.querySelector(".loader");
const clipPath = document.querySelector(".bgpath");
const welcome = document.querySelector(".welcome");
const header = document.querySelector(".header");
const main = document.querySelector(".mainCont");
const footer = document.querySelector(".footerInfo");

setTimeout(() => (welcome.style.opacity = "1"), 200);
setTimeout(() => (welcome.style.opacity = "0"), 1000);
setTimeout(() => {
  var animation = bodymovin.loadAnimation({
    container: document.querySelector(".logoAnim"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "data.json",
  });
}, 1500);
setTimeout(
  () => (loader.style.animation = "polyloader 1300ms ease-in-out forwards"),
  5000
);
setTimeout(
  () => (clipPath.style.animation = "poly 950ms ease-in-out forwards"),
  5350
);
setTimeout(() => {
  header.style.display = "flex";
  main.style.display = "block";
  footer.style.display = "block";
}, 5500);
setTimeout(() => {
  loader.style.display = "none";
  clipPath.style.display = "none";
}, 6500);

/////IFRAMES PREVENT LOADER/////////////////////////////////////////////////////////////////////////////

const iframes = document.querySelectorAll(".sc");

var framesSrc = [
  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/870463987&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/847654036&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/850421983&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/852861697&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/753467311&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/814824601&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/800909356&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/708071005&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/684620683&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/633746331&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/643770186&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",

  "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/509108049&color=%2300eaff&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
];

setTimeout(() => {
  for (var i = 0; i < framesSrc.length; i++) {
    iframes[i].setAttribute("src", framesSrc[i]);
  }
}, 9000);
