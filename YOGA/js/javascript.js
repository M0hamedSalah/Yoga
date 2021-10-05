  $("#sub").click(function() {
              $('html,body').animate({
                scrollTop: $("#signin").offset().top},
                'slow');
              });

              $(".mybtn").click(function() {
              $('html,body').animate({
                scrollDown: $("#signin").offset().down},
                'slow');
              });


            $(".mybtn").button();
            var width = $(window).width();
            $(".v").text(width);

              if(width<751){
                $(".listitem").css('font-size','2.9vw');
              }
              else if(width<768){

                $(".listitem").css('font-size','1.5vw');
              }
              else if(width<992){
                $(".listitem").css('font-size','1.5vw');
              }
              else if(width<1200){
                $(".listitem").css('font-size','1.5vw');
              }
              else{
                $(".listitem").css('font-size','1.5vw');
              }

