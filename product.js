const mongoose=require('mongoose');

// schema
const productSchem=new mongoose.Schema(
    {
        name:String,
        price:Number,
        brand:String,
        category:String
    }
)

module.exports=mongoose.model('pros',productSchem);