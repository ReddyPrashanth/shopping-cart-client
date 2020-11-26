import RepositoryFactory from '../../repositories/RepositoryFactory'

const repository = RepositoryFactory.get('reviews');

export default {
    async reviews(context, params) {
        const response = await repository.reviews(params.productId, params.page);
        context.commit('setReviews', response.data.data);
        context.commit('setMetaData',response.data.meta);
        context.commit('setLinks', response.data.links);
    }
}