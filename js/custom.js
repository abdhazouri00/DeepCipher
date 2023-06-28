// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// owl carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
})




// Add a class to the input when it is focused
document.querySelector('input').addEventListener('focus', function() {
    this.classList.add('english-input');
  });
  
  // Remove the class when the input loses focus
  document.querySelector('input').addEventListener('blur', function() {
    this.classList.remove('english-input');
  });
  