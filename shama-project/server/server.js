const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send(`This is Shamagotchi`);
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

