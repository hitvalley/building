$(function(){

var $handle = $('.handle');
var $building = $('.building');

var $selector = $building.find('.item-1-1');

$handle.on('click', '.item', function(e) {
  var $item = $(this);
  $handle.find('.item').removeClass('selector');
  $item.addClass('selector');

  var x = $item.data('x');
  var y = $item.data('y');
  var sel = `.item-${x}-${y}`;

  var $sel = $building.find(sel);
  var hasTrans = $selector.hasClass('trans-y');
  if ($sel.data('x') !== $selector.data('x')
      || $sel.data('y') !== $selector.data('y')) {
    $selector.removeClass('tiger');
    $selector.removeClass('trans-y');
    if ($selector.data('x') < $sel.data('x')) {
      $sel.addClass('trans-y');
    } else if ($selector.data('x') > $sel.data('x')) {
      $sel.removeClass('trans-y');
    } else {
      hasTrans ? $sel.addClass('trans-y') : $sel.removeClass('trans-y');
    }
    $selector = $sel;
    $selector.addClass('tiger');
    eat();
  }
});

function eat() {
  var $tiger = $building.find('.tiger');
  var $ox = $building.find('.ox');
  if ($tiger.data('x') === $ox.data('x')
      && $tiger.data('y') === $ox.data('y')) {
    $ox.removeClass('ox');
    $('#id-text').text('tiger eat ox')
  }
}

});
