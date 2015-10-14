// $('a[href*=#]:not([href=#])').not('#myCarousel a, .modal-trigger a, .panel a').click(function(o){
// 	if (localtion.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || localtion.hostname == this.hostname){
// 		var target = $(this.hash);
//       	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       	if (target.length) {
//         	if ($(".navbar").css("position") == "fixed"){
//         		$('html,body').animate({
//         			scrollTop: target.offset().top - 72
//         		}, 700, 'swing');
//         	} else{
//         		$('html,body').animate({
//         			scrollTop: target.offset().top
//         		}, 700, 'swing');
//         	}
//         	return false;
//      	}	
// 	}
// });


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -56
        }, 1000);
        return false;
      }
    }
  });
});