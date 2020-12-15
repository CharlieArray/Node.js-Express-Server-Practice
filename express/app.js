const { response } = require("express");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

app.listen(8000, () => {
  console.log("express server is listening on port 8000!");
});


app.get('/colors', (req, res) => {
  const colors = [
    {
      name: "red",
      rgb: "FF0000"
    },
    {
      name: "green",
      rgb: "00FF00"
    },
    {
      name: "blue",
      rgb: "0000FF"
    },
  ];
  res.json(colors);
});

// app.get("/burgers", (req, res) => {
//   res.send("We have juicy cheese burgers");
// });

// app.get("/pizza/pepporoni", (req, res) => {
//   res.send("Your pizza is on the way");
// });

// app.get("/pizza/pinneapple", (req, res) => {
//   res.send("Yuck, pineapples really?");
// });

//Let's create a route handler function on the path /echo that will simply respond with some details of the request. In app.js add a new handler function with the path /echo.

// // route handler function //
// app.get("/echo", (req, res) => {
//   const responseText = `Here are some details of your request:
//     Base URL: ${req.baseUrl}
//     Host: ${req.hostname}
//     Path: ${req.path}
//   `;
//   res.send(responseText);
// });

// // Assignment #1 //
// app.get("/sum", (req, res) => {
//   const { a, b } = req.query;

//   // Validation - a and b are required and should be numbers
//   if (!a) {
//     return res.status(400).send("a is required");
//   }

//   if (!b) {
//     return res.status(400).send("b is required");
//   }

//   const numA = parseFloat(a);
//   const numB = parseFloat(b);

//   if (Number.isNaN(numA)) {
//     return res.status(400).send("a must be a number");
//   }

//   if (Number.isNaN(numB)) {
//     return res.status(400).send("b must be a number");
//   }
// });

// // Assignment #2 //
// app.get("/cipher", (req, res) => {
//   messsage = { text: "hello", shift: "hola" };
//   updatedMessage = res.send(message);
// });

// // Assignment #3 //

// app.get("/lotto", (req, res) => {
//   let x = Math.random() * 20 + 1;
//   array = new Array(6);
//   array.fill(x);

//   console.log(array);

//   function numbers(x) {
//     `?arr=${x}&arr=${x}&arr=${x}&arr=${x}&arr=${x}&arr=${x}`;
//   }

//   return numbers;
// });
