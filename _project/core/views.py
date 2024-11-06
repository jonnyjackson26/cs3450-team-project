from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json

def home(request):
    return HttpResponse("Welcome to the Chatbot API!")

@csrf_exempt
def getChatGPTResponse(request):
    if request.method == 'POST':
        # Parse JSON body of the request
        try:
            data = json.loads(request.body)
            user_input = data.get('message')
            
            if not user_input:
                return JsonResponse({"error": "No input provided"}, status=400)

            # Process the input and generate a response (placeholder logic)
            response_text = f"Echoing back your input: {user_input}"
            return JsonResponse({"response": response_text})
        
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON format"}, status=400)
    else:
        return JsonResponse({"error": "Only POST requests are allowed"}, status=405)
