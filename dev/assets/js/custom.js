$(document).ready(function() {

    $('.first-screen-slider').slick({
        dots:true,
        appendArrows:'.first-screen-nav',
        responsive: [
            {
              breakpoint: 991,
              settings: {
                arrows: false,
              }
            },
            
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
}
)


const burger = document.querySelector('.hamburger');

burger.addEventListener('click', function() {
    burger.classList.toggle('is-active')
})




document.getElementById('fileinput').onchange = function(){
    document.getElementById('file-Name').innerHTML = this.value;
}


const checkButton = document.querySelectorAll('[type="checkbox"]');
  
  checkButton.forEach((item, index) => {
    //index === 0? item.closest('.input-box').classlist.add(has-checkbox): null;

    //item.closest('.calculation-column').classList.add('test-margin');
    item.closest('.calculation-column').style.marginBottom = "-5px";
  })

  


