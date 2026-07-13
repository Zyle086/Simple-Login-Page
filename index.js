
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "node:path";
import { fileURLToPath, fileURLToPathBuffer } from "node:url";
import fs from "node:fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = "8080";
const app = express();

app.use(bodyParser.urlencoded( {extended : true}));
app.use(express.static("docs"));
app.listen(PORT, () => {
    console.log(`Connected to port ${PORT}.`);
})

app.get("/", (req, res) => {
    // HANDLES THE GET INDEX.HTML FROM BROWSER AND SENDS THE FILE FROM THE PUBLIC DIRECTORY
    res.sendFile(__dirname + "/docs/index.html");
}); 


app.post("/login",  (req, res) => {  
    
    // TODO: ADD RESPONSE TO A LOGIN REQUESTS
    res.sendStatus(200);

});

app.post("/register", (req, res) => {

    // TODO: ADD RESPONSE TO SIGNUP REQUESTS
    res.sendStatus(200);
})