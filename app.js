const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./Models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejs=require("ejs-mate");
const wrapAsync=require("./utils/wrapAsync.js");
const expressError=require("./utils/expressError.js");

const mongo_Url="mongodb://127.0.0.1:27017/wanderLust";

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejs);
app.use(express.static(path.join(__dirname,"/public")));

main().then((res)=>{
    console.log("Connected succesfully");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect(mongo_Url);
}

// app.get("/sampletest",async (req,res)=>{
//     const newListing=new listing({
//         title:"new villa",
//         description:"This is a new villa",
//         price:10000,
//         location:"New York",
//         country:"USA"
//     })
//     await newListing.save();
//     console.log("saved succesful");
//     res.send("succesfull testing");
// })


//index route
app.get("/listings",wrapAsync(async (req,res)=>{
    const allListings=await Listing.find();
    res.render("listings/index.ejs",{allListings});
}));

//create
app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
})
//new
app.post("/listings",wrapAsync (async (req,res)=>{
    if(!req.body.listing){
        throw new expressError(400,"Invalid Listing Data");
    }
    const newListing=new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}))

//update
app.get("/listings/:id/edit",wrapAsync(async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));
//update
app.put("/listings/:id",wrapAsync(async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findByIdAndUpdate(id,req.body.listing,{runValidators:true,new:true});
    res.redirect(`/listings/${listing._id}`);
}))
//delete
app.delete("/listings/:id",wrapAsync(async (req,res)=>{
    const {id}=req.params;
    let list=await Listing.findByIdAndDelete(id);
    console.log(list);
    res.redirect("/listings");
}));

//show
app.get("/listings/:id",wrapAsync(async (req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}));

app.listen(8080,()=>{
    console.log("server is running on port 8080");
})

app.all("/*splat",(req,res,next)=>{
    next(new expressError(404,"page not found"));
})

app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).send(message);
})

app.get("/",(req,res)=>{
    res.send("Working");
})