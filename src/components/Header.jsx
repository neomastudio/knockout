import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useRef } from "react";
import { ChevronDown } from "react-bootstrap-icons";
import { Link } from "react-scroll";

function Header() {
  const svgPort = useRef(null);
  useEffect(() => {
    function changeViewPort() {
      if (window.innerWidth < 1000) {
        svgPort.current.setAttribute("viewBox", "-100 -100 1100 800");
      } else {
        svgPort.current.setAttribute("viewBox", "0 0 900 600");
      }
    }
    changeViewPort();
    window.addEventListener("resize", changeViewPort);
  }, []);
  return (
    <>
      <div className="container-fluid header" id="header">
        <div className="row">
          <div className="col-12" id="logo">
            KNOCKOUT
          </div>
        </div>
        <div className="row pt-md-3">
          <div className="col-12 col-md-6">
            <div className="headerPara">
              <span>
                <span>Boxing</span>
                <span>means</span>
                <span>the</span>
                <span>fight</span>
                <span>within</span>
                <span>Boxing</span>
              </span>
              <p>
                Every punch , every effort , a step toward the peak and win .
              </p>
              <div>
                <Link to="main" smooth duration={600} offset={-3}>
                  <ChevronDown />
                  <ChevronDown />
                  <ChevronDown />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 ps-0 pe-0">
            <div id="box_hed">
              <svg
                id="visual"
                ref={svgPort}
                viewBox="0 0 900 600"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
              >
                <g transform="translate(422.1829286692946 305.82393621245103)">
                  <path d="M154.9 -208.9C195.8 -183.5 220.6 -131.6 239.6 -76.9C258.7 -22.2 272 35.2 249.6 74C227.2 112.8 169.2 132.8 121.6 158.6C74.1 184.3 37 215.6 -1.4 217.5C-39.8 219.4 -79.5 191.8 -109.3 160.3C-139 128.8 -158.7 93.4 -177.1 53.5C-195.6 13.7 -212.9 -30.5 -202.6 -66.9C-192.2 -103.2 -154.3 -131.7 -115.9 -157.9C-77.6 -184.1 -38.8 -208.1 9.1 -220.6C57 -233.1 114 -234.3 154.9 -208.9"></path>
                </g>
              </svg>
              <img src="/imgHeader.png"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
