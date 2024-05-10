import { configureStore, combineReducers } from "@reduxjs/toolkit"

import selectSongReducer from "../Reduces/selectSongReducer"
import favouriteReducer from "../Reduces/FavouriteReducer"

const rootReducer = combineReducers({
  songSelected: selectSongReducer,
  favouriteReducer: favouriteReducer,
})

const store = configureStore({
  reducer: rootReducer,
})

export default store
