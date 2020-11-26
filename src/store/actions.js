
import RepositoryFactory from '../repositories/RepositoryFactory'

const productRepository = RepositoryFactory.get('products');
const categoryRepository = RepositoryFactory.get('categories');


export default {
    loading(context, loading) {
        context.commit('setLoading', loading);
    },
    error(context, message) {
        context.commit('setError', message);
    },
    async categories(context) {
        const response = await categoryRepository.index();
        context.commit('setCategories', response.data);
    },
    async featuredProducts(context) {
        const response = await productRepository.featured();
        context.commit('setFeaturedProducts', response.data);
    }
}