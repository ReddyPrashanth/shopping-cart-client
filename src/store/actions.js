
import CategoryRepository from '../repositories/CategoryRepository';
import ProductRepository from '../repositories/ProductRepository';

export default {
    loading(context, loading) {
        context.commit('setLoading', loading);
    },
    error(context, message) {
        context.commit('setError', message);
    },
    async categories(context) {
        const response = await CategoryRepository.index();
        context.commit('setCategories', response.data);
    },
    async featuredProducts(context) {
        const response = await ProductRepository.featured();
        context.commit('setFeaturedProducts', response.data);
    }
}