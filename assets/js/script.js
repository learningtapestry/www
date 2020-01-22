// Toggle classes in responsive menu
var anchor = document.getElementById('toggle-menu');
        
var open = false;
anchor.onclick = function(event) {
    event.preventDefault();
    if(!open) {
        this.classList.add('close');
        open = true;
    } else {
        this.classList.remove('close');
        open = false;
    }
}

$(function () {

    // Responsive menu toggle button
    $('#toggle-menu').click(function() {
        if(!$(this).hasClass('close')) {
           $('.main-nav').removeClass('show');
        } else {
            $('.main-nav').addClass('show');
        }
    });

    retinajs();


    // Contact form validation
    if( $("#contact-form").length > 0) {

        $("#contact-form").validate({
          
            submitHandler: function(form) {

                $.ajax({
                    type: "POST",
                    url: "php/email-sender.php",
                    data: {
                        "name": "",
                        "email": $("#contact-form #email").val(),
                        "message": $("#contact-form #message").val(),
                        "caller": $("#contact-form #caller").val()
                    },
                    dataType: "json",
                    success: function (data) {
                        console.log(data);
                        if (data.sent == "yes") {
                            $("#contact-form .form-control").each(function() { 
                                $(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
                            });
                            $("#contact-form .success-msg").removeClass("hidden");
							setTimeout(function() {
								$("#contact-form .success-msg").fadeOut();
							}, 3000 );
                        } 
                    }
                });
            },  

            errorPlacement: function(error, element) {
                error.insertAfter( element );
            },

            onkeyup: false,
            onclick: false,
            rules: {
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                email: {
                    required: "We need your email address to contact you",
                    email: "Please enter a valid email address e.g. name@domain.com"
                },
                message: {
                    required: "Please enter a message",
                    minlength: "Your message must be longer than 10 characters"
                }                   
            },
            errorElement: "span",
            highlight: function (element) {
                $(element).parent().removeClass("has-success").addClass("has-error");
            },
            success: function (element) {
                $(element).parent().removeClass("has-error").addClass("has-success");
            }

        });

    }
    

    // Modal contact form validation
    if( $("#modal-contact-form").length > 0) {

        $("#modal-contact-form").validate({
         
            submitHandler: function(form) {
        
                $.ajax({
                    type: "POST",
                    url: "php/email-sender.php",
                    data: {
                        "name": $("#modal-contact-form #modal_name").val(),
                        "email": $("#modal-contact-form #modal_email").val(),
                        "message": $("#modal-contact-form #modal_message").val(),
                        "caller": $("#modal-contact-form #modal-caller").val()
                    },
                    dataType: "json",
                    success: function (data) {
                        if (data.sent == "yes") {
                            $("#modal-contact-form .form-control").each(function() { 
                                $(this).prop('value', '').parent().removeClass("has-success").removeClass("has-error");
                            });
                            $("#modal-contact-form .success-msg").removeClass("hidden");
							setTimeout(function() {
								$("#modal-contact-form .success-msg").fadeOut();
							}, 3000 );
                        } 
                    }
                });
            },  

            errorPlacement: function(error, element) {
                error.insertAfter( element );
            },

            onkeyup: false,
            onclick: false,
            rules: {
                modal_name: {
                    required: true
                },
                modal_email: {
                    required: true,
                    email: true
                },
                modal_message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                modal_name: {
                    required: "Please enter your name"
                },
                modal_email: {
                    required: "We need your email address to contact you",
                    email: "Please enter a valid email address e.g. name@domain.com"
                },
                modal_message: {
                    required: "Please enter a message",
                    minlength: "Your message must be longer than 10 characters"
                }                   
            },
            errorElement: "span",
            highlight: function (element) {
                $(element).parent().removeClass("has-success").addClass("has-error");
            },
            success: function (element) {
                $(element).parent().removeClass("has-error").addClass("has-success");
            }

        });

    }

    // Preload profile replacements
    $(".team-member-thumb > img, .profile-thumb > img").each(function (elm) {
        var dogImg = $(this).data("dog");
        if (dogImg) {
            new Image().src = dogImg;
        }
    });

    // Replace profile pictures
    $(".team-member, .section-profile").mouseenter(function (event) {
        var thumb = $(this).find(".team-member-thumb > img, .profile-thumb > img");
        var src = thumb.attr("src");
        thumb.attr("src", thumb.data("dog"));
        thumb.attr("original-src", src);
    }).mouseleave(function (event) {
        var thumb = $(this).find(".team-member-thumb > img, .profile-thumb > img");
        var originalSrc = thumb.attr("original-src");
        thumb.attr("src", originalSrc);
        thumb.attr("original-src", null);
    });
});
