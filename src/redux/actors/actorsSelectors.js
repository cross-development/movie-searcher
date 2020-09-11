const getActors = state => state.actors.items;

const getActor = state => state.actors.item;

const getLoading = state => state.actors.loading;

const getError = state => state.actors.error;

export default { getActors, getActor, getLoading, getError };
