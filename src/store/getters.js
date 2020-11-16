export default {
    isLoading(state) {
        return state.loading;
    },
    error(state) {
        return state.message;
    },
    categories(state) {
        return state.categories;
    },
    featuredProducts(state) {
        return state.featuredProducts;
    }
}