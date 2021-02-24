import { createContext } from 'react';
export const initialState = {
  open: true,
  setOpen: () => {},
};
export const SideMenuContext = createContext(initialState);
