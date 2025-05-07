let count = 0;
document.querySelector(".nav-menu-button").addEventListener("click", () =>{
  if (count % 2 == 0) {
    let myDiv = document.querySelector(".nav-section-mobile-inactive");
    if (myDiv) {
    myDiv.classList.add('nav-section-mobile');
    myDiv.classList.remove('nav-section-mobile-inactive');
    }
  }
  else {
    let myDiv = document.querySelector(".nav-section-mobile");
    if (myDiv) {
    myDiv.classList.add("nav-section-mobile-inactive");
    myDiv.classList.remove("nav-section-mobile");
    }
  }
  count++;
}
);
