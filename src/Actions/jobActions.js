import * as actionTypes from './jobActionTypes';

export const fetchJobs = (limit, offset) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_JOBS_REQUEST });

  try {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "limit": limit,
        "offset": offset
      })
    };

    const response = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions);
    const data = await response.json();
    dispatch({ type: actionTypes.FETCH_JOBS_SUCCESS, payload: data.jdList });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_JOBS_FAILURE, payload: error.message });
  }
};
export const setFilter = (filters) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_FILTER_LOADING });
  dispatch({
    type: actionTypes.SET_FILTER_SUCCESS,
    payload: filters,
  }) ;
};