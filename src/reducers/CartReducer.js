export const initialOrderList = [
    
    {
        title: 'Chicken',
        quantity : 3,
        price : '50',
        total : 150
    },
    {
        title: 'French Fries',
        quantity : 6,
        price : '5',
        total : 30
    }
]

export const orderReducer = (orderList, action) => {
    // add_to_cart action
    if (action.type === 'add_item_to_cart'){
        let orderFound = false;
     
        // Todo: implement logic if it is empty?
        orderList = orderList.map(
            order => {
                if (order.title === action.payload){
                    order.quantity = order.quantity + 1;
                    order.total = order.quantity * order.price;
                    orderFound = true;
                }
                return order;
            })
        if (orderFound === false) {
            return [...orderList, {title: action.payload, quantity: 1, price: 5, total: 5}]
        }
        return orderList;
    }
       
        // remove_item_from_cart action
        if (action.type === 'remove_item_from_cart'){
        // Todo: implement logic if item quantity is 0
        return orderList.map(
            order => {
                if (order.title === action.payload){
                    order.quantity = order.quantity - 1;
                    order.total = order.quantity * order.price;
                }
                return order;
            })
        }
        // Todo: validate negative number
}

