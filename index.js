const express = require('express');
const userRoutes = require('./src/routes/userRoutes')
const teamRoutes = require("./src/routes/teamRoutes");
const taskRoutes = require("./src/routes/taskRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

const app = express();

const PORT = 8080

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/users', userRoutes);
app.use('/v1/teams', teamRoutes);
app.use('/v1/task', taskRoutes);
app.use('/v1/comment', commentRoutes);


app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`);
})

module.exports = app;