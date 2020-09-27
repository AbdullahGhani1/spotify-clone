export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  //   action -> type,[payload]
  switch (action.type) {
    case 'SET_USER':
      return {
        //   keep whatever in a current state
        ...state,
        // update the user slice currently user is null
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
