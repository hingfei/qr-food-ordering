export const initialOrderList = [
    {
        title: 'Salad',
        quantity : 5,
        price : '20',
        total : 100
    },
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
        // Todo: implement logic if it is empty?
        return orderList.map(
            order => {
                if (order.title === action.payload){
                    order.quantity = order.quantity + 1;
                }
                return order;
            })
    }

    // remove_item_from_cart action
    if (action.type === 'remove_item_from_cart'){
        // Todo: implement logic if item quantity is 0
        return orderList.map(
            order => {
                if (order.title === action.payload){
                    order.quantity = order.quantity - 1;
                }
                return order;
            })
    }
}

