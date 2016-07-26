$(document).ready(function() {
    
    $('#reply').click(function() {
       
    var countMessages = $('.typedMessage').length;
 
        var message = $('#message').val();

        if ($("#message").val() == '') {
            $('#alert').html("<h3 class='red'>Вы не ввели сообщение, отправлять нечего!</h3>");
            $('#alert').fadeIn().delay(1000).fadeOut();
            return false;
        }


        if (countMessages % 2 == 0) {
        $('#chat-message').append("<li class='typedMessage'><div class='messageBox left'><p>" + message + "</p></div></li>");
        }else{
        $('#chat-message').append("<li class='typedMessage'><div class='messageBox right'><p>" + message + "</p></div></li>"); 
        }

        //scroll to bottom
        var scrollChat = $('#chat-message').prop('scrollHeight');
        $(window).scrollTop(scrollChat);


        $('#chat-form')[0].reset();
        var chatMessage = $('#chat-message').html();
        localStorage.setItem('chat-message', chatMessage);
        return false;
    
   
    });

    if (localStorage.getItem('chat-message')) {
        $('#chat-message').html(localStorage.getItem('chat-message'));
    }

    $('#clear').click(function() {
        window.localStorage.clear();
        location.reload();
        return false;
    });

$('.reply').animate({bottom:"0"});


});