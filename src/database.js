import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://ups:salesiana@cluster0.epgdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(db => console.log('Db is connected.'))
    .catch(error => console.log(error))