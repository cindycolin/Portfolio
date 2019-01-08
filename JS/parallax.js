$("#container").mousemove(function(e) {
  parallaxIt(e, ".slide", -400);
  parallaxIt(e, ".name", -400);
  parallaxIt(e, ".name2", 500);
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 3) / $this.width() * movement,
    y: (relY - $this.height() / 4) / $this.height() * movement
  });
}

