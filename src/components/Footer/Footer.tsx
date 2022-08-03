import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <div className="footer" data-testid="footer">
      <div className="socialMedia">
        <Instagram />
        <Twitter />
        <Facebook />
        <LinkedIn />
      </div>
      <p> &copy; 2022 nicolasbuecher.github.io</p>
    </div>
  );
}

export default Footer;
