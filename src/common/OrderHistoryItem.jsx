const React = require('react')

module.exports = function OrderHistoryItem({ order }) {
    return (
                    <div className='order-history-item'>
                    <div>{order.date}</div>
                    <div>{order.contents}</div>
                    <div>{order.total}</div>
                    </div>
    )
}