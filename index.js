const express = require('express');

require('./services/passport');

const app = express();

require('./routes/authRoutes.sj')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Express app running on port: ' + PORT);
});
