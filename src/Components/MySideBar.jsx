import {
  Button,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap"
import SpotifyLogo from "../assets/logo.png"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { searchSongsAction } from "../Redux/Actions"

const MySideBar = () => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("")
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(searchSongsAction(query))
  }

  return (
    <Nav
      className="navbar navbar-expand-md fixed-left justify-content-between"
      id="sidebar"
    >
      <Container className=" flex-column align-items-start">
        <Navbar.Brand href="index.html">
          <img src={SpotifyLogo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        {/* <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button> */}
        <Navbar.Collapse id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Nav.Link
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Nav.Link>
              </li>
              <li>
                <InputGroup className=" mt-3">
                  <Form onSubmit={handleSubmit}>
                    <FormControl
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                      value={query}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <Button
                        variant="black"
                        className="btn btn-outline-success btn-sm h-100"
                      >
                        GO
                      </Button>
                    </div>
                  </Form>
                </InputGroup>
              </li>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
      <div className="nav-btn">
        <Button className="btn signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="btn login-btn" type="button">
          Login
        </Button>
        <Nav.Link href="#">Cookie Policy</Nav.Link> |
        <Nav.Link href="#"> Privacy</Nav.Link>
      </div>
    </Nav>
  )
}

export default MySideBar
