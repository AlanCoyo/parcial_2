const express=require("express");
const {getUserData}= require("../controllers");
const {updateUserAdress}= require("../controllers");

const router=express.Router();
 
router.get("/account",getUserData);
router.put("/account",updateUserAdress);

module.exports={
    router
}