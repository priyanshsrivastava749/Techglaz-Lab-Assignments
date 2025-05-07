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

// const target_left_timeline_content = document.querySelectorAll(
//   ".left-timeline-content "
// );
// //node returned now we would traverse for the whole loop
// for (let i = 0; i < target_left_timeline_content.length; i++){
//   const target = target_left_timeline_content[i];

//   window.addEventListener(
//     'scroll', () => {
//       const position = target.getBoundingClientRect();
//       const winHeight = window.innerHeight;
//       if ( (position.top < winHeight && position.bottom > 0)) {
//         target.classList.add('left-timeline-content-animation');
//       }
//       setTimeout(() => {
//         target.classList.remove("left-timeline-content-animation");
//       }, 800);
//     }
//   );
// }



// const target_right_timeline_content = document.querySelectorAll(
//   ".right-timeline-content"
// );
// //node returned now we would traverse for the whole loop
// for (let i = 0; i < target_right_timeline_content.length; i++) {
//   const target = target_right_timeline_content[i];

//   window.addEventListener('scroll', () => {
//     const position = target.getBoundingClientRect();
//     const winHeight = window.innerHeight;
//     if (position.top < winHeight && position.bottom > 0) {
//       target.classList.add("right-timeline-content-animation");
//     }
//     setTimeout(() => {
//       target.classList.remove("right-timeline-content-animation");
//     }, 800);
//   });
// }

const target_left_timeline_content = document.querySelectorAll(
  ".left-timeline-content"
);
const target_right_timeline_content = document.querySelectorAll(
  ".right-timeline-content"
);

let scrollTimeout;

window.addEventListener("scroll", () => {
  clearTimeout(scrollTimeout); // Scroll ho raha hai to purana timeout hata do

  scrollTimeout = setTimeout(() => {
    const winHeight = window.innerHeight;

    // Left wale elements ke liye
    for (let i = 0; i < target_left_timeline_content.length; i++) {
      const target = target_left_timeline_content[i];
      const position = target.getBoundingClientRect();

      if (position.top < winHeight && position.bottom > 0) {
        target.classList.add("left-timeline-content-animation");

        setTimeout(() => {
          target.classList.remove("left-timeline-content-animation");
        }, 800); // Animation duration
      }
    }

    // Right wale elements ke liye
    for (let i = 0; i < target_right_timeline_content.length; i++) {
      const target = target_right_timeline_content[i];
      const position = target.getBoundingClientRect();

      if (position.top < winHeight && position.bottom > 0) {
        target.classList.add("right-timeline-content-animation");

        setTimeout(() => {
          target.classList.remove("right-timeline-content-animation");
        }, 800); // Animation duration
      }
    }
  }, 220); 
});
