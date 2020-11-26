import RepositoryFactory from '../../repositories/RepositoryFactory'

const repository = RepositoryFactory.get('products');

export default {
    async products(context, data) {
        const response = await repository.products(data.category, data.page);
        context.commit('setProducts', response.data.data);
        context.commit('setMetaData',response.data.meta);
        context.commit('setLinks', response.data.links);
    },
    async product(context, id) {
        const response = await repository.product(id);
        context.commit('setProduct', response.data.data);
    }
}