import { LinkContainer } from "react-router-bootstrap";

const Logo = () => {
  return (
    <LinkContainer to="/home" className="header d-flex justify-content-end">
      <h2>SOM STUDIO</h2>
    </LinkContainer>
  );
};

export default Logo;
