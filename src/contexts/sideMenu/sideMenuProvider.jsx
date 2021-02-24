import { useReducer } from 'react';
import { SideMenuContext, initialState } from './sideMenuContext';
import { sideMenuReducer } from '../reducerContext';
import { SIDE_MENU_ACTION } from '../actionTypes';
export const SideMenuProvider = (props) => {
  const [state, dispatch] = useReducer(sideMenuReducer, initialState);

  const setOpen = (loading) => {
    dispatch({
      type: SIDE_MENU_ACTION,
      payload: loading,
    });
  };

  return <SideMenuContext.Provider value={{ ...state, setOpen }}>{props.children}</SideMenuContext.Provider>;
};
