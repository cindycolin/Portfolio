tl = new TimelineMax();

tl.from('h3', 1, {autoAlpha: 0, x:150, ease: Power2.easeOut}, 0 )
.from('.underline', 2, {autoAlpha: 0, x:200, ease: Power2.easeOut}, .25 )
;

//tl = new TimelineMax( {yoyo: true, repeat: -1 } );
//
//tl.from('h1', 2, {autoAlpha: 0, y:250, ease: Power2.easeOut}, 0 )
//  .from('h2', 2, {autoAlpha: 0, y:200, ease: Power2.easeOut}, .25 )
//  .from('#h3-1', 2, {autoAlpha: 0, y:200, ease: Power2.easeOut}, .35 )
//  .from('#h3-2', 2, {autoAlpha: 0, y:230, ease: Power2.easeOut}, .35 )
//;