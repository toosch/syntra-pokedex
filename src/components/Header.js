import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function Header() {
  return (
    <Container className="p-0 pt-4 px-3">
      <Image
        src="https://fontmeme.com/permalink/210427/4a7fbbfb3ac7c7d406e6c0af1fc9df6b.png"
        alt="Syntra FSD"
        className="d-block mx-auto img-fluid"
      />
      <Image
        src="https://fontmeme.com/permalink/210427/a5a91fee17e4c754d4fb741965382f04.png"
        alt="Pokédex"
        className="d-block mx-auto mb-4 img-fluid"
      />
    </Container>
  );
}

export default Header;
