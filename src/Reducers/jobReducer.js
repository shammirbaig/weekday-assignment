import * as actionTypes from "../Actions/jobActionTypes";

const initialState = {
    jobs: [],
    loading: false,
    filteredJobs: [],
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
        case actionTypes.SET_FILTER_LOADING:{
            return { ...state, loading: true }
        }
        case actionTypes.SET_FILTER_SUCCESS: {
            const  filters  = action.payload;
            let filteredJobs = [...state.jobs];
            
            if (filters && filters.role && filters.role.length !== 0) {
                filteredJobs = filteredJobs.filter(job => filters.role.includes(job.jobRole));
            }
            if (filters && filters.experience !== null) {
                filteredJobs = filteredJobs.filter(job => Number(filters.experience) === Number(job.minExp));
            }
            if (filters && filters.location && filters.location.length !== 0) {
                filteredJobs = filteredJobs.filter(job => filters.location.some(location => job.location.includes(location)));
            }
            if (filters && filters.remote !== null) {
                filteredJobs = filteredJobs.filter(job => filters.remote === job.location);
            }
            if (filters && filters.minpay !== null) {
                filteredJobs = filteredJobs.filter(job => filters.minpay === job.minJdSalary);
            }
            
            return {
                ...state,
                filteredJobs,
                loading: false
            };
        }
        default:
            return state;
    }

}

export default jobReducer;