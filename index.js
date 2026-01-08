const express = require('express');
const cors = require("cors");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json()); // tell server to understand JSON

const feedbacks = []; // fake DataBase, I need a place to store feedback.

app.post("/feedback", (req, res) => {
  const feedback = req.body; // Take the data the user sent and store it in feedback.
  feedbacks.push(feedback);

  res.json({
    message: "feedback received",
    data: feedback,
  });
});

app.listen(PORT, () => {
  console.log("Server running on port 5000");  
})

