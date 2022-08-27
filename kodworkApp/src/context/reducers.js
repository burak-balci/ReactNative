export default (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      const {favoriteJob} = action.payload;
      return {
        ...state,
        favoriteJob: [...state.favoriteJob, favoriteJob],
      };

    case 'REMOVE_FAVORITE':
      return {
        favoriteJob: [
          ...state.favoriteJob.filter(
            job => job[0].id !== action.payload.item.id,
          ),
        ],
      };

    default:
      return state;
  }
};
