export default {
    quantity(state) {
        return state.items.reduce((total, item) => item.quantity + total , 0);
    },
    items(state) {
        return state.items;
    },
    savedItems(state) {
        return state.savedItems;
    },
    cartPrice(state) {
        return Math.round(state.items.reduce((total, item) => item.quantity*item.product.price + total , 0));
    },
    freeShipping(state) {
        return state.freeShipping;
    }
}