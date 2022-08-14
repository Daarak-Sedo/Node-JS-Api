const BookModel= require("../models/BookModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allBook= await BookModel.find()
    res.send({msg: allBook})
}

module.exports.createUser= createBook
module.exports.getUsersData= getBookData