// server/index.js
const path = require('path');
const express = require("express");
// const cors = require('cors');
const app = express();

// app.use(cors())

const PORT = process.env.PORT || 8080;

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Brent!" });
  });

app.get("/some", (req, res) => {
    res.send({ message: "Hello from ayesha!" });
});

app.get("/yolo", (req, res) => {
    res.send({ message: "Hello from scarlett!" });
    });


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// app.use(express.static(path.join(__dirname, '../client/build')));

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
      });