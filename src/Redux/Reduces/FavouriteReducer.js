import { LIKE_TRACK, UNLIKE_TRACK } from "../Actions"

const initialState = {
  content: [],
}

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case LIKE_TRACK:
      return {
        ...state,
        content: [...state.content, action.payload],
      }
    case UNLIKE_TRACK:
      return {
        ...state,
        content: state.content.filter((track) => track.id !== action.payload),
      }
    default:
      return state
  }
}
export default favouriteReducer
