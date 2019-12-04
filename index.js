function navFunction() {
  var x = document.getElementById("hamburger-nav");
  if (x.className === "burger-nav") {
    x.className += " responsive";
  } else {
    x.className = "burger-nav";
  }
}