(function ($) {
    "use strict";


    //navbar on scrolling
    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.navbar').fadeIn('slow').css('display','flex');
        }else{
            $('.navbar').fadeOut('slow').css('display','none');
        }
    })

    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    //button
    document.getElementById("downloadButton").addEventListener("click", function() {
        // Replace 'your_resume.pdf' with the actual path to your resume file
        var resumePath = 'resume.pdf';
      
        var link = document.createElement('a');
        link.href = resumePath;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
   
      document.addEventListener("DOMContentLoaded", function() {
        const submitButton = document.getElementById("sendMessageButton");
        submitButton.addEventListener("click", function() {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const subject = document.getElementById("subject").value;
            const message = document.getElementById("message").value;
            
            if (name && email && subject&& message) {
                swal({
                    title: "Thankyou",
                    text: "Your message is send",
                    icon: "success",
                    button: "ok",
                  });
                  document.getElementById("name").value = "";
                  document.getElementById("email").value = "";
                  document.getElementById("subject").value = "";
                  document.getElementById("message").value = "";
            }
            
        });
    });

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


  
    
    
})(jQuery);

