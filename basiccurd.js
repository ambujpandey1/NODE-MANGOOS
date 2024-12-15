const mongoos=require('mongoose');

mongoos.connect("mongodb://localhost:27017/mongoos"); // database connection

//Schema
const productSchema=new mongoos.Schema({
    name:String,
    price:Number,
    brand:String,
    Category:String
});


const SaveIndb=async ()=>{
    //model
    
    const ProductModel=mongoos.model('pros',productSchema);
    let data= new ProductModel(
        {
            name:"Note Pro",
            price:1342,
            brand:"maxx",
            Category:"Mobile"
        }
    );
    let result =await data.save();
    console.log(result);


}

// SaveIndb();

/// filds-->Schema
// scheme ka use karke mongodb and node js connect karta hai => model

const updateDb = async ()=>{
const Product= mongoos.model('pros',productSchema);
let data =await Product.updateMany(
    {name:"m8"},
    {
        $set:{price:8800,name:"Ambuj"}
    }
)
console.log(data);

};

//updateDb();

const deleteDb=async ()=>{
    const Product= mongoos.model('pros',productSchema); 
    let data=await Product.deleteOne({name:'Ambuj'})
    console.log(data);
};

// deleteDb();


const findDb=async ()=>{
    const Product= mongoos.model('pros',productSchema); 
    let data=await Product.find()
    console.log(data);
};

findDb();