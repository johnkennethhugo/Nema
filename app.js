const express = require('express');
const app = express();
const port = process.env.PORT || 8090;

app.use(express.json());
app.use('/users', require('./routes/employeeRoutes'));
app.use('/clients', require('./routes/clientRoutes'));
app.use('/services', require('./routes/serviceRoutes'));
app.use('/tasks', require('./routes/taskRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});