
$(document).ready(function(){/* jQuery toggle layout */
$('#btnToggle').click(function(){
  if ($(this).hasClass('on')) {
    $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
    $(this).removeClass('on');
  }
  else {
    $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
    $(this).addClass('on');
  }
});
});


 $(document).ready(function() {
   var scrollStart = ($(window).width() - $('.scrollbar').width()) / 100;
   $('.scroll').draggable({
     axis: 'x',
     containment: 'parent',
     drag: function() {
       var dragAmt = $('.scroll').position().left - scrollStart;
       var dragPercent = dragAmt * 0.243;
       var result = $('.amount').text(Math.round(dragPercent) + '%');
       $("#pg").val(result);

     },
     stop: function() {
       var dragAmt = $('.scroll').position().left - (scrollStart + 696);
       $('.bar').animate({
         'margin-left': dragAmt
       }, 700, 'easeOutCubic');

     }
   });
 });

alert(result);


//increments

$(function()
{
    $(".add").click(function()
    {
        var container = $(this).closest(".container");
        var currentVal = parseInt(container.find(".qty").val());
        var bestandVal = parseInt(container.find(".bestand").val());
        if (currentVal >= 10)
        {
            container.find(".qty").val(currentVal = 10);
        }
        if (currentVal != NaN && currentVal < 10)
        {
            container.find(".qty").val(currentVal + 1);
            container.find(".bestand").val(bestandVal - 1);
        }
    });

    $(".minus").click(function()
    {
        var container = $(this).closest(".container");
        var currentVal = parseInt(container.find(".qty").val());
        var bestandVal = parseInt(container.find(".bestand").val());

        if (currentVal <= 0)
        {
            container.find(".qty").val(currentVal = 0);
        }
        if (currentVal != NaN && currentVal > 0)
        {
            container.find(".qty").val(currentVal - 1);
            container.find(".bestand").val(bestandVal + 1);
        }
    });
});

