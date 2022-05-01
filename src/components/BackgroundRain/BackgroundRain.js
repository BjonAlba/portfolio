import { useEffect } from "react";
import "./BackgroundRain.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BackgroundRain = () => {
  useEffect(() => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectsAnchorLeft",
        start: "0% right",
        endTrigger: "#contactAnchorLeft",
        end: "0% left",
        horizontal: true,
        scroller: ".outercontainer",
        toggleActions: "play pause resume pause",
        invalidateOnRefresh: true,
      },
      repeat: -1,
      repeatRefresh: true,
    });
    tl.set(".rain", {
      x: 0,
      translateY: () =>
        gsap.utils.random(
          gsap.getProperty(".rain-container", "height") * -0.5,
          gsap.getProperty(".rain-container", "height") * 0.5
        ),
      z: 0,
      rotation: 30,
    }).fromTo(
      ".rain > *",
      {
        backgroundColor: function () {
          return "hsl(" + gsap.utils.random(0, 360) + ", 80%, 55%)";
        },
        color: function () {
          return "hsl(" + gsap.utils.random(0, 360) + ", 80%, 55%)";
        },
        x: 0,
      },
      {
        x: () =>
          Math.sqrt(
            Math.pow(gsap.getProperty(".rain-container", "height"), 2) +
              Math.pow(gsap.getProperty(".rain-container", "width"), 2)
          ),
        duration: () => gsap.utils.random([8, 13]),
        repeatRefresh: true,
        stagger: { each: 1 },
      }
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#projectsAnchorLeft",
        start: "0% right",
        endTrigger: "#contactAnchorLeft",
        end: "0% left",
        horizontal: true,
        scroller: ".outercontainer",
        toggleActions: "play pause resume pause",
        invalidateOnRefresh: true,
      },
      repeat: -1,
      repeatRefresh: true,
      repeatDelay: 0,
    });
    tl2
      .set(".rain2", {
        translateX: () =>
          gsap.utils.random(
            gsap.getProperty(".rain-container", "width") * -0.5,
            gsap.getProperty(".rain-container", "width") * 0.25
          ),
        y: 0,
        z: 0,
        rotation: 30,
      })
      .fromTo(
        ".rain2 > *",
        {
          backgroundColor: function () {
            return "hsl(" + gsap.utils.random(0, 360) + ", 80%, 55%)";
          },
          color: function () {
            return "hsl(" + gsap.utils.random(0, 360) + ", 80%, 55%)";
          },
          x: 0,
        },
        {
          x: () =>
            Math.sqrt(
              Math.pow(gsap.getProperty(".rain-container", "height"), 2) +
                Math.pow(gsap.getProperty(".rain-container", "width"), 2)
            ),
          duration: () => gsap.utils.random([5, 10, 15]),
          repeatRefresh: true,
          stagger: { each: 0.75 },
        }
      );

    gsap.to(".rain-container", {
      scrollTrigger: {
        trigger: "#projectsAnchorLeft",
        start: "0% left",
        endTrigger: "#contactAnchorLeft",
        end: "0% left",
        horizontal: true,
        scroller: ".outercontainer",
        scrub: 1,
        invalidateOnRefresh: true,
      },
      rotate: 120,
    });
  }, []);

  return (
    <>
      <div className="rain-container center">
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain2">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">&nbsp;</div>
        </div>
        <div className="rain">
          <div className="rain-drop">{"I <3 U ATHENA"}</div>
        </div>
      </div>
    </>
  );
};

export default BackgroundRain;
