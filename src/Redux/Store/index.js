import { configureStore, combineReducers } from "@reduxjs/toolkit"

import selectSongReducer from "../Reduces/selectSongReducer"
import favouriteReducer from "../Reduces/FavouriteReducer"
import searchReducer from "../Reduces/SearchReducer"

const rootReducer = combineReducers({
  songSelected: selectSongReducer,
  favouriteReducer: favouriteReducer,
  search: searchReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
