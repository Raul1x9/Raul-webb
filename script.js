// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';

// Import the Firebase telemetry function
import { enableFirebaseTelemetry } from '@genkit-ai/firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPV00Dbx4jIFsNewkqtdA2GwKbYCHdfNE",
  authDomain: "raul-webb.firebaseapp.com",
  projectId: "raul-webb",
  storageBucket: "raul-webb.firebasestorage.app",
  messagingSenderId: "585635975761",
  appId: "1:585635975761:web:b4cb6a745332f6f84d5e70",
  measurementId: "G-91T0H19WDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Enable Firebase telemetry
enableFirebaseTelemetry();

// Configure a Genkit instance
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // set default model
});

// Define a flow using the AI model
const helloFlow = ai.defineFlow('helloFlow', async (name) => {
  // Make a generation request
  const { text } = await ai.generate(`Hello Gemini, my name is ${name}`);
  console.log(text);
});

// Call the flow
helloFlow('Chris');