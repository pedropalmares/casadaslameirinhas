document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");

  function lazyload() {
    lazyloadImages.forEach(function (img) {
      img.src = img.dataset.src;
      img.classList.remove("lazy");
    });
  }

  window.addEventListener("load", lazyload);
});

$(".section_button").click(function () {
  $("section").hide();
  $("#" + this.id.replace("_button", "")).show();
  window.scrollTo(0, 0);
});

function openTab() {
  window.open("https://forms.gle/f2kZtPYy755ooUpa6", "_blank");
}

function addEvent(days) {
  for (let index = 0; index < days.length; index++) {
    days[index].addEventListener("click", openTab, false);
  }
}

$(document).ready(function () {
  addEvent(document.getElementsByClassName("occupied-dayoff"));
  addEvent(document.getElementsByClassName("dayoff"));
  addEvent(document.getElementsByClassName("free"));
});
