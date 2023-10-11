const url = "https://open-ai21.p.rapidapi.com/conversationgpt35/";
const askButton = document.querySelector("#btnAsk") as HTMLButtonElement;
const inputEl = document.querySelector("#inputEl") as HTMLInputElement;
const responseHolder = document.querySelector(
  ".response"
) as HTMLParagraphElement;

// function to simulate typing effect
async function typeEffect(text: string) {
  responseHolder.textContent = "";
  for (let i = 0; i < text.length; i++) {
    responseHolder.textContent += text.charAt(i);
    await new Promise((resolve) => setTimeout(resolve, 50)); // adjust the time delay here (50ms)
  }
}

// functions
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

    if (response.status == 200) {
      responseHolder.textContent = "Generating...";
      const text = await response.text();
      const parsed = JSON.parse(text);
      const res = parsed.BOT;
      await typeEffect(res); // apply typed animation effect to the response
    } else {
      responseHolder.textContent = "";
    }
  } catch (error) {
    console.log(error);
  }
}

// event
askButton.addEventListener("click", () => {
  generateResponse(inputEl.value);
});
