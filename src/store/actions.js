export default {
    loading(context, loading) {
        context.commit('setLoading', loading)
    },
    error(context, message) {
        context.commit('setError', message)
    }
}