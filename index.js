const express = require('express');
const path = require('path');

const app = express();

// Use port from environment (Jenkins), fallback if not set
const PORT = process.env.PORT || 3000;

 app.get('/', (req, res) => {
// res.sendFile(path.join(__dirname, 'index.html'));
   res.send("hello word");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


//  In jenkins you can change port dynamically
//  PORT=4000 pm2 restart mynode2 || PORT=4000 pm2 start index.js --name mynode2
