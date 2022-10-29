const express = require('express');
const{
    getData,
    updateData,
    createUser,
    deleteUser} = require ('../controllers');

    const router = express.Router();

    router.get('/get-user-data/:id', getData);
    router.post('/create-user', createUser);
    router.put('/update-user-adress/:id', updateData);
    router.delete('/delete-user/:id', deleteUser);


    module.exports = {
        router
    }