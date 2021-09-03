import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

//Middleware
//app.use(bp.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('dev'))

//Routes
const db = [];

app.post('/todo', (req, res) => {
    const newTodo = {
        id: Date.now(),
        text: req.body.text,
    }

    db.push(newTodo);
    res.status(201).json(newTodo);
})

app.get('/todo/:id', (req, res) => {
    const todo = db.find(t => {
        return t.id === +req.params.id
    })
    res.json({data: todo})
});

app.listen(process.env.PORT, () => {
    console.log('Server on http://localhost:8000');
});
