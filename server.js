import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// config stuff
const __filename = fileURLToPath(import.meta.url);
const publicDir = path.join(path.dirname(__filename), 'dist');
const port = process.env.SERVER_PORT || 8080;

// fallback to index.html
app.use("/assets",express.static(publicDir + "/assets"));
app.get("*", (req, res) => {
    res.sendFile(publicDir + "/index.html")
})


app.listen(port, () => {
    console.log(`Listening on ${port}`)
});