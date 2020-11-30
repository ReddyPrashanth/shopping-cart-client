export default {
    setCartItems(state, items) {
        state.items = items;
    },
    setSavedItems(state, items) {
        state.savedItems = items;
    },
    addItem(state, params){
        const item = state.items.find(item => {
            return params.product.id === item.product.id;
        })
        if(item){
            item.quantity = params.quantity;
        }else{
            state.items.push({
                product: params.product,
                quantity: params.quantity,
                id: params.id,
                saved_for_later: params.saved_for_later
            });
        }
    },
    setCartId(state, cartId) {
        state.cartId = cartId;
    },
    updateCart(state, params) {
        const item = state.items.find(item => {
            return params.id === item.id;
        });
        if(item){
            item.quantity = params.quantity;
        }   
    },
    deleteItem(state, id) {
        const index = state.items.findIndex(item => {
            return item.id === id;
        });
        state.items.splice(index, 1);
    },
    deleteSavedItem(state, id) {
        const index = state.savedItems.findIndex(item => {
            return item.id === id;
        });
        state.savedItems.splice(index, 1);
    },
    moveToSaved(state, id) {
        const index = state.items.findIndex(item => {
            return item.id === id;
        });
        const item = state.items[index];
        item.saved_for_later = true;
        state.savedItems.push(item);
        state.items.splice(index, 1);
    },
    moveToCart(state, id) {
        const index = state.savedItems.findIndex(item => {
            return item.id === id;
        });
        const item = state.savedItems[index];
        item.saved_for_later = false;
        state.items.push(item);
        state.savedItems.splice(index, 1);
    }
}