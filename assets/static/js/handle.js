$(function(){

var $handle = $('.handle');
var $building = $('.building');

var $selector = $building.find('.item-1-1');
window.$selector = $selector;

$handle.on('click', '.item', function(e) {
  var $item = $(this);
  $handle.find('.item').removeClass('selector');
  $item.addClass('selector');

  var x = $item.data('x');
  var y = $item.data('y');
  var sel = `.item-${x}-${y}`;

  var $sel = $building.find(sel);
  if ($sel.data('x') !== $selector.data('x')
      || $sel.data('y') !== $selector.data('y')) {
    $selector.removeClass('tiger');
    if ($selector.data('x') < $sel.data('x')) {
      $sel.css('transform', 'rotateY(180deg)');
    } else if ($selector.data('x') > $sel.data('x')) {
      $sel.css('transform', 'none');
    }
    $selector = $sel;
    $selector.addClass('tiger');
  }
});

});
