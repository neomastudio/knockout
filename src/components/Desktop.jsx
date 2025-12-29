import "bootstrap/dist/css/bootstrap.min.css";
import { ArrowUpShort, Telegram, Whatsapp } from "react-bootstrap-icons";
import { useEffect, useRef, useState } from "react";
import club1 from '../assets/photo-club-one.jfif';
import club2 from '../assets/photo-club-two.jfif';
import club3 from '../assets/photo-club-three.jfif';
import club4 from '../assets/photo-club-four.jpg';
import beginner from '../assets/beginner-photo.jfif';
import advanced from '../assets/Advanced-photo.jfif';
import personal from '../assets/Personal-photo.jfif';


export default function Desktop() {
  const [activeItems, setActiveItems] = useState(null);
  const items = [
    {
      img: club3,
      title: "Power",
      text: "Strength isn't in the punch - it's in the mind .",
    },
    {
      img: club2,
      title: "Focus",
      text: "When I lock in , the whole world fades .",
    },
    {
      img: club1,
      title: "Fight",
      text: "Every strike takes me closer to my better self.",
    },
    {
      img: club4,
      title: "Rise",
      text: "I fall. I rise. That's what a fighter does .",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  const refs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animation");
        }
      });
    });
    const arraysRefs = refs.current;
    arraysRefs.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });
    return () => {
      arraysRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="desktopLine"
      >
        <defs>
          <filter id="glow" x="0" y="40%" width="100%" height="80%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" result="blur" />
            <feFlood floodColor="#8b0000" floodOpacity="1" />
            <feComposite in2="blur" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M0,96L40,117.3C80,139,160,181,240,186.7C320,192,400,160,480,138.7C560,117,640,107,720,112C800,117,880,139,960,160C1040,181,1120,203,1200,208C1280,213,1360,203,1400,197.3L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          filter="url(#glow)"
        ></path>
      </svg>
      <div className="container-fluid main-desktop" id="main">
        <div className="row">
          <div className="col-md-12" id="about-us">
            <h1 className="titleDesktopHeader">In Knockout ..!</h1>
            <p
              className="paraDesktopHeader"
              ref={(el) => {
                refs.current[0] = el;
              }}
            >
              we are not just boxing training. We nurture the body's mind and
              will here's where you are fearing You build your self -esteem and
              get stronger than ever. Welcome to the rim. It's time to prove
              yourself.
            </p>
          </div>
          <div className="col-md-12">
            <div className="gallery">
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`items ${
                    activeItems === i
                      ? "active"
                      : activeItems !== null
                      ? "dimmed"
                      : ""
                  }`}
                  onMouseEnter={() => setActiveItems(i)}
                  onMouseLeave={() => setActiveItems(null)}
                >
                  <img src={item.img} alt={item.title} />
                  <div className="overlay">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
              ;
            </div>
          </div>
          <div className="col-md-12">
            <section
              className="capGallery"
              ref={(el) => {
                refs.current[1] = el;
              }}
            >
              A modern boxing club that combines classic Knockout exercises with
              scientific methods to make the body stronger and the mind more
              focused . . .
              <span style={{ display: isOpen ? "block" : "none" }}>
                We believe that boxing is not just a sport, but a mental
                discipline of controlling emotions and respecting inner
                strength. Our goal is for every person - regardless of age or
                experience - to find their own path of personal growth in the
                ring with confidence and energy.
              </span>
            </section>
            <span className="clickMore" onClick={handleClick}>
              {isOpen ? (
                <ArrowUpShort className="bi-arrow-up-short" />
              ) : (
                <p>more</p>
              )}
            </span>
          </div>
          <hr />
        </div>
        <div className="row classes" id="classes">
          <div className="col-md-5">
            <div className="itemPhotoClasses ps-5 pe-0">
              <img
                src={beginner}
                style={{
                  borderTop: " 4px solid var(--clr-red)",
                  borderLeft: "4px solid var(--clr-red)",
                }}
              />
            </div>
          </div>
          <div className="col-md-7 ps-0 pe-4 d-flex align-items-center ">
            <div className="itemTextClasses">
              <h2
                ref={(el) => {
                  refs.current[2] = el;
                }}
              >
                Beginner Class
              </h2>
              <p
                ref={(el) => {
                  refs.current[3] = el;
                }}
              >
                Learn how to guard, move, and punch with the basics. Our
                instructors will be by your side every step of the way.
              </p>
            </div>
          </div>
        </div>
        <div className="row classes">
          <div className="col-md-7 d-flex align-items-center ">
            <div className="itemTextClasses">
              <h2
                ref={(el) => {
                  refs.current[4] = el;
                }}
              >
                Advanced Class
              </h2>
              <p
                ref={(el) => {
                  refs.current[5] = el;
                }}
              >
                Especially for those who have basic skills and want to become
                more professional, focusing on endurance and strategy
                techniques.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="itemPhotoClasses ps-0 pe-3">
              <img
                src={advanced}
                style={{ borderRight: "4px solid var(--clr-red)" }}
              />
            </div>
          </div>
        </div>
        <div className="row classes">
          <div className="col-md-5">
            <div className="itemPhotoClasses ps-5 pe-0">
              <img
                src={personal}
                style={{
                  borderBottom: " 4px solid var(--clr-red)",
                  borderLeft: "4px solid var(--clr-red)",
                }}
              />
            </div>
          </div>
          <div className="col-md-7 ps-0 pe-4 d-flex align-items-center ">
            <div className="itemTextClasses">
              <h2
                ref={(el) => {
                  refs.current[6] = el;
                }}
              >
                Personal Class
              </h2>
              <p
                ref={(el) => {
                  refs.current[7] = el;
                }}
              >
                Dedicated workouts with a personal trainer, targeted planning to
                increase fat burning power and get you ready for competitions .
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 color-tape-desk">
            <p
              ref={(el) => {
                refs.current[8] = el;
              }}
            >
              Become Strong
            </p>
          </div>
          <div className="col-md-12 p-0">
            <div className="coaches-desk">
              <div>
                <span className="heading">Are you ready to start ?</span>
                <span
                  className="texting"
                  ref={(el) => {
                    refs.current[9] = el;
                  }}
                >
                  Be in touch with us !
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className=" coach onePerson"
              ref={(el) => {
                refs.current[10] = el;
              }}
            ></div>
            <div
              className=" coach twoPerson"
              ref={(el) => {
                refs.current[11] = el;
              }}
            ></div>
          </div>
        </div>
        <div className="row" style={{ marginTop: "10%" }} id="footer">
          <div className="col-md-4">
            <div
              className="card-content"
              ref={(el) => {
                refs.current[12] = el;
              }}
            >
              <span>Number :</span>
              <span>+989012345678</span>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card-content"
              ref={(el) => {
                refs.current[13] = el;
              }}
            >
              <span>We're waiting for you</span>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card-content"
              ref={(el) => {
                refs.current[14] = el;
              }}
            >
              <span>Address :</span>
              <span>Iran-tehran-iranian-63</span>
            </div>
          </div>
        </div>
        <div className="row footer-desk">
          <div className="col-md-6 d-flex justify-content-start align-items-end pb-5 ps-5">
            <span>
              {"\u00A9"} 2025 Knockout Boxing club . All Rights Reserved .<br />
              <span>Designed & Developed by Neoma Studio</span>
            </span>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-end pb-5 ps-5">
            <div className="row">
              <div className="col-md-12 text-center">
                <span>Follow us :</span>
              </div>
              <div className="col-md-4 text-center icons">
                <span
                  className="instagram"
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
                  ref={(el) => {
                    refs.current[15] = el;
                  }}
                ></span>
                <p className="Instagram">Instagram</p>
              </div>
              <div className="col-md-4 text-center icons">
                <Telegram
                  ref={(el) => {
                    refs.current[16] = el;
                  }}
                />
                <p className="Telegram">Telegram</p>
              </div>
              <div className="col-md-4 text-center icons">
                <Whatsapp
                  ref={(el) => {
                    refs.current[17] = el;
                  }}
                />
                <p className="Whatsapp">Whatsapp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
