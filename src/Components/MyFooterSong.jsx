import { Col } from "react-bootstrap"
import { useSelector } from "react-redux"

const MyFooterSong = () => {
  const songSelected = useSelector((state) => state.songSelected.content)

  return (
    <>
      {songSelected && (
        <Col xs={3}>
          <div className="d-flex align-items-center text-light justify-content-center">
            <img src={songSelected.album.cover_small} alt="" />
            <div>
              <p>{songSelected.title}</p>
            </div>
          </div>
        </Col>
      )}
    </>
  )
}

export default MyFooterSong
