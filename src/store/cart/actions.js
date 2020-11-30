import {nanoid} from 'nanoid'
import CartRepository from '../../repositories/CartRepository';
import RepositoryFactory from '../../repositories/RepositoryFactory'

const cartRepository = RepositoryFactory.get('cart');

export default {
    async savedItems(context) {
        let cartId = localStorage.getItem('cartId');
        if(cartId){
            const response = await cartRepository.savedItems(cartId)
            context.commit('setSavedItems', response.data.data);
        }
    },
    async addToCart(context, params) {
        let cartId = localStorage.getItem('cartId');
        if(cartId){
            const response = await CartRepository.store({
                                productId: params.product.id,
                                quantity: params.quantity,
                                cartId: cartId
                            });
            context.commit('addItem',{...params, id:response.data.id, saved_for_later: response.data.saved_for_later});
        }
    },
    async updateCart(context, params){
        let cartId = localStorage.getItem('cartId');
        if(cartId){
            const response = await CartRepository.update({
                                    id: params.id,
                                    quantity: params.quantity
                                });
            if(response.status === 200){
                context.commit('updateCart', params);
            }
        }
    },
    async createCartId(context) {
        let cartId = localStorage.getItem('cartId');
        if(cartId){
            let response = await cartRepository.index(cartId);
            context.commit('setCartItems', response.data.data);
        }else{
            cartId = nanoid();
            localStorage.setItem('cartId', cartId);
        }
        context.commit('setCartId', cartId);
    },
    async deleteItem(context, id) {
        const response = await cartRepository.deleteItem(id);
        if(response.status == 204){
            context.commit('deleteItem', id);
        }
    },
    async deleteSavedItem(context, id) {
        const response = await cartRepository.deleteItem(id);
        if(response.status == 204){
            context.commit('deleteSavedItem', id);
        }
    },
    async saveForLater(context, id) {
        const response = await cartRepository.saveForLater(id, true);
        if(response.status == 204){
            context.commit('moveToSaved', id);
        }
    },
    async moveToCart(context, id) {
        const response = await cartRepository.saveForLater(id, false);
        if(response.status == 204){
            context.commit('moveToCart', id);
        }
    }
}