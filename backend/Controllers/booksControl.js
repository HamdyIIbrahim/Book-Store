const multer = require('multer');
const mongoose = require('mongoose');
const bookSchema =new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    bookImg:{
        data:Buffer
    }
})
const books = mongoose.model("Books",bookSchema);

const Storage =multer.diskStorage({
    destination:"uploads",
    filename:(req,file,callBack)=>{
        callBack(null,file.originalname)
    }
})

const upload = multer({
    storage:Storage
}).single('bookImg')

const uploadBook=(req,res)=>{
    upload(req,res,(err)=>{
        if(!err){
            const book = new books({
                bookName:req.body.name,
                bookImg:{
                    data:req.file.filename
                }
            })
            book.save().then(()=>{
                console.log("saved");
            })
        }else{
            console.log(err);
        }
    })
}
const getPopularBooks=(req,res)=>{
    console.log('popular books on the home page');
};
const getAllBooks = (req,res)=>{
    console.log('welcome to books function ');
};
module.exports={getAllBooks,getPopularBooks,uploadBook};