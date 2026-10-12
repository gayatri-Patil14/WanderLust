const mongoose=require("mongoose");
const initData=require("./data.js");
const listing=require("../Models/listing.js");

const mongo_Url="mongodb://127.0.0.1:27017/wanderLust";

main().then((res)=>{
    console.log("Connected succesfully");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_Url);
}

const initdb=async()=>{
    await listing.deleteMany();
    await listing.insertMany(initData.data);
    console.log("data was initialized");
}
initdb();