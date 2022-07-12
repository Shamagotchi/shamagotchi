const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/api/host', (req, res) => {
    res.send({ host : 'shama' });
})

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
})

