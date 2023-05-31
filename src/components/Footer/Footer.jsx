import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Created with love 💕 by Brisna Páez for Rock The Code.</p>
      </div>

      <div className="icon-rrss">
        <a href="https://github.com/Brisnayu" target="_blank">
          <img src="./icon-github.png" alt="icon-linkedin" />
        </a>
        <a href="https://www.linkedin.com/in/brisna-a-paez-m-283934154" target="_blank">
          <img src="./icon-linkedin.png" alt="icon-github" />
        </a>
        <a href="https://www.instagram.com/brisna_ayu/" target="_blank">
          <img src="./icon-instagram.png" alt="icon-email" />
        </a>
        <a href="mailto:brisnapaez25@gmail.com" target="_blank">
          <img src="./icon-email.png" alt="icon-instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
