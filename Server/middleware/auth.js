const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

// createtoken
module.exports.creteToken = async (id,role) => {

    const token = jwt.sign({id}, JWT_SECRET, { expiresIn: "1h" })
    return token
}



// veriy the token

module.exports.verifyToken = async (req, res, next) => {
    const token = req.headers.authorization
    if (!token) {
        return res.status(401).json({ message: "No token provided" })
    }
    try {
        const decoded = jwt.verify(token,JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        res.status(401).json({ message: "Invalid token" })
    }
}