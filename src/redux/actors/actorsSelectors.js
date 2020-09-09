const getActors = state => state.actors.items;

const getLoading = state => state.actors.loading;

const getError = state => state.actors.error;

export default { getActors, getLoading, getError };
