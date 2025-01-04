# Darban.ai Chat Interface Debug Challenge

Welcome to the Darban.ai chat interface debugging challenge! This exercise will test your fundamental understanding of JavaScript, particularly around API interactions, data types, and debugging skills.

## The Chat Interface

The chat interface is a simple implementation that should:
1. Allow users to send messages
2. Display user messages in the chat
3. Call our API endpoint to get AI responses
4. Display AI responses in the chat
5. Maintain conversation context between messages

## Current Issues

The chat interface is experiencing several issues:

1. **API Response Handling**
   - The chat is not properly displaying AI responses
   - Console shows errors related to data parsing
   - Check the network tab and console for clues

2. **Conversation Context**
   - The AI seems to "forget" previous messages
   - Each message appears to be treated as a new conversation
   - Examine how messages are being stored and sent

## Getting Started

1. Download this repository
2. Open index.html in your browser
3. Open your browser's developer tools
4. Try sending messages and observe the behavior
5. Review the code in script.js

## Your Task

Debug the chat interface to achieve the following:
1. Properly display AI responses
2. Maintain conversation context between messages
3. Ensure proper error handling

The API endpoint expects messages in this format:
```javascript
{
    "messages": [
        {
            "role": "user",
            "content": "Hello"
        },
        {
            "role": "assistant",
            "content": "Hi! How can I help you today?"
        },
        {
            "role": "user",
            "content": "What's the weather like?"
        }
    ]
}
```

## Evaluation Criteria
- Code functionality
- Problem-solving approach
- Understanding of JavaScript fundamentals
- Debugging methodology
- Code organization and clarity

Good luck!
