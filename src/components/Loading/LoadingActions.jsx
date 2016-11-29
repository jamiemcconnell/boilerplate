export const ActionTypes = {
  Loading: 'LOADING_LOADING'
};

export const loading = (isLoading) => ({
  type: ActionTypes.Loading,
  loading: isLoading
});
