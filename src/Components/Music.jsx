/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  likeTrackAction,
  selectSongAction,
  unlikeTrackAction,
} from "../Redux/Actions"

const Music = (props) => {
  const [artistName, setArtistName] = useState([])
  const dispatch = useDispatch()
  // const [likedTracks, setLikedTracks] = useState({})
  const likedTracks = useSelector((state) => state.favouriteReducer.content)
  const fillMusicSection = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          props.artistName
      )
      if (response.ok) {
        let { data } = await response.json()
        setArtistName(data)
      } else {
        throw new Error("Error in fetching songs")
      }
    } catch (err) {
      console.log("error", err)
    }
  }

  useEffect(() => {
    fillMusicSection()
  }, [])

  return (
    <Row className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3 mb-5">
      {artistName &&
        artistName.slice(0, 4).map((track) => {
          return (
            <Col
              onClick={() => {
                dispatch(selectSongAction(track))
              }}
              key={track.id}
              className="text-center"
            >
              <img
                className="img-fluid"
                src={track.album.cover_medium}
                alt="track"
              />
              <p>
                Track:{track.title}
                <br />
                Artist:{track.artist.name}
              </p>
              {likedTracks && likedTracks.includes(track) ? (
                <i
                  onClick={() => dispatch(unlikeTrackAction(track.id))}
                  className="bi bi-heart-fill"
                ></i>
              ) : (
                <i
                  onClick={() => dispatch(likeTrackAction(track))}
                  className="bi bi-heart"
                ></i>
              )}
            </Col>
          )
        })}
    </Row>
  )
}
export default Music
