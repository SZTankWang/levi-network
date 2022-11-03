const express = require('express')
const path = require('path');
const bodyParser = require("body-parser");

// const router = express.Router();
const app = express()
const port = 3000

app.use(express.static(__dirname));

// add router in the Express app.
// app.use("/", router);

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/submit",(request,response) => {
//code to perform particular action.
//To access POST variable use req.body()methods.
console.log(request.body);
response.send({status:'received'});
});

