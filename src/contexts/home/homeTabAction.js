import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_LOADING } from '../actionTypes';
export const fetchDataForHomeTab = () => async (dispatch) => {
  dispatch({
    type: FETCH_DATA_LOADING,
  });
  try {
    const res = await fetch('https://603aa3faf1d6aa0017a10db0.mockapi.io/data', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const data = await res.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: FETCH_DATA_ERROR });
  }
};
