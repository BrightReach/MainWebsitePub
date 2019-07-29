var form = $("#valCheck");
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

        $("#serverFeed").empty();
        $.post("contact_form.php", {
            name1: name,
            email1: email,
            phone1: phone,
            message1: message
        }, function (data) {
            form[0].reset();
            $("#serverFeed").append(data); // Append returned message to message paragraph.
            //alert(data);
        });


    } else {
        return false;

    }
});

$("body").scrollspy({ target: "#navScroll" });
var d = new Date;
$("#currentYear").html(d.getFullYear());



/*$(function () {
    "use strict";
    window.addEventListener("load", function () {
        var form = document.getElementById("valCheck");
        form.addEventListener("submit", function (event) {
            if (form.classList.contains("was-validated")) {
                form.classList.remove("was-validated");
            }
            if (form.checkValidity() == false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");

        }, false);
    }, false);
}());

(function () {
    var form = $("valCheck");

    $("#submit").click(function () {
        var name = $("clientName").val();
        var email = $("clientEmail").val();
        var type = $("clientType").val();
        var message = $("clientMessage").val();

        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.

        if (form.checkValidity() == false) {
            alert("WRONG!!");
            event.preventDefault();
            event.stopPropagation();
            return false;
        } else {
            // Returns successful data submission message when the entered information is stored in database.
            $.post("contact_form.php", {
                name1: clientName,
                email1: clientEmail,
                type1: clientType,
                message1: clientMessage,
            }, function (data) {
                $("#returnmessage").append(data); // Append returned message to message paragraph.
                if (data == "Your Query has been received, We will contact you soon.") {
                    $("#form")[0].reset(); // To reset form fields on success.
                }
            });
        }
    });
});*/