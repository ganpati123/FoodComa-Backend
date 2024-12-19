const { json } = require('express');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   firstName: {
       type: String,
       required: [true, "First Name is required"],
       minlength: [5, "First name must be atleast 5 character long"],
       lowercase: true,
       trim: true, // if the user gives extra spaces then it will automatically removed it
       maxlength: [20, "First name should be less than or equal to 20 characters"]
   },
   LastName: {
    type: String,
    required: [true, "First Name is required"],
    minlength: [5, "First name must be atleast 5 character long"],
    lowercase: true,
    trim: true, // if the user gives extra spaces then it will automatically removed it
    maxlength: [20, "First name should be less than or equal to 20 characters"]
},
mobileNumber: {
    type: String,
    trim: true,
    maxlength: [10, "phone number should be a length 10"],
    minlength: [10, "phone number should be a length 10"],
    unique: [true, "Phone number is already in use"],
    required: [true, "Phone number is should be provided"]
},
email: {
    type: String,
    trim: true,
    required: [true, "Email should be provided"],
    unique: [true, "Email is already in use"],
},
password: {
    type: String,
    required: [true, "Password should be provided"],
    minlength: [6, "password should be minimum 6 character long"]
}

});

const User = mongoose.model("User", userSchema); // Collection

module.exports = User;