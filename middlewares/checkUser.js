const { User } = require('../db/models')

const checkUser = async (req, res, next) => {
    try {
        if (req.session) {
            if (req.session.user_sid) {
                const user = await User.findByPk(req.session.user_sid)
                res.locals.user = user ? user.get() : null
            } else {
                res.locals.user = null
            }
        } else {
            res.locals.user = null
        }
        next()
    } catch (error) {
        console.log('ERR CHECKING USER', error)
        next(error)
    }
}

module.exports = checkUser