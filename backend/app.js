import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js"; // Correct import

config({ path: "./config.env" });

const app = express();
const router = express.Router();

app.use(
  cors({
    // origin: [process.env.FRONTEND_URL],
    origin: process.env.FRONTEND_URL,
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get("/", (req, res) => {
  res.json({ success: true, message: "Welcome to Fitness Factory GYM" });
});

router.post("/send/mail", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Please Provide All Details",
    });
  }

  try {
    await sendEmail({
      email: "kshitijkumar3108@gmail.com",
      subject: "Customer Query",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message sent Successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

app.use(router);

const PORT = process.env.PORT || 3000; // Default to 3000 if PORT is not defined in config.env

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
