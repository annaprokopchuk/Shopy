// slic-slider 
$('.slider').slick({
	dots: true,
	vertical: true,
	verticalSwiping: true,
	appendDots: '.appendDots'
});

// menu
function toggler() {
	$('[data-toggler]').on('click', function(e) {
    	e.preventDefault();
    	var $this = $(this);
    	var hash = $this.attr('href') || $this.data('target');
    	if (!hash) return false;
    	$this.toggleClass('is-active');
    	$(hash).toggleClass('is-show');
    })
}
toggler();

// slider-product
$('.slider-big-item').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-sm-item'
});
$('.slider-sm-item').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.slider-big-item',
	// dots: true,
	centerPadding : '0px',
	centerMode: true,
	focusOnSelect: true
});
