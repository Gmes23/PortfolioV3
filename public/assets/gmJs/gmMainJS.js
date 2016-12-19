
// $('.gmMenuLogo').click(function(e){
//   e.preventDefault();
// $(".gmNav").animate({width:'toggle'},600);
// $(".gmMenuLogo").css('display', 'none');
//
// });
//
// $('.gmReopen').click(function(e){
//   e.preventDefault();
// $(".gmNav").animate({width:'toggle'},600);
// $(".gmMenuLogo").css('display', 'block');
//
// });


$('.gmMenuLogo').on('click', function() {
    $('.gmNav').toggleClass('open');
    $('.gmMenuLogo').toggleClass('open');
});

$('.grid').masonry({
  // options...
  itemSelector: '.grid-item'
});
