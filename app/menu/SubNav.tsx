import Nav from "react-bootstrap/Nav";

function SubNav() {
  return (
    <Nav variant="underline" defaultActiveKey="/menu" className="custom-nav">
      <Nav.Item>
        <Nav.Link href="/menu">Menu</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/menu/featured" eventKey="/menu/featured">
          Featured
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/menu/previous" eventKey="/menu/previous">
          Previous
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/menu/favorites" eventKey="/menu/favorites">
          Favorites
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default SubNav;
