"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Middleware to parse JSON bodies
const client = new client_1.PrismaClient();
app.get("/", (req, res) => {
    res.json({
        message: "Healthy server"
    });
});
app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Received POST request"); // Debugging statement
    console.log("Request body:", req.body); // Debugging statement
    const { email, name } = req.body;
    // Check if email and name are provided
    if (!email || !name) {
        return res.status(400).json({ error: "Email and name are required." });
    }
    yield client.user.create({
        data: {
            email,
            name
        }
    });
    res.json({
        message: "Done signing up!"
    });
}));
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
