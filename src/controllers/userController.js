const userData = require('../data/userData');


const getUsers = (req, res) => {
    res.send(userData);
};
const postUser = (req, res) => {
    userData.push(req.body);
    res.send(userData);
};
module.exports = {
    getUsers,
    postUser
};

