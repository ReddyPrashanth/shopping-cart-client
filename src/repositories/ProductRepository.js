import Client from './../clients/AxiosClient'

const resource = 'products';

export default {
    featured() {
        return Client.get(`/${resource}/featured/index`)
    },
    products(category, page) {
        return Client.get(`/subCategories/${resource}/${category}?page=${page}`)
    },
    product(id) {
        return Client.get(`/${resource}/${id}`)
    }
}