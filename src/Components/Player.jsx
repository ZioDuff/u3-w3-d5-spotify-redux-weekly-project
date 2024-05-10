import { Button, Col } from "react-bootstrap"
import Shuffle from "../assets/playerbuttons/shuffle.png"
import Prev from "../assets/playerbuttons/prev.png"
import Play from "../assets/playerbuttons/play.png"
import Next from "../assets/playerbuttons/next.png"
import Repeat from "../assets/playerbuttons/repeat.png"
const Player = () => {
  return (
    <Col xs={6} md={4} className="playerControls">
      <div className="d-flex">
        <Button variant="transparent">
          <img className="icon" src={Shuffle} alt="shuffle" />
        </Button>
        <Button variant="transparent">
          <img className="icon" src={Prev} alt="Prev" />
        </Button>
        <Button variant="transparent">
          <img className="icon" src={Play} alt="Play" />
        </Button>
        <Button variant="transparent">
          <img className="icon" src={Next} alt="Next" />
        </Button>
        <Button variant="transparent">
          <img className="icon" src={Repeat} alt="Repeat" />
        </Button>
      </div>
      <div className="progress mt-3">
        <div role="progressbar"></div>
      </div>
    </Col>
  )
}
export default Player
