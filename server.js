import express from 'express';
import https from 'https';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
const app = express();

// config stuff
const __filename = fileURLToPath(import.meta.url);
const publicDir = path.join(path.dirname(__filename), 'dist');
const port = process.env.SERVER_PORT || 8080;

// fallback to index.html
app.use("/assets",express.static(publicDir + "/assets"));
app.use(express.static(publicDir));
app.get("*", (req, res) => {
    res.sendFile(publicDir + "/index.html")
})

// app.listen(port, () => {
//     console.log(`Listening on ${port}`)
// });
https.createServer({
    key: fs.readFileSync(publicDir + "/private.key"),
    cert: fs.readFileSync(publicDir + "/public.crt")
}, app).listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});
