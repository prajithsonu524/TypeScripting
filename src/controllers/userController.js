import userData, { push } from '../data/userData';


const getUsers = (req, res) => {
    res.status(200).send(userData);
};
const postUser = (req, res) => {
    push(req.body);
    res.status(200).send(userData);
};
export default {
    getUsers,
    postUser
};

