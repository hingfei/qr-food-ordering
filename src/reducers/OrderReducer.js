import Orders from "../data/Orders.json";

export const ordersTotal = Orders;

export const orderListReducer = (orders, action) => {
    // served action
    if (action.type === 'served') {
        orders = orders.map(order => {
            if (order.id === action.payload.id) {
                order.served = true;
            }
            return order;
        })
    }
    return orders;
}