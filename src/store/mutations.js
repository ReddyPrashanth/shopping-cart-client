export default {
    setLoading(state, loading) {
        state.loading = loading;
    },
    setError(state, message) {
        state.error = message;
    },
    setCategories(state, categories) {
        state.categories = categories;
    },
    setFeaturedProducts(state, products) {
        state.featuredProducts = products;
    }
}