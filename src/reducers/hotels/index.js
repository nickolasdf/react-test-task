export const FETCH_HOTELS_SUCCESS = "FETCH_HOTELS_SUCCESS";
export const FETCH_HOTELS_LOADING = "FETCH_HOTELS_LOADING";

const initialState = {
    isLoading: true
}

const hotels = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_HOTELS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false
            }
        case FETCH_HOTELS_LOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
};

export default hotels;