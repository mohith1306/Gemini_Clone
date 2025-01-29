// // const api_key = "AIzaSyBadMcGLaziKssrBDOX2GSecnTYc5kiuZ8"

// const {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold,
//   } = require("@google/generative-ai");
  
//   const apiKey = "AIzaSyBadMcGLaziKssrBDOX2GSecnTYc5kiuZ8";
//   const genAI = new GoogleGenerativeAI(apiKey);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-2.0-flash-exp",
//   });
  
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//   async function run(prompt) {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response.text());
//   }
  
//   export default run;


// require("dotenv").config(); // Use environment variables for security
// const {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } = require("@google/generative-ai");

// const apiKey = "AIzaSyBadMcGLaziKssrBDOX2GSecnTYc5kiuZ8" // Load API key from .env file
// const genAI = new GoogleGenerativeAI({ apiKey }); // Pass API key as an object

// const model = genAI.getGenerativeModel({
//   model: "gemini-2.0-flash-exp",
// });

// const generationConfig = {
//   temperature: 1,
//   topP: 0.95,
//   topK: 40,
//   maxOutputTokens: 8192,
//   responseMimeType: "text/plain",
// };

// async function run(prompt) {
//   try {
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [], // Initialize an empty history if needed
//     });

//     const result = await chatSession.sendMessage(prompt);
//     console.log(result.response); // Access response directly, assuming it's a property
//   } catch (error) {
//     console.error("Error in running generative AI:", error.message);
//   }
// }

// export default run;

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = "AIzaSyAqDkWVYMblSeW_37eNba-kzxafj_Dtgds"
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default run;