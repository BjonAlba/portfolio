window.onload = () => {
  document.onwheel = customScrollFunction;

  function customScrollFunction(event) {
    let deltaY = event.deltaY;
    let deltaYSign = Math.sign(deltaY);

    if (deltaYSign == -1) {
      document.getElementById("scrl1").scrollBy({
        top: 0,
        left: -500,
        behavior: "smooth",
      });
      console.log(deltaY);
    } else {
      document.getElementById("scrl1").scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
      console.log(deltaY);
    }
  }
};
