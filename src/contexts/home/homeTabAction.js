import { FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_LOADING } from '../actionTypes';
export const fetchDataForHomeTab = () => async (dispatch) => {
  dispatch({
    type: FETCH_DATA_LOADING,
  });
  try {
    const res = await fetch('../../lib/mock-data.json');
    const data = await res.json();
    dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
  } catch (err) {
    console.log({ err });
    dispatch({ type: FETCH_DATA_ERROR });
  }
};
