import { Link } from "react-router-dom";

function ScrollUp() {
  return (
    <div id="back-top">
      <Link title="Go to Top" to="#">
        {" "}
        <i className="fas fa-level-up-alt"></i>
      </Link>
    </div>
  );
}

export default ScrollUp;
