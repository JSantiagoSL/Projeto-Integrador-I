const express = require('express');
const app = express();
const router = require('./routers');

app.use(express.json());
app.use(router);

app.listen(3306, () => {
  console.log('Server is running on port 3306');
});
