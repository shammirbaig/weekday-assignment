import * as actionTypes from "../Actions/jobActionTypes";

const initialState = {
    jobs: [],
    loading: false,
    error: null,
    visibleJobs: [],
    startIndex: 0
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
        case actionTypes.SET_VISIBLE_JOBS: {
            return { ...state, visibleJobs: action.payload };
        }
        case actionTypes.SET_START_INDEX: {
            return { ...state, startIndex: action.payload };
        }
        default:
            return state;
    }

}

export default jobReducer;