var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").classList.add("nav-up");
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }

  if (document.documentElement.scrollTop == 0) {
    document.getElementById("navbar").classList.remove("nav-up");
  }
  prevScrollPos = currentScrollPos;
}
