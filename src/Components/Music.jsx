/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Button, Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { likeTrackAction, selectSongAction } from "../Redux/Actions"

const Music = (props) => {
  const [artistName, setArtistName] = useState([])
  const dispatch = useDispatch()
  // const [likedTracks, setLikedTracks] = useState({})
  const likedTrack = useSelector((state) => state.likedTrack)
  console.log(likedTrack)
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

  // const handleLike = (e, trackId) => {
  //   e.stopPropagation()
  //   const updatedLikedTracks = { ...likedTracks }
  //   if (likedTracks[trackId]) {
  //     delete updatedLikedTracks[trackId]
  //   } else {
  //     updatedLikedTracks[trackId] = true
  //   }
  //   setLikedTracks(updatedLikedTracks)
  // }

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
              <Button
                variant="outline-light"
                className="border-0 p-0 px-2 rounded-5 mb-1"
                onClick={() => dispatch(likeTrackAction(track))}
              >
                {track.id ? (
                  <i className="bi bi-heart"></i>
                ) : (
                  <i className="bi bi-heart-fill"></i>
                )}
              </Button>
            </Col>
          )
        })}
    </Row>
  )
}
export default Music
