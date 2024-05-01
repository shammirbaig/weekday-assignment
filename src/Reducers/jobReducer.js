import * as actionTypes from "../Actions/jobActionTypes";

const initialState = {
    jobs: [],
    loading: false,
    error: null,
};
const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_JOBS_REQUEST: {
            return { ...state, loading: true }
        }
        case actionTypes.FETCH_JOBS_SUCCESS: {
            return { ...state, loading: false, jobs: [...state.jobs, ...action.payload] }
        }
        case actionTypes.FETCH_JOBS_FAILURE: {
            return { ...state, loading: false, jobs: [], error: action.payload }
        }
        default:
            return state;
    }

}

export default jobReducer;