const { request, response } = require('express');

const getUser = (req = request, res = response) => {
    const { apikey, limit = 10, page = 1} = req.query;

    res.json({
        msg: 'get APP - controller',
        apikey,
        limit,
        page
    });
}

const postUser = (req = request, res = response) => {
    const body = req.body;
    
    res.json({
        msg: 'post APP - controller',
        body
    });
}

const putUser = (req = request, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'put APP - controller',
        id
    });
}

const patchUser = (req = request, res = response) => {
    res.json({
        msg: 'patch APP - controller'
    });
}

const deleteUser = (req = request, res = response) => {
    res.json({
        msg: 'delete APP - controller'
    });
}

module.exports = {
    getUser
    , postUser
    , putUser
    , patchUser
    , deleteUser
}