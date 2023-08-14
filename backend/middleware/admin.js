const userModel = require("../models/userModel")

module.exports = function admin(req, res, next){
    if (!res.user.role === "staff" || !res.user.role === "admin")
        return res.status(403).send("Access denied.")
    next()
}