import ProductRepository from '../../repositories/ProductRepository'

export default {
    async products(context, data) {
        console.log(data);
        const response = await ProductRepository.products(data.category, data.page);
        context.commit('setProducts', response.data.data);
        context.commit('setMetaData',response.data.meta);
        context.commit('setLinks', response.data.links);
    }
}