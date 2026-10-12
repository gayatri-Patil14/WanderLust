const mongoose=require("mongoose");
const schema=mongoose.Schema;

const listingSchema = new schema({
    title: String,
    description: String,

    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://images.unsplash.com/photo-1448375240586-882707db888b",
            set: (url) =>
                url === ""
                    ? "https://images.unsplash.com/photo-1448375240586-882707db888b"
                    : url
        }
    },

    price: Number,
    location: String,
    country: String
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;

