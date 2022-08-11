const express = require('express')
const path = require('path')
const {getQuizByCategory} = require('./controller')
const app = express()
 
app.use(express.static(path.join(__dirname, "/../public")))
 
app.get('/', function(req,res) {
   res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.get('/api/quiz/:id', getQuizByCategory)

const port = 4905
 
app.listen(port, () => {
   console.log(`Listening on port ${port}`)
})


// const Sequelize = require("sequelize");


// const sequelize = new Sequelize(CONNECTION_STRING, {
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: false,
//       },
//     },
//   });


