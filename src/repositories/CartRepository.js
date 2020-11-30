import Client from './../clients/AxiosClient'

const resource = '/cart';

export default {
    index(cartId) {
        return Client.get(`${resource}?cartId=${cartId}`)
    },
    savedItems(cartId) {
        return Client.get(`${resource}/savedForLater?cartId=${cartId}`)
    },
    store(params){
        return Client.post(`${resource}/addItem`, params);
    },
    update(params){
        return Client.put(`/cartItem/${params.id}`, params);
    },
    deleteItem(id) {
        return Client.delete(`/cartItem/${id}`);
    },
    saveForLater(id, savedForLater) {
        return Client.get(`/cartItem/${id}/savedForLater?savedForLater=${savedForLater}`);
    }
}