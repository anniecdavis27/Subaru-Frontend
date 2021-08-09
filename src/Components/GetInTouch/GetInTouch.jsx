import "./getintouch.css";
import { Link } from "react-router-dom";

function GetInTouch() {
  return (
    <div className="GetInTouch">
      <div className="container">
        <div className="get-in-touch-left">
          <p>Phone Number: (917)428-5975</p>
          <p>Email: anniecdavis27@gmail.com</p>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <Link to={'/contact/'} class="get-in-touch-btn">
          Contact Us
          </Link>

        </div>
        <div className="get-in-touch-right">
          <img
            src="https://live.staticflickr.com/65535/51361276256_861b4f1b1e_h.jpg"
            alt="Brookie picture"
          />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
