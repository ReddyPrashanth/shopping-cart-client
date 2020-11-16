export default {
    setProducts(state, products) {
        state.products = products;
    },
    setMetaData(state, metadata) {
        state.current_page = metadata.current_page;
        state.total = metadata.total;
        state.last_page = metadata.last_page;
    },
    setLinks(state, links) {
        state.next = links.next;
        state.prev = links.prev;
    }
}