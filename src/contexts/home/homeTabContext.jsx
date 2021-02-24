import { createContext } from 'react';

export const initialState = {
  loading: true,
  data: {},
  error: '',
};

export const HomeTabContext = createContext(initialState);
