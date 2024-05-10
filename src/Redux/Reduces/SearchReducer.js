import { SEARCH_SONGS } from "../Actions"

const initialState = {
  content: "",
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SONGS:
      return {
        ...state,
        content: action.payload,
      }
    default:
      return state
  }
}
export default searchReducer
