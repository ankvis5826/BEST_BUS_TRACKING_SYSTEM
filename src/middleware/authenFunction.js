const jwt = require('jsonwebtoken');
const Users = require('../model/registration')

const authen = async function (req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ','');
        const decodedtoken = jwt.verify(token, '@BESTProject@')
        const user =  await Users.findOne( {_id: decodedtoken._id, 'tokens.token':token})
        if(!user){
            throw new Error({
                Error:"Authorization First"
            })
        }
        req.user = user  
        next()
    } catch (e) {
        res.status(404).send({ Error: `${e} Authorization First` })
    }
}

module.exports = authen;