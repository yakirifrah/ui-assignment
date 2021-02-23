import { createContext } from 'react';
export const initialState = {
  open: false,
  setOpen: () => {},
};
export const SideMenuContext = createContext(initialState);
