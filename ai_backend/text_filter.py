import json
from googleapiclient import discovery
from googleapiclient.errors import HttpError

API_KEY = "YOUR_API_KEY_HERE"
DISCOVERY_API = "https://commentanalyzer.googleapis.com/$discovery/rest?version=v1alpha1"

def get_toxicity_score(text):
    try:
        service = discovery.build('commentanalyzer', 'v1alpha1', discoveryServiceUrl=DISCOVERY_API, developerKey=API_KEY)
        analyze_request = {
          'comment': { 'text': text },
          'requestedAttributes': {'TOXICITY': {}}
        }
        response = service.comments().analyze(body=analyze_request).execute()
        return response['attributeScores']['TOXICITY']['summaryScore']['value']
    except HttpError as error:
        print(f"An error occurred: {error}")
        return None
input_text = "I hate you!"
toxicity_score = get_toxicity_score(input_text)
if toxicity_score is not None:
    if toxicity_score >= 0.5:
        print("Toxic")
    else:
        print("Not toxic")
else:
    print("Unable to classify toxicity")
