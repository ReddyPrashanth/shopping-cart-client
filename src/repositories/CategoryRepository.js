import Client from './../clients/AxiosClient'

const resource = '/categories';

export default {
    index() {
        return Client.get(`${resource}`)
    },
    show(id) {
        return Client.get(`${resource}/${id}`);
    }
}