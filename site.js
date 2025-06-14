// Image lazy loading
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

// Navbar
$(".section_button").click(function () {
  if (this.id == "english_button") {
    $("#english").show();
    $("#portuguese").hide();
  }

  if (this.id == "portuguese_button") {
    $("#portuguese").show();
    $("#english").hide();
  }
});

// Open tab when clicking in calendar
function addEvent(days) {
  for (let index = 0; index < days.length; index++) {
    days[index].addEventListener("click", showForm, false);
  }
}

$(document).ready(function () {
  addEvent(document.getElementsByClassName("occupied-dayoff"));
  addEvent(document.getElementsByClassName("dayoff"));
  addEvent(document.getElementsByClassName("free"));
});

// Pedido de reserva
function showForm() {
  $("#pedido-reserva-button").hide();
  $("#pedido-reserva-iframe").show();

  $("html, body").animate(
    {
      scrollTop: $("#precos").offset().top,
    },
    0
  );
}

$("#pedido-reserva-button").click(showForm);
