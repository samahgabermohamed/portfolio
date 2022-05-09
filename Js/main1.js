// Form Validation //

$(document).ready(() => {

    let flags = [false, false, false, false],
        name = [$("#fullname"), $(".name"), "A name is required."],
        phone = [$("#phone"), $(".phone"), "A phone number is required."],
        message = [$("#message"), $(".message"), "A message is required."],
        email = [$("#email"), $(".email"), "A email is required."],
        submitBTN = $(".submit")

    // FullName Validation //
        
    name[0].on("keyup", () => {
        flags[0] = check(name[0], name[1], name[2], flags[0])
        checkMe()
    })

    // Phone Validation //

    phone[0].on("keyup", () => {
        flags[1] = check(phone[0], phone[1], phone[2], flags[1])
        checkMe()
    })

    // Message Validation //

    message[0].on("keyup", () => {
        flags[2] = check(message[0], message[1], message[2], flags[2])
        checkMe()
    })

    // Email Validation //

    email[0].on("keyup", () => {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (!regex.test(email[0].val()) || email[0].val() == "") {
            email[1].text(email[2])
            email[1].addClass("invalid")
            email[0].addClass("background")
            submitBTN.prop('disabled', true);
            flags[3] = false
        } else {
            email[1].text("")
            email[0].removeClass("background")
            flags[3] = true
            console.log("rightmail")
            checkMe()
        }
    })

    function check(input, help, text, flag) {
        if (input.val() == "") {
            help.text(text)
            help.addClass("invalid")
            input.addClass("background")
            input.css("borderBottom",".1vw solid red")
            submitBTN.prop('disabled', true);
            flag = false
            return flag
        } else {
            help.text("")
            input.removeClass("background")
            input.css("borderBottom",".1vw solid #979696")
            flag = true
            return flag
        }
    }

    // Submit Button Enable / Disabled //

    function checkMe() {
        if (flags[0] && flags[1] && flags[2] && flags[3]) {
            submitBTN.removeAttr("disabled");
        }
    }
});