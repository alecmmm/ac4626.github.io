var slider = document.getElementById("myRange");

slider.oninput = function() {
  document.getElementById("display_image").src = "images/" + this.value + ".jpg";
}
