import express from "express";
import cors from "cors";
import NoteRoutes from "./routes/NoteRoutes.js";

const app = express();
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.render("index"));
app.use(NoteRoutes);

app.listen(7000, () => {
    console.log("Server running on port 7000 and accessible externally");
});
