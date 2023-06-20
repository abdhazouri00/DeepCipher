window.addEventListener('scroll', function () {
    var container2 = document.getElementById('container2');
    var container2Position = container2.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
  
    if (container2Position < screenPosition) {
      container2.classList.add('show');
    }
  });

window.addEventListener("scroll", function() {
    var container = document.querySelector(".container15");
    var scrollPosition = window.scrollY || window.pageYOffset;
  
    if (scrollPosition > 0) {
      container.classList.add("drop-down");
    } else {
      container.classList.remove("drop-down");
    }
});
  