const express = require("express")
const app = express()
const mysql = require("mysql")
const bodyParser = require("body-parser")
const cors = require("cors")

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "1234",
    database: "contactform"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM contacts"

    db.query(sqlGet, (err, result) => {
        if (err) console.log(err)
        else (res.send(result))
    })
})
app.post("api/post", (req, res) => {
    const { name, email, contact } = req.body
    const sqlInsert = "INSERT INTO contacts(name,email,contact) VALUES(?,?,?)"
    db.query(sqlInsert, [name, email, contact], (err, result) => {
        if (err) console.log(err)
    })
})

app.get("/", (req, res) => {
    //const sqlinsert = "INSERT INTO contacts(name,email,contact) VALUES('eliud','eliudowalo@gmail.com','0700221145')"
    //db.query(sqlinsert, (err, result) => {
    //if (err) console.log(err)
    //else
    // res.send(result)
    //})
})


app.listen(5000, () => console.log(`server started on port 5000`))