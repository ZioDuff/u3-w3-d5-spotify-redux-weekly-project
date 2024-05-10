import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { Col, Container, Row } from "react-bootstrap"

import MySideBar from "./Components/MySideBar"
import MyNav from "./Components/MyNav"
import Music from "./Components/Music"
import Player from "./Components/Player"
import MyFooterSong from "./Components/MyFooterSong"

function App() {
  return (
    <>
      <Container fluid className="mb-5">
        <Row>
          <Col xs={3} as={"aside"}>
            <MySideBar />
          </Col>
          <Col xs={12} md={9} as={"main"} className="offset-md-3 mainPage">
            <Row>
              <MyNav />
            </Row>
            <Row>
              <Col className="text-light" xs={10}>
                <div>
                  <h2 className="text-light">Rock Classic</h2>
                  <Music artistName="katy perry" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-light" xs={10}>
                <div className="text-light">
                  <h2>Pop</h2>
                  <Music artistName="eminem" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="text-light" xs={10}>
                <div>
                  <h2 className="text-light">Rap</h2>
                  <Music artistName="eminem" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container as={"footer"} fluid className="fixed-bottom bg-container pt-1">
        <Row className="h-100">
          <Col lg={10} className="offset-lg-2">
            <Row className="h-100  justify-content-center align-items-center ">
              <MyFooterSong />
              <Player />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
