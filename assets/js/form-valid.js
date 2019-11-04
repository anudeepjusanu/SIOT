function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
var isValid = true;
var isHomeValid = true;
var isContactValid = true;

function validateForm() {
    var id_username = $('#id_username').val();
    var id_email = $('#id_email').val();
    var id_phone_number = $('#id_phone_number').val();
    if (id_username == '' || id_email == '' || id_phone_number == '') {
        if (id_username == '') {
            $('#errors-blk-id_username').show();
        } else {
            $('#errors-blk-id_username').hide();
        }
        if (id_email == '') {
            $('#errors-blk-id_email').show();
        } else {
            $('#errors-blk-id_email').hide();
        }
        if (id_phone_number == '') {
            $('#errors-blk-id_phone_number').show();
        } else {
            $('#errors-blk-id_phone_number').hide();
        }
        isValid = false;
        return false;
    }
    if (id_email && !validateEmail(id_email)) {
        $('#errors-blk-id_email').show();
        isValid = false;
        return false;
    }

    if (id_phone_number && id_phone_number.length != 10) {
        $('#errors-blk-id_phone_number').show();
        isValid = false;
        return false;
    }
    isValid = true;
    return true;
}

function validateHomeForm(){
    var id_username = $('#id_username_home').val();
    var id_email = $('#id_email_home').val();
    var id_phone_number = $('#id_phone_number_home').val();
    if (id_username == '' || id_email == '' || id_phone_number == '') {
        if (id_username == '') {
            $('#errors-blk-id_username_home').show();
        } else {
            $('#errors-blk-id_username_home').hide();
        }
        if (id_email == '') {
            $('#errors-blk-id_email_home').show();
        } else {
            $('#errors-blk-id_email_home').hide();
        }
        if (id_phone_number == '') {
            $('#errors-blk-id_phone_number_home').show();
        } else {
            $('#errors-blk-id_phone_number_home').hide();
        }
        isHomeValid = false;
        return false;
    }
    if (id_email && !validateEmail(id_email)) {
        $('#errors-blk-id_email_home').show();
        isHomeValid = false;
        return false;
    }

    if (id_phone_number && id_phone_number.length != 10) {
        $('#errors-blk-id_phone_number_home').show();
        isHomeValid = false;
        return false;
    }
    isHomeValid = true;
    return true;
}

function validateContactForm() {
    var id_username = $('#id_username_contact').val();
    var id_email = $('#id_email_contact').val();
    var id_phone_number = $('#id_phone_number_contact').val();
    if (id_username == '' || id_email == '' || id_phone_number == '') {
        if (id_username == '') {
            $('#errors-blk-id_username_contact').show();
        } else {
            $('#errors-blk-id_username_contact').hide();
        }
        if (id_email == '') {
            $('#errors-blk-id_email_contact').show();
        } else {
            $('#errors-blk-id_email_contact').hide();
        }
        if (id_phone_number == '') {
            $('#errors-blk-id_phone_number_contact').show();
        } else {
            $('#errors-blk-id_phone_number_contact').hide();
        }
        isContactValid = false;
        return false;
    }
    if (id_email && !validateEmail(id_email)) {
        $('#errors-blk-id_email_contact').show();
        isContactValid = false;
        return false;
    }

    if (id_phone_number && id_phone_number.length != 10) {
        $('#errors-blk-id_phone_number_contact').show();
        isContactValid = false;
        return false;
    }
    isContactValid = true;
    return true;
}

$('#register_form').on('submit', function(e) {
    if (isValid) {
        $('#register_form *').fadeOut(2000);
        $('#register_form').prepend('<div class="text-center">Thank you for Registering we will reach you out soon...</div>');
    }

});
$('#register_form-home').on('submit', function(e) {
    if(isHomeValid){
        $('#register_form-home *').fadeOut(2000);
        $('#register_form-home').prepend('<div class="text-center">Thank you for Registering we will reach you out soon...</div>');
    }
});
$('#contact_form').on('submit', function(e) {
    if(isContactValid){
        $('#contact_form *').fadeOut(2000);
        $('#contact_form').prepend('<div class="text-center">Thank you for contacting we will reach you out soon...</div>');
    }
    
});