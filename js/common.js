
$(document).ready(function(){

    function menu() {

        var checkbox = $("#input-id");
        var mnuList = $(".nav");
        var navItem = $(".nav-item");
        var sandwich = $(".sandwich");

        function menuStart() {
            mnuList.addClass("active");
            sandwich.addClass("active");
            // mnuList.animate({top: "0px"}, 500)
        };

        function menuEnd() {
            mnuList.removeClass("active");
            sandwich.removeClass("active");
            // mnuList.animate({top: "-1000px"}, 500)
        };


        for (var i = 0 ; i < navItem.length; i++) {
            navItem[i].addEventListener('click', function() {
                menuEnd();
                checkbox.checked = false;
            });  
        };

            
        checkbox.on( 'change', function() {

            if(this.checked) {
                menuStart();

            } else {
                menuEnd(); 
            }
        });

    };
    menu();

    $('.scroll-down').click(function(){
         $('html, body').animate({
             scrollTop: $('.about').offset().top
         }, 1000);
    });
    
    
    //modal
    
    
     $('.btn-close').on('click', function() {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur-it');
        $('.name').val("");
        $('.email').val("");
        $('.phone').val("");
        $('.message').val("");
        $(".field-input").removeClass("input-ok");
         return false;
     });
    

    $(".send-btn").on("click", function(e) {
        e.preventDefault();
    })
 });

function modalOpen() {
    $('.modal-wrapper').toggleClass('open');
    $('.page-wrapper').toggleClass('blur-it');
}