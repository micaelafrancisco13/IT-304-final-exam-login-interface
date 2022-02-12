$( document ).ready(function() {
    let username = $('#username');
    let password = $('#password');
    
    $('.login__button').click(function() {
        $('.login-state').css('visibility', 'visible');
        if (username.val() === 'ela13' && password.val() === 'micaela13')
            $('.login-state').text('Logged in successfully!');
        else
            $('.login-state').text('Invalid credentials.');
    });
});

