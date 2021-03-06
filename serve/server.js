const express = require('express')
const app = express()
const mongoose = require('mongoose');
// 链接mongodb 并且关联集合immoc
const DB_URL = 'mongodb://127.0.0.1:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function () {
    console.log('mongo connect success')
})
const User = mongoose.model('user',new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
// User.create({
//     name:'uiui',
//     age:19
// },function (err,doc) {
//     if (!err){
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })
User.remove({age:18},function (err,doc) {
    console.log(doc)
})
// user 相当于数据库名称，Schema 相当于集合
app.get('/',function (req,res) {
    res.send('<h1>hello world</h1>')
})


app.get('/data',function (req,res) {
    User.find({age:19},function (err,doc) {
         res.json(doc)
    })
})

app.listen(9093,function () {
    console.log('node app start at port 9093')
})