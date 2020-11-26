export default {
    setReviews(state, reviews) {
        state.reviews = reviews;
    },
    setLinks(state, links){
        state.next = links.next;
        state.prev = links.prev;
    },
    setMetaData(state, metadata){
        state.current_page = metadata.current_page;
    }
}