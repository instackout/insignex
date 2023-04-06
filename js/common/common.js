$(function () {
    $('head').load('common/head.html');
    $('#header').load('common/header.html', function () {
        let url = window.location.pathname;
        url = url == '/' ? '/' : url.split('/').join('');

        $('.nav-link').removeClass('active');
        $('.nav-link[href="' + url + '"]').addClass('active');
    });
    $('#footer').load('common/footer.html', function () {
        $('#currYear').html(new Date().getFullYear());
    });
});