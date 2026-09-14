File "C:\Users\dylan\OneDrive\Documents\codering\html-cssbestanden\Jarvis\jarvis.py", line 1
source .\env\Scripts\activate # On Windows: .\env\Scripts\activate
import pyttsx3
engine = pyttsx3.init()
engine.setProperty('rate', 190)
engine.setProperty('volume', 1.0)
def speak(text):
   engine.say(text)
   engine.runAndWait()
   import speech_recognition as sr
def take_user_input():
   recognizer = sr.Recognizer()
   with sr.Microphone() as source:
       print("Listening...")
       audio = recognizer.listen(source)
       try:
           query = recognizer.recognize_google(audio, language='en-in')
           return query.lower()
       except sr.UnknownValueError:
           speak("Sorry, I didn't catch that.")
           return "None"
       from datetime import datetime
def greet_user():
   hour = datetime.now().hour
   if hour < 12:
       speak("Good Morning!")
   elif hour < 18:
       speak("Good Afternoon!")
   else:
       speak("Good Evening!")
   speak("I am JARVIS. How can I assist you?")
   import pywhatkit
def perform_task(query):
   if 'play on youtube' in query:
       speak("What should I play?")
       video = take_user_input()
       pywhatkit.playonyt(video)
   elif 'search on google' in query:
       speak("What should I search?")
       search_query = take_user_input()
       pywhatkit.search(search_query)
   elif 'wikipedia' in query:
       import wikipedia
       speak("What should I search on Wikipedia?")
       search_query = take_user_input()
       result = wikipedia.summary(search_query, sentences=2)
       speak(result)
   else:
       speak("I can't perform this task yet.")
       if __name__ == "__main__":
   greet_user()
   while True:
       query = take_user_input()
       if 'exit' in query or 'stop' in query:
           speak("Goodbye!")
           break
       perform_task(query)