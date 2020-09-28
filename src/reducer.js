export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  token:
    'BQALNyJ5hGTwaNb4VilgWrHWIED4aalgmlvjz_kuls6-efuxAj7XrXTMC_wqNljhNgu3041JrRNVKWsC3ufnUP61GcMJQ6HNJUtFATgxjWLCalpOkhUtpRbr0XwxVtR3o1p5bSE-sxl-CVAd0keNZHzfLZGQ_flX',
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
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playLists: action.playLists,
      };
    default:
      return state;
  }
};
export default reducer;
