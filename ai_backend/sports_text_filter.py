import openai
openai.api_key = "YOUR_API_KEY_HERE"
def generate_text(prompt):
    response = openai.Completion.create(
      engine="text-davinci-002",
      prompt=prompt,
      max_tokens=1024,
      n=1,
      stop=None,
      temperature=0.5,
    )
    return response.choices[0].text.strip()
input_comment = "I love playing basketball."
generated_text = generate_text(f"Is the following comment related to sports? \n\nComment: {input_comment}")
if "Yes" in generated_text:
    print("Sports-related comment")
else:
    print("Non-sports-related comment")
