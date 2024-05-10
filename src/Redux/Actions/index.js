export const SELECT_SONG = "SELECT_SONG"
export const GET_SONG = "GET_SONG"
export const LIKE_TRACK = "LIKE_TRACK"
export const UNLIKE_TRACK = "UNLIKE_TRACK"
//qui sopra tutti gli inport necessari
//
//
//
//qui sotto tutte le action
export const selectSongAction = (obj) => ({ type: SELECT_SONG, payload: obj })

//action fetch canzoni
export const getSongAction = (props) => {
  return async (dispatch, getState) => {
    console.log("get state", getState())
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.artistName
      )
      if (response.ok) {
        let { data } = await response.json()
        console.log(data)
        dispatch({ type: GET_SONG, payload: data })
      } else {
        throw new Error("Error in fetching songs")
      }
    } catch (err) {
      console.log("error", err)
    }
  }
}

export const likeTrackAction = (track) => {
  return {
    type: LIKE_TRACK,
    payload: track.id,
  }
}

export const unlikeTrackAction = (track) => {
  return {
    type: UNLIKE_TRACK,
    payload: track,
  }
}
