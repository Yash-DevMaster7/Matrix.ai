import { useState } from "react";
import Markdown from "markdown-to-jsx";
import "./App.css";
import doodle from "./assets/doodle.png";
import { GoogleGenerativeAI } from "@google/generative-ai";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  interface GenerateResponse {
    response: {
      text: () => string;
    };
  }

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = question;
      const result: GenerateResponse = await model.generateContent(prompt);
      setAnswer(result.response.text());
      setLoading(false);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-900 w-screen h-screen text-white grid grid-cols-1 md:grid-cols-2">
        <div className="h-full flex flex-col justify-around items-center">
          <div className="w-11/12 h-1/3 flex flex-col justify-around">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                Chat with{" "}
                <span className="underline text-blue-600 dark:text-blue-600">
                  Matrix.ai
                </span>
              </h1>
            </div>
            <div className="text-center mt-2 md:mt-0">
              <h1 className="mb-1 text-lg font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">
                  Curious ?
                </mark>{" "}
                Just ask ! Matrix AI assistant is ready with the answers.
              </h1>
            </div>
          </div>
          <div className="w-11/12 h-1/2 flex flex-col justify-around items-center">
            <div className="w-4/5">
              <textarea
                id="message"
                rows={8}
                className="block p-2.5 w-full h-20 md:h-44 mt-2 md:mt-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write Your Queries here..."
                onChange={(e) => setQuestion(e.target.value)}
              ></textarea>
            </div>
            <div className="w-32 mt-2 md:mt-0 md:w-1/6">
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-blue-300 dark:focus:ring-white font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          {answer === "" ? (
            <div className="w-11/12 mx-auto mt-20 md:mt-36 h-1/2 flex flex-col justify-center items-center">
              <div className="text-xl md:text-3xl font-mono">
                <span className="text-blue-600">{"< "}</span>
                <span className=" border-b-2 border-blue-600">Write</span>{" "}
                Something
                <span className="text-blue-600">{" />"}</span>
              </div>
              <img className="w-20 h-20 mt-4" src={doodle} alt="Chat Doodle" />
            </div>
          ) : (
            <div className="border-4 border-gray-700 rounded-xl w-11/12 mx-auto mt-10 h-5/6 px-3 py-3 overflow-auto scrollable-div text-justify font-normal">
              {loading ? (
                <div className="flex justify-center items-center h-5/6">
                  <div role="status">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="markdown text-sm">
                  <Markdown>{answer}</Markdown>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
