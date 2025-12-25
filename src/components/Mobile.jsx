import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUpShort, Telegram, Whatsapp } from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";

function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const handleClick1 = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClick2 = () => {
    setIsOpen2((prev) => !prev);
  };
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((ent) => {
        if (ent.isIntersecting) {
          ent.target.classList.add("animation");
        }
      });
    });
    const currentHeader = refs.current;
    currentHeader.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => {
      currentHeader.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  return (
    <>
      <div className="container-fluid main-mobile" id="main">
        <div className="row">
          <div className="col-12">
            <section className="about-us" id="about-us">
              <span className="span">In Knockout ..!</span>
              <br />
              <p>
                we are not just boxing training. We nurture the body's mind and
                will . . .
                <span style={{ display: isOpen ? "block" : "none" }}>
                  Here's where you are fearing You build your self -esteem and
                  get stronger than ever. Welcome to the rim. It's time to prove
                  yourself.
                </span>
              </p>
              <span className="clickMore" onClick={handleClick1}>
                {isOpen ? (
                  <ArrowUpShort className="bi-arrow-up-short" />
                ) : (
                  <p>more</p>
                )}
              </span>
            </section>
          </div>
          <div className="col-12">
            <section>
              <Carousel>
                <Carousel.Item>
                  <img
                    src="/photo-club-three.jfif"
                    className="d-block w-100"
                  ></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="/photo-club-two.jfif"
                    className="d-block w-100"
                  ></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="/photo-club-one.jfif"
                    className="d-block w-100"
                  ></img>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="/photo-club-four.jpg"
                    className="d-block w-100"
                  ></img>
                </Carousel.Item>
              </Carousel>
            </section>
          </div>
          <div className="col-12">
            <section className="about-club">
              A modern boxing club that combines classic Knockout exercises with
              scientific methods to make the body stronger and the mind more
              focused . . .
              <span style={{ display: isOpen2 ? "block" : "none" }}>
                We believe that boxing is not just a sport, but a mental
                discipline of controlling emotions and respecting inner
                strength. Our goal is for every person - regardless of age or
                experience - to find their own path of personal growth in the
                ring with confidence and energy.
              </span>
            </section>
            <span className="clickMore" onClick={handleClick2}>
              {isOpen2 ? (
                <ArrowUpShort className="bi-arrow-up-short" />
              ) : (
                <p>more</p>
              )}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 p-0">
            <div className="colorTape">
              <p>Become Strong</p>
            </div>
          </div>
          <div className="col-12" id="classes">
            <section>
              <div className="parent-classes-pic-sec">
                <img src="/beginner-photo.jfif" alt="boxer" />
              </div>
              <div className="parent-classes-para-sec">
                <h2 id="headerClass" ref={(el) => (refs.current[0] = el)}>
                  Beginner Class
                </h2>
                <p>
                  Learn how to guard, move, and punch with the basics. Our
                  instructors will be by your side every step of the way.
                </p>
              </div>
            </section>
          </div>
          <div className="col-12">
            <section>
              <div className="parent-classes-pic-sec">
                <img src="/Advanced-photo.jfif" alt="boxer" />
              </div>
              <div className="parent-classes-para-sec">
                <h2 id="headerClass" ref={(el) => (refs.current[1] = el)}>
                  Advanced Class
                </h2>
                <p>
                  Especially for those who have basic skills and want to become
                  more professional, focusing on endurance and strategy
                  techniques.
                </p>
              </div>
            </section>
          </div>
          <div className="col-12">
            <section>
              <div className="parent-classes-pic-sec">
                <img src="/Personal-photo.jfif" alt="boxer" />
              </div>
              <div className="parent-classes-para-sec">
                <h2 id="headerClass" ref={(el) => (refs.current[2] = el)}>
                  Personal Class
                </h2>
                <p>
                  Dedicated workouts with a personal trainer, targeted planning
                  to increase fat burning power and get you ready for
                  competitions .
                </p>
              </div>
            </section>
          </div>
        </div>
        <img
          className="boxing-glove"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGGklEQVR4nO2aaYxURRDHf3jrivcNiqjrfXzwwCvxAO8zRhP5YDQimoiJGsXwAV00HPO634CrRvEirkTFFcEjRMUTiS4gMa6KhCgiIiaKkrALgsCypnaqSe9j9pLpNzOb+ScvO+/Yrurqru5/VRdUUEEFFRQRNbCThYMiOM7AOXLFcLqFgc/CzvQm1MAOMZxvYaSB1y0ss9DaydVi4BcL0y08EEE15YgYjrUw1sCvyU4a2GJhpYVGC18aaDCw0MJyC5vyfP9NDHfUwq6UOiwMsDBNO+k6IR17zsKtFk7urCP1sKO4hoVbDEyx8JfXjhjtZkoVBm4ysEaV/dfCi+Lf27teaLsLvBnxdi3sRSkhhjvFf1XJGRk4opDtt0IfmUEGVqmMxiz0oxRgc9N1i4HNFu4JLGuAge+cEZ6CPSkmsnCMhSadmsPTkDkJ9jGwSI0wnWLCwKeqyCtpyp0IR1lYrbKvoBiI4AId+VXj4MC05cdwr8pfJGtE2vKxMEtHYHTqwgFhjY5YRXBRaswOYALsa2CjEJcIDqNIMFCjs2BK0E5bGKmEpkVZ2xM6+h+EkhvDUCFVFmwG+uf7xsCpaoAfQ+mBMrKtXD1BVYNMfwt3J+jwH8IQ8zFHA2tlGw5CjmK4TBX4OwNnWagy8LynXJAVWEbUGdjCJ/r7sw6+XarvB4ZQZKY2fn+ClbXt/RbeCjQDpO1N4n4R9JUZoANxeZ5vf9KFsDqE76+T6TURDnXPM7B3wg0KOgvEwAaaRe7jcLA8M/CQyqpPuoDoKO8K7gI2F9mJ1X/3nxs4JGGA+QUVnJM9Q2XfJ/cxHK4R5jqf/kqwpd8tCUFzz9bGF/jPRRkvrm8LV2MYXEjZFq5S4/4pM06fzVdZ13rf1el3WQqNOJfJkY5+4T+fAEd6oz9G/04rtHwDc1T+THXHsXpfq+8v1W15Y5AFMIZzVeC8ZDDiDBDD8RIFGtiQhf0Kzfdl91Ed3tGEisj9QaJO2f703cOEQATVKmBpnkVKrN4qcb+B2arYsELrYOA8LwewzWXgBcdOC44I+qqQtXkU+02VGGTgLv09K4QeuhjXudVedWqwcGMIee3gFrlk9sXAx+oCQ2WL1AVxfRZ2JyAcKYrhkpBytkLYl5KMKxMGeFJHI9L7xXp/MQFh4WmdASNIAwYy2jHrP4/gdlVkdiJeCBoaCyNVOZNIAzEM1o4uzpP3b0uG6KI4XO9fDamP2wkMvEQaqM9RzRUqtF2K28DPLhkRwdUuZR1SHwPXucxzSDkdJR3aja6FR/T5QkeIgiYmcjKvcbyAtJCFfhKZCeHJwEmeMlUuEnOXzISQuhi4TWXVhZSzDQw8o5af6xMPNc674g4GRhEYBsapHo+SJsbD/o4TpLYF5YGk4HQGhCdBSXgrfXMWTiFl6IHIBnFFGRCKAQOvuRNfP0mSkuxRoROxXUJzgt/qTPg6rZHQwKwpRO6hx5AUtVv95VSmo5R1YqE808AQ2cfluFsSHnIvidauzhUycIJXWTKVUkCcS1G1ZW4lMpSwNfmN5AcsvNdRKJu41lv4XhiebHUGjlaj1Yrfq5w5RT8N9hHDARY+V+UkPzDGr/4w8LJ2rknTWR9qlrlec35yP1fLaFo6ifnl2H1yDexGqaEGdjEw3tX2SIfcO3d6K3FDV+2I4SycqEHWVDXKcok6i7Hj9BiSGHEjludwY5gwSC2Fu1B8P4Iz5F78u6Sm9fYgjwFGdNP/ZeaskQVVSukMPJiF0yh3A3jlMx9JWYsGTV/JX72WdJbvk+wP5W6A7kD8X1LtGlI/ZuD9/9tWUWELqHTFAFQM0NorDGChSgobdAscpHR4iJw6CT+QlFt32yrHbfDNbmx/zcII/QPPfG2VqwHeMPCPBE667c2TzioFbkiWzkvZW0dtlQWsKt2TsnaJJ7w4f2WyLcoJNndq21bQJFGckCClu/1d9UYN7CEldsL7Y7heMs7eqdIyL9naxg4pJ0S5Ov/G7tLfxLVCcgN+4lNchXJDK/TRworRWuPXqCfJrqhKTnhXCw3WStOsJEkkqpT/l5BXix42p1b9WWqwcEPR014VVFBBBRXQO/EfY4mEsuaJrWEAAAAASUVORK5CYII="
          alt="boxing"
        />
        <div className="row coaches">
          <div className="col-12">
            <h3>Become hero with Us</h3>
          </div>
          <div className="col-12">
            <div className="pin">
              <div>
                <p ref={(el) => (refs.current[3] = el)}>Co.Jack</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="doublePin">
              <div>
                <p ref={(el) => (refs.current[4] = el)}>Co.Sam</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footerPara">
              <span>
                <span>Are you ready to start ?</span>
                <span>Be in touch with us !</span>
                <span>Are you ready to start ?</span>
              </span>
            </div>
          </div>
          <div className="col-12">
            <span className="sec-content">
              <span className="head-con" ref={(el) => (refs.current[5] = el)}>
                Number :
              </span>
              <span className="body-con" ref={(el) => (refs.current[6] = el)}>
                +989012345678
              </span>
              <span className="head-con" ref={(el) => (refs.current[7] = el)}>
                Address :
              </span>
              <span className="body-con" ref={(el) => (refs.current[8] = el)}>
                Iran-tehran-iranian-63
              </span>
            </span>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <img
              src="boxing-gloves.png"
              className="img-gloves"
              ref={(el) => (refs.current[9] = el)}
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-mobile" id="footer">
        <span>
          {"\u00A9"} 2025 Knockout Boxing club . All Rights Reserved .<br />
          <span>Designed & Developed by Neoma Studio</span>
        </span>
        <span className="mb-4">Follow us :</span>
        <span
          className="instagram"
          ref={(el) => (refs.current[10] = el)}
          style={{
            background:
              "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)",
            WebkitMaskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><rect x=%222%22 y=%222%22 width=%2220%22 height=%2220%22 rx=%225%22 ry=%225%22/><path d=%22M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z%22/><line x1=%2217.5%22 y1=%226.5%22 x2=%2217.5%22 y2=%226.5%22/></svg>')",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            WebkitMaskPosition: "center",
            maskImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><rect x=%222%22 y=%222%22 width=%2220%22 height=%2220%22 rx=%225%22 ry=%225%22/><path d=%22M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z%22/><line x1=%2217.5%22 y1=%226.5%22 x2=%2217.5%22 y2=%226.5%22/></svg>')",
            maskRepeat: "no-repeat",
            maskSize: "contain",
            maskPosition: "center",
          }}
        ></span>
        <p style={{ color: "#a83232ff" }} ref={(el) => (refs.current[11] = el)}>
          Instagram
        </p>
        <Telegram ref={(el) => (refs.current[12] = el)} />
        <p style={{ color: "#0088CC" }} ref={(el) => (refs.current[13] = el)}>
          Telegram
        </p>
        <Whatsapp ref={(el) => (refs.current[14] = el)} />
        <p style={{ color: "#25D366 " }} ref={(el) => (refs.current[15] = el)}>
          Whatsapp
        </p>
      </div>
      <hr />
    </>
  );
}

export default Mobile;
