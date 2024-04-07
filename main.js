const header = document.getElementById("header");

window.onscroll = function () {
  addBorder();
};

window.onbeforeunload = function () {
  window.scrollTo(0, 110);
};

function addBorder() {
  if (document.documentElement.scrollTop > 1 || window.pageYOffset > 1) {
    header.classList.add("lowBorder");
  } else {
    header.classList.remove("lowBorder");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.onload = scrollToTop;
});
