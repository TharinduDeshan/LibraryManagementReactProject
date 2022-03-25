const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    Title : {
        type : String,
        required : true
    },

    SubTitle : {
        type : String,
        required : true
    },

    Author : {
        type : String,
        required : true
    },

    Quantity : {
        type : String,
        required : true
    },

    Price : {
        type : String,
        required : true
    },

    Description : {
            type : String,
            required : true
    },

    // Images : [{
    //     type : String,
    // }],

    Category : {
        type : String,
        required :true,
        default : "Others"
    },

    ItemAvailabilityStatus : {
        type : Boolean,
        required : true,
        default : true
    },

    StaffID : {
        type : String,
        required : false,
    },

    CustomerID : {
        type : String,
        required : false,
    },

    Date : {
        type : String,
        required : true,
    },

    AddedDate : {
        type : Date,
        required: true,
        default : new Date()
    }

})

const Item = mongoose.model("Item",ItemSchema);
module.exports = Item;