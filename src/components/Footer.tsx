import { Instagram, Twitter, Facebook, LinkedIn } from "@mui/icons-material";
import { ReactElement } from "react";
import "../styles/Footer.css";

function Footer(): ReactElement {
  return (
    <div className="footer">
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
