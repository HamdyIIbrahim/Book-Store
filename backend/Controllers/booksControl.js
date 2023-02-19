const multer = require('multer');
const mongoose = require('mongoose');
const bookSchema =new mongoose.Schema({
    bookName:{
        type:String,
        require:true
    },
    bookUrl:{
        type:String,
        require:true
    }
})
const books = mongoose.model("Books",bookSchema);
// books.create({bookName:"GMAT Official Guide Quantitative Review 2022: Book + Online Question Bank" ,bookUrl:"../uploads/book 4.jpeg"},(err)=>{
//     console.log(err)
// })

const getPopularBooks=(req,res)=>{
    console.log('popular books on the home page');
};
const getAllBooks = (req,res)=>{
    books.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err);
    })
};

module.exports={getAllBooks,getPopularBooks};













// const Storage =multer.diskStorage({
//     destination:"uploads",
//     filename:(req,file,callBack)=>{
//         callBack(null,file.originalname)
//     }
// })

// const upload = multer({
//     storage:Storage
// }).single('bookImg')

// const uploadBook=(req,res)=>{
//     upload(req,res,(err)=>{
//         if(!err){
//             const book = new books({
//                 bookName:req.body.name,
//                 bookImg:{
//                     data:req.file.filename
//                 }
//             })
//             book.save().then(()=>{
//                 console.log("saved");
//             })
//         }else{
//             console.log(err);
//         }
//     })
// }