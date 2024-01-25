var express = require("express");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
const routes = require("./router/index")

app.use(routes)

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})