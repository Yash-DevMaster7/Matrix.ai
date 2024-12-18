# Matrix.aibot

Matrix.aibot is an AI-powered chatbot designed to assist users by answering their queries and providing relevant solutions.

## Features

- **Chatbot Interface**: Interacts with users, responds to queries, and provides personalized solutions.
- **User-Friendly Design**: A clean and responsive interface built with React and styled using Tailwind CSS.
- **Powered by Google Gemini 1.5**: The latest version of Google’s AI chatbot model to ensure intelligent, context-aware responses.

## Technology Stack

- **Frontend**: React
- **Styling**: Tailwind CSS
- **Chat Model**: Google Gemini 1.5

## Advantages of Using Matrix.aibot

- **Accurate Responses**: Google Gemini 1.5 ensures high-quality, relevant, and context-aware answers.
- **Interactive Interface**: A dynamic and responsive UI powered by React and styled using Tailwind CSS for a smooth user experience.
- **Customizable**: Easily integrate with other APIs or services to extend functionality.
- **Fast and Lightweight**: Optimized for speed and performance, ensuring that user interactions are seamless.

## Setup and Installation

To run the Matrix.aibot project locally, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

### Steps

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```bash
   git clone https://github.com/Yash-DevMaster7/Matrix.aibot.git
   ```

2. **Install Dependencies**

   ```bash
   cd Matrix.aibot
   npm install
   ```

3. **Set Up API Keys for Google Gemini 1.5**

   To use Google Gemini 1.5 for chat functionalities, you'll need to set up your API keys. Follow these steps:

   - Go to Google Cloud and create a new project if you don’t have one already.
   - Enable the Gemini 1.5 API under the “APIs & Services” section.
   - Obtain the API key for Gemini 1.5 and store it in a `.env` file in the root of the project directory.

   ```bash
   VITE_GEMINI_API_KEY="Your_api_key"
   ```

4. **Start the Development Server**

   Run the following command to start the application locally:

   ```bash
   npm run dev
   ```

   This will start the React development server. You can now open the project in your browser at `http://localhost:5173`.
