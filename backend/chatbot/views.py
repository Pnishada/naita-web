from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def chatbot_response(request):
    user_message = request.data.get('message', '').lower()

    if 'hello' in user_message or 'hi' in user_message:
        bot_message = "Hello! How can I help you today?"
    elif 'help' in user_message:
        bot_message = "Sure! I'm here to assist you. Ask me anything."
    elif 'bye' in user_message:
        bot_message = "Goodbye! Have a nice day."
    else:
        bot_message = "I'm sorry, I didn't understand that. Can you please rephrase?"

    return Response({'response': bot_message})
