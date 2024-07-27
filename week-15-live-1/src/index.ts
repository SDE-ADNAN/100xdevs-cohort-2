import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

const client = new PrismaClient();

app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    });
});

app.post("/", async (req, res) => {
    console.log("Received POST request"); // Debugging statement
    console.log("Request body:", req.body); // Debugging statement

    const { email, name } = req.body;

    // Check if email and name are provided
    if (!email || !name) {
        return res.status(400).json({ error: "Email and name are required." });
    }

    await client.user.create({
        data: {
            email,
            name
        }
    });

    res.json({
        message: "Done signing up!"
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});