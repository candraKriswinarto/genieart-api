# GenieART Backend

This app is built using Node.js and Express.js. Node.js is a JavaScript runtime that allows us to run JavaScript on the server-side, while Express.js is a popular web framework for Node.js. Together, they provide a powerful and efficient platform for building the backend of this generative image app.

We use Express.js to handle routing and handle HTTP requests, and to set up an API endpoint that the frontend can use to make requests to the OpenAI API. Node.js and Express.js also provide a range of modules and middleware that we use to handle things like parsing JSON data, handling file uploads, and more. By using Node.js and Express.js, we are able to quickly and easily build a scalable, efficient backend that can handle the demands of the generative image app.

## Running the server
open a terminal and run the following command:

```
npm install
```

which will allow installing the project's dependencies. Still in the terminal run:

```
npm run dev
```

to run the developement server.


### Using your credentials
You can use your own credentials by get the api in to the [OPENAI API DOCS](https://beta.openai.com/account/api-keys) setting the OPENAI_API_KEY` environment variables before running the server. For example, you could supply your own credentials by running the server like so:

```
OPENAI_API_KEY=my_api_key
```

### Video Tutorial
You can see my youtube video for this project in [here](https://youtu.be/Yh2gz1sz-b8)