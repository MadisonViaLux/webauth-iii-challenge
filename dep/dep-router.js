const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('../token/token')
const Department = require('./dep-model');
const restricted = require('./dep-middleware')





router.get('/', restricted, (req, res) => {
    Department.find()
        .then(user => {
            res.json({ currentUser: req.username, user });
        })
        .catch(err => res.send(err));
});



router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12);
    user.password = hash;

    Department.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json({ message: "can't add the user", error });
        });
});



router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Department.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user);
                res.status(200).json({ message: `Hello there ${user.username}!`, token, });
            } else {
                res.status(401).json({ message: 'Invalid creds my dude' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});






module.exports = router;