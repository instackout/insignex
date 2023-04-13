// emailjs creds
const publicKey = 'HTTfu57yow0WT_GJq';
const serviceId = 'service_m8d5pzo';
const subscribeTemplateId = 'template_rwtmb0m';
const contactUsTemplateId = 'template_quggd4a';

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