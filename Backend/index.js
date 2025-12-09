import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import formRoutes from "./routes/formRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import frontendRoutes from "./routes/frontendRoutes.js";
import freeEbookRoutes from "./routes/freeEbookRoutes.js";
import faqsRoutes from "./routes/faqsRoutes.js";
import bookBoxRoutes from "./routes/bookBoxRoutes.js";
import videoLessonRoutes from "./routes/videoLessonRoutes.js";
import testimonialVideoRoutes from "./routes/testimonialVideoRoutes.js";
import dynamicEbookRoutes from "./routes/dynamicEbookRoutes.js";
import path from "path";
import { fileURLToPath } from "url";
import mysql from "mysql2/promise";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Initialize database
const initDatabase = async () => {
  try {
    const pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "admin123",
      database: "language_king",
    });

    const sqlFile = path.join(__dirname, "db", "createTables.sql");
    const sql = fs.readFileSync(sqlFile, "utf8");
    const queries = sql.split(";").filter((query) => query.trim().length > 0);

    for (const query of queries) {
      try {
        await pool.execute(query);
      } catch (err) {
        if (!err.message.includes("already exists")) {
          console.error("Database query error:", err.message);
        }
      }
    }

    console.log(" Database initialized successfully!");
    await pool.end();
  } catch (error) {
    console.error(" Database initialization failed:", error.message);
  }
};

initDatabase();

app.use(cors());
app.use(express.json());

// Serve static files from uploads directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/forms", formRoutes);
app.use("/api", studentRoutes);
app.use("/api", uploadRoutes);
app.use("/api", frontendRoutes);
app.use("/api/free-ebook", freeEbookRoutes);
app.use("/api/faqs", faqsRoutes);
app.use("/api/book-box", bookBoxRoutes);
app.use("/api", videoLessonRoutes);
app.use("/api", testimonialVideoRoutes);
app.use("/api/dynamic-ebook", dynamicEbookRoutes);

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Email sending endpoint
app.post("/send-email", async (req, res) => {
  try {
    console.log("Received form data:", req.body);
    console.log("Environment variables:", {
      EMAIL_USER: process.env.EMAIL_USER,
      TO_EMAIL: process.env.TO_EMAIL,
      EMAIL_PASS: process.env.EMAIL_PASS ? "Set" : "Not set",
    });

    const { name, phone, course, form_source } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.TO_EMAIL,
      subject: `New Form Submission - ${form_source}`,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>Form Source:</strong> ${form_source}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
  // console.log('Available endpoints:')
  // console.log('- GET /api/pte-students - Get PTE students')
  // console.log('- GET /api/naati-ccl-students - Get NAATI-CCL students')
  // console.log('- GET /api/frontend/pte-students - Get PTE students for frontend')
  // console.log('- GET /api/frontend/naati-ccl-students - Get NAATI-CCL students for frontend')
  // console.log('- POST /api/upload - Upload files')
  // console.log('- POST /send-email - Send email')
});
