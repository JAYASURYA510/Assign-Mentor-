import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ConnectDB } from "./Database/Db.Config.js";
import mentorRouter from "./Routers/Router.Mentor.js";
import studentRouter from "./Routers/Router.Student.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/mentors", mentorRouter);
app.use("/api/students", studentRouter);


app.get("/", async (req, res) => {
  try {
    res
      .status(313)
      .json({
        message: "APP WORKING is Successfully",
      });
    console.log("assign mentor created successfully.");
  } catch (error) {
    res.status(500).json({ message: " error server starting" });
    console.log("Error");
  }
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

ConnectDB();