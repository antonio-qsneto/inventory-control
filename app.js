const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const { MongoServerSelectionError } = require("mongodb")
const mongoose = require("mongoose")
const path = require("path")
const port = 8080
const admin = require("./routes/routes")

// Configs
    //bodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    // Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'index'}))
        app.set('view engine', 'handlebars');
        app.use(express.static('views/images'));
    // Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb+srv://antonio:abnerebella@clusterstock.vlxew.mongodb.net/stock?retryWrites=true&w=majority", { 
        useNewUrlParser: true,
        useUnifiedTopology: true, }).then(()=>{
        console.log("conectado");
        }).catch((err)=>{
        console.log("erro ao conectar"+err);
        })

    // public
        app.use(express.static(path.join(__dirname, "style")))

// Rotes

// Principal Rote
app.get('/', (req, res)=>{
    res.render('inicio')
})

app.use("/admin", admin)

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})
