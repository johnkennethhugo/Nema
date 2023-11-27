const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

app.use(express.json());
app.use('/users',     require('./components/routes/employeeRoutes'));
app.use('/clients',   require('./components/routes/clientRoutes'));
app.use('/services',  require('./components/routes/serviceRoutes'));
app.use('/tasks',     require('./components/routes/taskRoutes'));

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {
  app,
  server
};