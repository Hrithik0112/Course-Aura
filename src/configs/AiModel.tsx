const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  
    export const GenerateBasicCourselayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "\nGenerate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level: Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"courseName\": \"Python Fundamentals\",\n  \"description\": \"This course provides a comprehensive introduction to Python programming, covering the basics of syntax, data types, variables, operators, control flow, and functions. It's ideal for beginners with no prior programming experience.\",\n  \"chapters\": [\n    {\n      \"name\": \"Introduction to Python\",\n      \"about\": \"This chapter introduces Python as a programming language, its history, features, and applications. It also covers how to install Python on your computer and set up a development environment.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Basic Syntax and Data Types\",\n      \"about\": \"This chapter explains Python's basic syntax, including keywords, identifiers, comments, and operators. It also introduces different data types like integers, floats, strings, booleans, and lists.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"name\": \"Variables and Operators\",\n      \"about\": \"This chapter dives into variables, how to assign values, and different types of operators used for arithmetic, comparison, logical, and bitwise operations.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"name\": \"Control Flow Statements\",\n      \"about\": \"This chapter introduces control flow statements like conditional statements (if-else), loops (for and while), and how to use them to control the execution flow of your Python programs.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"name\": \"Functions and Modules\",\n      \"about\": \"This chapter explains the concept of functions, how to define and call them, and how they can be used to organize code into reusable blocks. It also introduces Python's standard library and how to import modules.\",\n      \"duration\": \"15 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"noOfChapters\": 5\n}\n```"},
          ],
        },
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 
  