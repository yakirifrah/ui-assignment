import { useReducer } from 'react';
import { HomeTabContext, initialState } from './homeTabContext';
import { fetchDataForHomeTab } from '../reducerContext';

export const HomeTabProvider = (props) => {
  const [state, dispatch] = useReducer(fetchDataForHomeTab, initialState);

  return <HomeTabContext.Provider value={{ state, dispatch }}>{props.children}</HomeTabContext.Provider>;
};
