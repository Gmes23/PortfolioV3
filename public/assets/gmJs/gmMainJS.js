
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
    $('.gmMenuTop').toggleClass('open2');
    $('.gmMenuBot').toggleClass('open3');
});


// function resizeImage(){
//   var image = jQuery("img");
//   var imageParentElement = jQuery('.col-md-12');
//   var widthRatio = imageParentElement.outerWidth() / imageRatio.width;
//   var heightRatio = imageParentElement.outerHeight() / imageRatio.height;
//   var ratio = Math.max(widthRatio, heightRatio);
//   image.css({
//     width: Math.ceil(ratio*imageRatio.width) ,
//     height: Math.ceil(ratio*imageRatio.height)
//   });
// }
