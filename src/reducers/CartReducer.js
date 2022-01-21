export const initialOrderList = [];

// Example Order List
//{"id": id, "title":"Testing","quantity":15,"price":28,"total":1000}

export const orderReducer = (orderList, action) => {
    // add_to_cart action
    if (action.type === 'add_item_to_cart'){
        let orderFound = false;

        orderList = orderList.map(
            order => {
                if (order.id === action.payload.id){
                    order.quantity = order.quantity + 1;
                    order.total = order.quantity * order.price;
                    orderFound = true;
                }
                return order;
            })
        if (orderFound === false) {
            return [...orderList, {id: action.payload.id, title: action.payload.title, quantity: 1, price: action.payload.price, total: action.payload.price * 1}]
        }
        return orderList;
    }
       
        // remove_item_from_cart action
        if (action.type === 'remove_item_from_cart'){
            let orderRemove  = false;

            let newOrderList = orderList.map(
                order => {
                    if (order.id === action.payload.id){
                        // check if order quantity is 1, if it is 1 then remove from list
                        if (order.quantity === 1)
                        {
                            orderRemove = true;
                        }
                        else {
                            order.quantity = order.quantity - 1;
                            order.total = order.quantity * order.price;
                        }
                    }
                    return order;
                })

                // This will return a list that contains all other items other than matched title
                if (orderRemove){
                    newOrderList = orderList.filter(order => (order.id !== action.payload.id))
                }

            return newOrderList;
        }

        // RENDER BACK PREVIOUS ORDER
        if (action.type === 'load_order_list'){
            orderList = action.payload
            return orderList
        }
}

