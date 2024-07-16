// YOUR_BASE_DIRECTORY/netlify/functions/api.ts
import fetch from "node-fetch";
import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();
router.get("/nfcstaff", async (req, res) => {
    const response = await fetch("https://api.airtable.com/v0/appzLdIRMrSF1cK9O/NFC%20Staff", {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": "Bearer " + process.env.API_SECRET
        }
    }).then(res => res.json())
    // const data = await response.json();
    return res.json(response)
    // res.send("Hello World!")
});

router.get("/nfcstaffdetail", async (req, res) => {
    const response = await fetch("https://api.airtable.com/v0/appzLdIRMrSF1cK9O/NFC%20Staff?maxRecords=3&view=Grid%20view", {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": "Bearer " + process.env.API_SECRET
        }
    }).then(res => res.json())
    // const data = await response.json();
    return res.json(response)
    // res.send("Hello World!")
})

api.use("/api/", router);

export const handler = serverless(api);
