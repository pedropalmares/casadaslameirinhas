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
