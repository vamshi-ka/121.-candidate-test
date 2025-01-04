(function($) {
    var messages = "";  

    function darbanOpenChat() {
        $('#darban-ai-chatbox').show();
        $('#darban-ai-icon').hide(); 
    }

    function darbanCloseChat() {
        $('#darban-ai-chatbox').hide();
        $('#darban-ai-icon').show(); 
    }

    function darbanSendMessage() {
        var inputField = $('#darban-ai-chatbox .darban-chat-footer input[type="text"]');
        var message = inputField.val();

        if (message.trim() !== "") {
            var chatBody = $('#darban-ai-chatbox .darban-chat-body');
            
            // Add user message to UI
            var userMessage = $('<div>').addClass('darban-user-message').text(message);
            chatBody.append(userMessage);

            messages = messages + {
                "role": "user",
                "content": message
            };

            inputField.val("");

            var settings = {
                "url": "https://73cisgzzxwuqknk3257hxy7d4q0xjtps.lambda-url.us-east-1.on.aws/",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "messages": messages
                }),
            };

            $.ajax(settings).done(function(response) {
                var assistantMessageContent = JSON.parse(response).assistant;
                
                var assistantMessage = $('<div>').addClass('darban-assistant-message').text(assistantMessageContent);
                chatBody.append(assistantMessage);
          
                chatBody.scrollTop(chatBody[0].scrollHeight);
            }).fail(function(error) {
                var errorMessage = $('<div>').addClass('darban-assistant-message').text("Oops! Something went wrong. Please try again.");
                chatBody.append(errorMessage);
                chatBody.scrollTop(chatBody[0].scrollHeight);
                console.log(error);
            });
        }
    }

    $(document).ready(function() {
        $('#darban-ai-chatbox').hide(); 
        $('#darban-ai-icon').show(); 
        window.darbanOpenChat = darbanOpenChat;
        window.darbanCloseChat = darbanCloseChat;
        window.darbanSendMessage = darbanSendMessage;
    });

})(jQuery);