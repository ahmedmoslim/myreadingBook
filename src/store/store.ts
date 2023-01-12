import { configureStore } from "@reduxjs/toolkit";
import bookReducer from './booksSlice'
export const store = configureStore({
  reducer: {
      books:bookReducer },
});
export const getMockedState = (preloadedState?: RootState) => {
  return configureStore({ reducer:{books:bookReducer}, preloadedState})
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch