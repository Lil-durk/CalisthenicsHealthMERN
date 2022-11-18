import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/userRoutes";

const app = express();
const PORT = 3003;

//mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/calisthenicsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Cors setup
app.use(cors());

routes(app);

app.listen(PORT, () =>
  console.log(`CalisthenicsHealth server is running on port ${PORT}`)
);

app.get("/", (req, res) => res.send(`CalisthenicsHealth is running on port ${PORT}`));



export default app;
