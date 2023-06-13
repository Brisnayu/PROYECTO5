import "./Footer.css";
import { v4 as uuidv4 } from "uuid";
import { SocialNetwork } from "../../utils/SocialNetwork";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Created with love 💕 by Brisna Páez for Rock The Code.</p>
      </div>

      <div className="icon-rrss">
        {SocialNetwork.map((rrss) => (
          <a href={rrss.url} target="_blank" key={uuidv4()}>
            <img src={rrss.img} alt={rrss.alt} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
