import random
import json
import pickle
import numpy as np
import nltk
nltk.download('punkt_tab')
nltk.download('wordnet')
from nltk.stem import WordNetLemmatizer
from tensorflow.keras.models import load_model

# Initialize lemmatizer
lemmatizer = WordNetLemmatizer()

# Load data
intents = json.loads(open('intents.json').read())
words = pickle.load(open('words.pkl', 'rb'))
classes = pickle.load(open('classes.pkl', 'rb'))
model = load_model('chatbot_model.keras')

# Load university data
with open('uni.json') as f:
    university_data = json.load(f)

# Functions
def clean_up_sentence(sentence):
    """Tokenize and lemmatize the input sentence."""
    sentence_words = nltk.word_tokenize(sentence)
    sentence_words = [lemmatizer.lemmatize(word.lower()) for word in sentence_words]
    return sentence_words

def bag_of_words(sentence):
    """Convert the sentence into a bag-of-words representation."""
    sentence_words = clean_up_sentence(sentence)
    bag = [0] * len(words)
    for w in sentence_words:
        for i, word in enumerate(words):
            if word == w:
                bag[i] = 1
    return np.array(bag)

def predict_class(sentence):
    """Predict the class of the input sentence."""
    bow = bag_of_words(sentence)
    res = model.predict(np.array([bow]))[0]
    print("Debug: Raw model output:", res)  # Debug: Print raw output of the model
    
    ERROR_THRESHOLD = 0.1  # Lower threshold to catch low-confidence predictions
    results = [[i, r] for i, r in enumerate(res) if r > ERROR_THRESHOLD]
    results.sort(key=lambda x: x[1], reverse=True)
    
    return_list = []
    for r in results:
        return_list.append({"intent": classes[r[0]], "probability": str(r[1])})
    return return_list

def get_response(intents_list, intents_json, user_input):
    """Get the chatbot's response based on predicted intents."""
    if not intents_list:
        return "I'm sorry, I didn't understand that. Could you please rephrase?"
    
    tag = intents_list[0]['intent']
    if tag == "university":
        # Collect all universities that match the user input
        matching_universities = []
        exact_match = None
        user_input_lower = user_input.lower()

        # List of common university name variations
        university_aliases = {
            'mit': 'Massachusetts Institute of Technology',
            'harvard': 'Harvard University',
            'stanford': 'Stanford University',
            'princeton': 'Princeton University',
            'yale': 'Yale University',
            'columbia': 'Columbia University'
        }

        for uni in university_data:
            try:
                school_name = uni.get('School', '').lower()
                
                # Check for exact matches including aliases
                if any(alias in user_input_lower and full_name.lower() in school_name 
                      for alias, full_name in university_aliases.items()):
                    exact_match = uni
                    break
                
                # Check if the university name is directly mentioned
                if school_name in user_input_lower:
                    exact_match = uni
                    break

                # Check for partial matches
                uni_info = (
                    f"{uni.get('School', '')} {uni.get('Overall Score', '')} "
                    f"{uni.get('Acceptance rate', 0)} {uni.get('2020 Rank', '')} "
                    f"{uni.get('Peer Assessment Score', '')} {uni.get('Graduation and retention rank', '')}"
                ).lower()

                # More comprehensive matching logic
                words_in_query = user_input_lower.split()
                if any(word in school_name for word in words_in_query if len(word) > 2):
                    matching_universities.append(uni)
                elif any(word in uni_info for word in words_in_query if len(word) > 2):
                    matching_universities.append(uni)

            except Exception as e:
                print(f"Error processing university data: {e}")
                continue
        
        # If an exact match is found, return it
        if exact_match:
            return format_university_response([exact_match])

        # If matches are found, format the response
        if matching_universities:
            # Sort matches by rank
            matching_universities.sort(key=lambda x: x.get('2020 Rank', 999))
            return format_university_response(matching_universities[:5])  # Limit to top 5 matches
        
        # If no specific match is found, show top universities
        response = "Here are some top universities:\n"
        for uni in university_data[:5]:
            try:
                response += (
                    f"{uni.get('School', 'N/A')} - "
                    f"Rank: {uni.get('2020 Rank', 'N/A')}, "
                    f"Acceptance Rate: {uni.get('Acceptance rate', 0)*100:.1f}%\n"
                )
            except Exception as e:
                print(f"Error formatting university data: {e}")
                continue
        return response
    
    list_of_intents = intents_json['intents']
    for i in list_of_intents:
        if i['tag'] == tag:
            result = random.choice(i['responses'])
            break
    return result

def format_university_response(universities):
    """Format the response for a list of universities."""
    response = "Here are the universities that match your query:\n"
    for uni in universities:
        try:
            response += (
                f"{uni.get('School', 'N/A')} - Rank: {uni.get('2020 Rank', 'N/A')}\n"
                f"Acceptance Rate: {uni.get('Acceptance rate', 0)*100:.1f}%\n"
                f"Overall Score: {uni.get('Overall Score', 'N/A')}\n"
                f"Graduation Rate: {uni.get('Actual graduation rate', 0)*100:.1f}%\n"
                f"Peer Assessment Score: {uni.get('Peer Assessment Score', 'N/A')}\n"
                f"Graduation and Retention Rank: {uni.get('Graduation and retention rank', 'N/A')}\n"
                f"Average First Year Retention Rate: {uni.get('Average first year retention rate', 0)*100:.1f}%\n"
                f"Predicted Graduation Rate: {uni.get('Predicted graduation rate', 0)*100:.1f}%\n"
                f"Selectivity Rank: {uni.get('Selectivity rank', 'N/A')}\n"
                f"SAT/ACT 25th-75th Percentile: {uni.get('SAT/ACT 25th-75th percentile', 'N/A')}\n"
                f"Financial Resources Rank: {uni.get('Financial resources rank', 'N/A')}\n\n"
            )
        except Exception as e:
            print(f"Error formatting university data: {e}")
            continue
    return response

# Main loop
print("Go! Bot is running!")

while True:
    message = input("You: ")
    if not message.strip():
        print("Bot: Please enter a valid message.")
        continue

    try:
        ints = predict_class(message)
        print("Debug: Predicted intents:", ints)

        res = get_response(ints, intents, message)
        print(f"Bot: {res}")
    except Exception as e:
        print(f"Bot: An error occurred: {e}")
