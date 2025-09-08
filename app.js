const express = require("express");
const app = express();
const taskRoutes = require("./routes/tasks.routes");

app.listen(3000, () => console.log("server on port 3000"));

app.use(express.json());

app.use("/tasks", taskRoutes);
