import Container from "react-bootstrap/Container";

function Header() {
  return (
    <Container className="p-0 pt-4">
      <img
        src="https://fontmeme.com/permalink/210427/4a7fbbfb3ac7c7d406e6c0af1fc9df6b.png"
        alt="Syntra FSD"
        className="d-block mx-auto"
      />
      <img
        src="https://fontmeme.com/permalink/210427/a5a91fee17e4c754d4fb741965382f04.png"
        alt="Pokédex"
        className="d-block mx-auto mb-4"
      />
    </Container>
  );
}

export default Header;
