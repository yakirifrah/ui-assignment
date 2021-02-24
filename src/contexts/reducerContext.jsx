import { SIDE_MENU_ACTION, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS, FETCH_DATA_LOADING } from './actionTypes';

export const sideMenuReducer = (state, action) => {
  switch (action.type) {
    case SIDE_MENU_ACTION:
      return {
        ...state,
        open: action.payload,
      };
    default:
      return state;
  }
};

export const fetchDataForHomeTab = (state, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        error: '',
        loading: false,
        data: action.payload,
      };
    case FETCH_DATA_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_ERROR:
      return {
        loading: false,
        data: {},
        error: 'Something went wrong!',
      };
    default:
      return state;
  }
};
