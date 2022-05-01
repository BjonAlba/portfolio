import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import "./App.css";
// import video from "./public/videos/PolygonalBall.mp4";
import "./components/Background/SideScroll.js";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

function App() {
  useEffect(() => {
    gsap.to(".snippet-hero", {
      scrollTrigger: {
        trigger: "#aboutAnchorLeft",
        start: "20% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },
      y: () => (gsap.getProperty(".outercontainer", "height") / 4) * -1,
      duration: 1,
    });

    gsap.to(".logo-html", {
      scrollTrigger: {
        trigger: "#skillsAnchorLeft",
        start: "50% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },

      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 322,
        end: 0.22,
      },
      duration: 5,
    });

    gsap.to(".logo-css", {
      scrollTrigger: {
        trigger: "#skillsAnchorLeft",
        start: "50% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },

      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 0,
        end: 0.39,
      },
      duration: 5,
    });

    gsap.to(".logo-react", {
      scrollTrigger: {
        trigger: "#skillsAnchorLeft",
        start: "50% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },

      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 52,
        end: 0.528,
      },
      duration: 5,
    });

    gsap.to(".logo-nodejs", {
      scrollTrigger: {
        trigger: "#skillsAnchorLeft",
        start: "50% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },

      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 90,
        end: 0.632,
      },
      duration: 5,
    });

    gsap.to(".logo-mongodb", {
      scrollTrigger: {
        trigger: "#skillsAnchorLeft",
        start: "50% 80%",
        end: "0px 0px",
        scroller: ".outercontainer",
        toggleActions: "restart none none reverse",
        invalidateOnRefresh: true,
        horizontal: true,
      },

      motionPath: {
        path: "#path",
        align: "#path",
        alignOrigin: [0.5, 0.5],
        autoRotate: 145,
        end: 0.715,
      },
      duration: 5,
    });
  }, []);

  return (
    <>
      <div className="outercontainer" id="scrl1">
        {/* <video autoPlay muted loop id="bgVideo">
          <source src={video} type="video/mp4" />
        </video> */}

        <div className="innercontainer">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
