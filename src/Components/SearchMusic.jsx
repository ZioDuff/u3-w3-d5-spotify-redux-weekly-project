import { Col, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
  likeTrackAction,
  selectSongAction,
  unlikeTrackAction,
} from "../Redux/Actions"

const SearchMusic = () => {
  const artistName = useSelector((state) => state.search.content)
  const likedTracks = useSelector((state) => state.favouriteReducer.content)
  const dispatch = useDispatch()
  return (
    <>
      {artistName && (
        <>
          <h2>Hai cercato</h2>
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
        </>
      )}
    </>
  )
}
export default SearchMusic
