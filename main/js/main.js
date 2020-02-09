// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.portfolio-grid').isotope({
  itemSelector: '.item'
});

// store filter for each group
var filters = {};

$('#portfolio').on( 'click', 'button', function( event ) {
  var $button = $( event.currentTarget );
  // get group key
  var $buttonGroup = $button.parents('.button-group');
  var filterGroup = $buttonGroup.attr('data-filter-group');
  // set filter for group
  filters[ filterGroup ] = $button.attr('data-filter');
  // combine filters
  var filterValue = concatValues( filters );
  // set filter for Isotope
  $grid.isotope({ filter: filterValue });
});


// flatten object by concatting values
function concatValues( obj ) {
  var value = '';
  for ( var prop in obj ) {
    value += obj[ prop ];
  }
  return value;
}


// change checked class on buttons
$('.portfolio-nav').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function( event ) {
    $buttonGroup.find('.checked').removeClass('checked');
    var $button = $( event.currentTarget );
    $button.addClass('checked');
  });
});

//top-scroll
$(".top-scroll").click(function(){
  $('html, body').animate({
  scrollTop: $("#top").offset().top - 100
  }, 600);
});
