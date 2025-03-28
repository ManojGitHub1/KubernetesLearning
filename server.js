const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Node.js app running on Kubernetes!',
        hostname: os.hostname()
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});