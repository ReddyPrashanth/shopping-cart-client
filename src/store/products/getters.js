export default {
    products(state) {
        return state.products;
    },
    next(state) {
        return state.next;
    },
    prev(state) {
        return state.prev;
    },
    currentPage(state) {
        return state.current_page;
    },
    lastPage(state) {
        return state.last_page;
    },
    totalPages(state) {
        return Math.round(state.total/state.per_page);
    }
}