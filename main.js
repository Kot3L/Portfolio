const header = document.getElementById("header");

window.onscroll = function () {
  addBorder();
};

function addBorder() {
  if (document.documentElement.scrollTop > 1 || window.pageYOffset > 1) {
    header.classList.add("lowBorder");
  } else {
    header.classList.remove("lowBorder");
  }
}
