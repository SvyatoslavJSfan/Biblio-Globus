const React = require('react')
const OrderHistoryItem = require('./OrderHistoryItem')

module.exports = function OrderHistory({ orders }) {
    return (
        <div className='order-history'>
            {
                orders && orders.length && orders.map(order => {
                    return (
                        <OrderHistoryItem order={order}/>
                    )
                })
            }
        </div>
    )
}