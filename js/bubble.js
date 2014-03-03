// The following is originally written by Remy Sharp the original can be found here:http://jqueryfordesigners.com/coda-popup-bubbles.1.html
//Modified by Daniel Graungaard d 02/03-14



$(function () {
  $('.colorbubble').each(function () {
    // options
    var distance = -170;
    var time = 250;
    var hideDelay = 500;

    var hideDelayTimer = null;

    // tracker
    var beingShown = false;
    var shown = false;
    
    var trigger = $('.trigger', this);
    var popup = $('.popup', this).css('opacity', 0);

    // set the mouseover and mouseout on both element
    $([trigger.get(0), popup.get(0)]).mouseover(function () {
      // stops the hide event if we move from the trigger to the popup element
      if (hideDelayTimer) clearTimeout(hideDelayTimer);

      // don't trigger the animation again if we're being shown, or already visible
      if (beingShown || shown) {
        return;
      } else {
        beingShown = true;

        // reset position of popup box
        popup.css({
          top: -100,
          left: -196,
          display: 'block' // brings the popup back in to view
        })

        // (we're using chaining on the popup) now animate it's opacity and position
        .animate({
          top: '-=' + distance + 'px',
          opacity: 1
        }, time, 'swing', function() {
          // once the animation is complete, set the tracker variables
          beingShown = false;
          shown = true;
        });
      }
    }).mouseout(function () {
      // reset the timer if we get fired again - avoids double animations
      if (hideDelayTimer) clearTimeout(hideDelayTimer);
      
      // store the timer so that it can be cleared in the mouseover if required
      hideDelayTimer = setTimeout(function () {
        hideDelayTimer = null;
        popup.animate({
          top: '-=' + distance + 'px',
          opacity: 0
        }, time, 'swing', function () {
          // once the animate is complete, set the tracker variables
          shown = false;
          // hide the popup entirely after the effect (opacity alone doesn't do the job)
          popup.css('display', 'none');
        });
      }, hideDelay);
    });


    $(".popup").click(function(){

      fade_bubble();

    });


    function fade_bubble(){

      hideDelayTimer = null;
      popup.animate({
        top: '-=' + distance + 'px',
        opacity: 0
      }, time, 'swing', function () {
              // once the animate is complete, set the tracker variables
              shown = false;
              // hide the popup entirely after the effect (opacity alone doesn't do the job)
              popup.css('display', 'none');
            });

    }

  });
});

