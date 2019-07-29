(function ($) {
  "use strict"; // Start of use strict

  $(window).on("load", function () {

    $("#preloader").delay("3000").fadeOut("slow");

  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {

        TweenLite.to(window, 2, {
          scrollTo: target.offset().top - 70,
          ease: Power3.easeOut
        });
        /*
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");*/
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  /*$('.portfolio-item').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true
  });
  $(document).on('click', '.portfolio-modal-dismiss', function(e) {
    e.preventDefault();
    $.magnificPopup.close();
  });*/

  $('.citation').tooltip();

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

  var d = new Date;
  $("#currentYear").html(d.getFullYear());

})(jQuery); // End of use strict

var form = $("#contactForm");
form.validate({
  invalidHandler: function (event, Validator) {
    event.preventDefault();
    event.stopPropagation();
  },
  rules: {
    name: {
      required: true,
      minlength: 4
    },
    email: {
      required: true,
      email: true
    },
    phonesUK: {
      required: false,
      phonesUK: true
    },
    message: {
      required: true,
      rangelength: [100, 1500]
    },
  },

  messages: {

    name: "Please enter your full name",
    email: {
      required: "Please a valid email address",
      email: "Invalid email"
    },
    phonesUK: {
      phone_number: "Please enter a valid UK phone number"
    },
    message: {
      required: "Please enter your message",
      rangelength: "It must be within {0} and {1} characters long"
    },
  },
  errorClass: "is-invalid",
  validClass: "is-valid",
  errorElement: "p"

});

$(form).on("submit", function (event) {

  //var reset = $("#valCheck").validate();
  event.preventDefault();
  if (form.valid()) {
    var name = $("#cName").val();
    var email = $("#cEmail").val();
    var phone = $("#cPhone").val();
    var message = $("#cMessage").val();

    $("#success").empty();
    $.post("contact_form.php", {
      name1: name,
      email1: email,
      phone1: phone,
      message1: message
    }, function (data) {
      form[0].reset();
      $("#success").append(data); // Append returned message to message paragraph.
      //alert(data);
    });


  } else {
    return false;

  }
});