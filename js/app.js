$(document).ready(function() {
  $('nav a').on('click', function(){
    //current class assigned
    $('nav li.current').removeClass('current');
    $(this).parent().addClass('current');

    //set heading
    $('h1.heading').text($(this).text());

    //get & filter link text
    var category = $(this).text().toLowerCase().replace(" ", '-');

    //remove hidden class if "all teams" is selected
    if(category === "all-teams") {
      $('ul.gallery li:hidden').fadeIn('slow').removeClass('hidden');
    } else {
      $('ul.gallery li').each(function() {
        if(!$(this).hasClass(category)){
          $(this).hide().addClass('hidden');
        } else {
          $(this).fadeIn('slow').removeClass('hidden');
        }
      });
    }
     //stop link behavior
     return false;
  });
     $('ul.gallery li').on('mouseenter', function() {
       //get data attribute
       var title = $(this).children().data('title');
       var desc = $(this).children().data('desc');

       //validation
       if(desc === undefined) {
         desc = "Click To Enlarge";
       }
       if(title === "") {
         title = "";
       }

       //create overlay div
       $(this).append('<div class="overlay"></div>');

       //get overlay div
       var overlay = $(this).children('.overlay');
       //add html to overlay
       overlay.html('<h3>' +title+ '</h3><p>' +desc+ '</p>');
       //fade in overlay
       overlay.fadeIn(500);
     });
      //mouseleave overlay
      $('ul.gallery li').on('mouseleave', function() {
        //create overlay div
        $(this).append('<div class="overlay"></div>');
        //get overlay div
        var overlay = $(this).children('.overlay');
        //fadeout overlay
        overlay.fadeOut(500);

      });
});
