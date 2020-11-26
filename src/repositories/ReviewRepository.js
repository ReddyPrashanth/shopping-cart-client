import Client from '../clients/AxiosClient'

const resource = 'reviews'

export default {
    reviews(productId, page) {
        return Client.get(`/products/${productId}/${resource}?page=${page}`)
    }
}