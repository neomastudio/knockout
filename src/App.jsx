import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import { ArrowRightShort } from "react-bootstrap-icons";
import Mobile from "./components/Mobile";
import Desktop from "./components/Desktop";
import { Link } from "react-scroll";

function App() {
  const navbarIcon = useRef(null);
  const navbarList = useRef(null);
  const [desktopWidth, setDesktopWidth] = useState(window.innerWidth > 768);
  useEffect(() => {
    const handleResize = () => setDesktopWidth(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    const handleClick = (e) => {
      if (navbarIcon.current && navbarIcon.current.contains(e.target)) {
        navbarIcon.current.style.left = "-150px";
        navbarList.current.style.left = "1%";
      } else {
        navbarIcon.current.style.left = "-50px";
        navbarList.current.style.left = "-150px";
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <>
      <div className="navbar" ref={navbarIcon}>
        <ArrowRightShort color="#121212" />
      </div>
      <div className="list-nav" ref={navbarList}>
        <ul>
          <li>
            <Link to="header" smooth duration={1000} offset={0}>Home</Link>
          </li>
          <li>
            <Link to="about-us" smooth duration={1000} offset={0}>About</Link>
          </li>
          <li>
            <Link to="classes" smooth duration={1000} offset={0}>Classes</Link>
          </li>
          <li>
            <Link to="footer" smooth duration={1000} offset={0}>Contact</Link>
          </li>
        </ul>
      </div>
      <Header />
      {desktopWidth ? <Desktop /> : <Mobile />}
    </>
  );
}

export default App;
//<ScrollLink to="#main">
