import { Nav } from "react-bootstrap"

const MyNav = () => {
  return (
    <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
      <Nav.Link href="#">TRENDING</Nav.Link>
      <Nav.Link href="#">PODCAST</Nav.Link>
      <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
      <Nav.Link href="#">NEW RELEASES</Nav.Link>
      <Nav.Link href="#">DISCOVER</Nav.Link>
    </div>
  )
}

export default MyNav
