import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const URL = "https://secrets-api.appbrewery.com/random";

app.use(express.static("public"));

app.get("/", async(req, res) =>{
    try{
        const response = await axios.get(URL);
        const results = response.data;
        res.render("index.ejs", {
            user: results["username"], 
            secret: results.secret});
    }
    catch(error){
        console.error("Error: ", error.message);
        res.render("index.ejs", {user: "error", secret: "error"});
    }
});

app.listen(port, (req, res) => {
    console.log("Listening to port " + port);
});