// const http = require("http");
// const port = 3000;

// const server = http.createServer(function(req, res) {
//   res.setHeader("Content-Type", "text/html");
//   res.write('<h1>I AM Bruce Lee AND I AM CRAZY</h1>');
//   res.end();
// });

// server.listen(port, err => {
//     if(err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`srever is runing on ${port}`)
// })

//=============================================

// const express = require("express");
// const app = express();

// const port = process.env.PORT || 5000;

// app.use("/", (req, res) => {
//   const query = req.query;

//   console.log("query :", query);

//   res.send("<h1>Hello</h1>");
// });

// app.listen(port, () => console.log(`Server running on ${port}`));



const express = require("express");
const app = express();
const darkskyApi = require("./utils/darkSky");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(express.static("static"));

app.get("/weather", async (req, res) => {
  const { lat, lan } = req.query;

  const getWeather = await darkskyApi(lat, lan);
  // console.log("getWeather :", getWeather)
  res.render("index", { title: "Weather App", ...getWeather });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
