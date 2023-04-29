// emailjs creds
const publicKey = 'TwQ_uS-J9uHaHDx2M';
const serviceId = 'service_xbwjf6s';
const subscribeTemplateId = 'template_otsannq';
const contactUsTemplateId = 'template_hysbsb8';

// Spinner
var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 1);
};

function subscribe() {
    let spinner = $('#subscribeForm .spinner');
    let submitbtn = $('#subscribeForm').find('button[type="submit"]');
    let subscribeForm = $('#subscribeForm')[0];
    let subscribeModal = $('#subscribeModal');

    submitbtn.hide();
    spinner.show();

    emailjs.send(
        serviceId, 
        subscribeTemplateId,
        { "email": $("#subscribe-email").val() }).then(function (response) {
            subscribeModal.modal('show');
            subscribeForm.reset();
            submitbtn.show();
            spinner.hide();
        }, function (error) {
            window.location.replace('/index.html');
            subscribeForm.reset();
            submitbtn.show();
            spinner.hide();
        });
}

function contactUs() {
    let spinner = $('#contactUsForm .spinner');
    let submitbtn = $('#contactUsForm').find('button[type="submit"]');
    let contactUsForm = $('#contactUsForm')[0];
    let contactUsModal = $('#contactUsModal');

    submitbtn.hide();
    spinner.show();

    emailjs.send(
        serviceId, 
        contactUsTemplateId,
        { 
            "name": $("#contactUs-name").val(),
            "email": $("#contactUs-email").val(),
            "subject": '',
            "contact": '',
            "message": $("#contactUs-message").val()
        }).then(function (response) {
            contactUsModal.modal('show');
            contactUsForm.reset();
            submitbtn.show();
            spinner.hide();
        }, function (error) {
            window.location.replace('/index.html');
            contactUsForm.reset();
            submitbtn.show();
            spinner.hide();
        });
}

function contactUs2() {
    let spinner = $('#contactUs2Form .spinner');
    let submitbtn = $('#contactUs2Form').find('button[type="submit"]');
    let contactUs2Form = $('#contactUs2Form')[0];
    let contactUsModal = $('#contactUsModal');

    submitbtn.hide();
    spinner.show();

    emailjs.send(
        serviceId, 
        contactUsTemplateId,
        {
            "name": $("#contactUs2-name").val(),
            "email": $("#contactUs2-email").val(),
            "subject": $("#contactUs2-subject").val(),
            "contact": $("#contactUs2-contact").val(),
            "message": $("#contactUs2-message").val()
        }).then(function (response) {
            contactUsModal.modal('show');
            contactUs2Form.reset();
            submitbtn.show();
            spinner.hide();
        }, function (error) {
            window.location.replace('/index.html');
            contactUs2Form.reset();
            submitbtn.show();
            spinner.hide();
        });
}

$(function () {
    emailjs.init(publicKey);

    $("#spinner").load("common/spinner.html", function () {
        $("#header").load("common/header.html", function () {
            let url = window.location.pathname;
            url = url.substring(url.lastIndexOf("/") + 1);
        
            $(".nav-link").removeClass("active");        
            $('.nav-link[href="' + url + '"]').addClass("active");

            $(".sub-nav-link").removeClass("active");        
            $('.sub-nav-link[href="' + url + '"]').addClass("active");

            if ($('.sub-nav-link').hasClass('active')) {
                $('#sub-nav').addClass("active");
            }
        });
        $('#footer').load('common/footer.html', function () {
            $('#currYear').html(new Date().getFullYear());
            spinner();
        });
    });
});