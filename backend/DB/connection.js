const mongoose=require ('mongoose')
const connectionString=process.env.DATABASE

mongoose.connect (connectionString).then(()=>{
    console.log("Shoe_Website Connected To MongoDb Atlas");
}).catch((err)=>{
    console.log(`MongoDb Connection Failed Error is:${err}`);
})