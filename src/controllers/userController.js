const userData = require('../data/userData');


const getUsers = (req, res) => {
    res.status(200).send(userData);
};
const postUser = (req, res) => {
    userData.push(req.body);
    res.status(200).send(userData);
};
module.exports = {
    getUsers,
    postUser
};

