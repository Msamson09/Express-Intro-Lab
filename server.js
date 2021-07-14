import express from 'express'
import * as studentDb from './data/student-db.js'

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.redirect('/students')
})

app.get('/students', function(req, res) {
    studentDb.find({}, function(error, students){
        res.render('students/index', {
            students: students,
            error: error
        })
    })
})


app.listen(3000, function(){})