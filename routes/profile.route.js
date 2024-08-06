const express = require('express')
const profileRoute = express.Router()
const UserProfile = require('../src/Pages/UserProfile')
const { User, Order } = require('../db/models')
const { where } = require('sequelize')


profileRoute.get('/', async(req, res) => {
try {
    const userFromDB = await User.findByPk(Number(req.session.user_sid))
    const currUser = userFromDB.get()
    const arrOfOrdersFromDB = await Order.findAll({
        where: {
            user_id: currUser.id
        }
    })
    const resultArr = []
    const arrOfOrders = arrOfOrdersFromDB
    .map(order => order.get())
    .forEach(item => {
        const scope = JSON.parse(item.books)
        const str = `${scope.title}, ${scope.author}`
        const obj = {}
        obj.contents = str
        obj.data = `${item.updatedAt.getDate()}.${item.updatedAt.getMonth()+1}.${item.updatedAt.getFullYear()}, ${item.updatedAt.getHours()}:${item.updatedAt.getMinutes()}`
        obj.total = 777
        resultArr.push(obj)
    })


    res.render(UserProfile, { user: res.locals?.user, orders: resultArr})

} catch (error) {
    console.log('ERR_PROFILE_ROUTE', error);
}
})


module.exports = profileRoute