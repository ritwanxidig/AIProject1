// declarations
const url = "https://open-ai21.p.rapidapi.com/conversationgpt35/";
const askButton = document.querySelector("#btnAsk") as HTMLButtonElement;
const inputEl = document.querySelector("#inputEl") as HTMLInputElement;
const responseHolder = document.querySelector(
  ".response"
) as HTMLParagraphElement;

//functions

async function generateResponse(msg: string) {
  const options: RequestInit = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "4231b2cfcbmsh3224e668754f8d1p12f9cejsn3ba8529a2472",
      "X-RapidAPI-Host": "open-ai21.p.rapidapi.com",
    },
    body: JSON.stringify({
      messages: [
        {
          role: "user",
          content: inputEl.value,
        },
      ],
      web_access: false,
      stream: false,
    }),
  };
  try {
    const response = await fetch(url, options);
    if (response) {
      responseHolder.textContent = "Generating...";
      console.log(response);
      const text = await response.text();
      const parsed = JSON.parse(text);
      const res = parsed.BOT;
      responseHolder.textContent = res;
    }
  } catch (error) {
    console.log(error);
  }
}

// events
askButton.addEventListener("click", () => {
  generateResponse(inputEl.value);
});
