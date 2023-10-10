"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// declarations
const url = "https://open-ai21.p.rapidapi.com/conversationgpt35/";
const askButton = document.querySelector("#btnAsk");
const inputEl = document.querySelector("#inputEl");
const responseHolder = document.querySelector(".response");
//functions
function generateResponse(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
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
            const response = yield fetch(url, options);
            if (response) {
                responseHolder.textContent = "Generating...";
                console.log(response);
                const text = yield response.text();
                const parsed = JSON.parse(text);
                const res = parsed.BOT;
                responseHolder.textContent = res;
            }
        }
        catch (error) {
            console.log(error);
        }
    });
}
// events
askButton.addEventListener("click", () => {
    generateResponse(inputEl.value);
});
