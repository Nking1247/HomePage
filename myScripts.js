function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);

  if (h > 12) {
    h -= 12;
    PM = true;
  }
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10

  return i;
}

var elem = document.querySelector(".wrapper"),
  div = document.querySelector(".move"),
  x = 0,
  y = 0,
  mousedown = false;

// div event mousedown
div.addEventListener(
  "mousedown",
  function (e) {
    // mouse state set to true
    mousedown = true;
    // subtract offset
    x = div.offsetLeft - e.clientX;
    y = div.offsetTop - e.clientY;
  },
  true
);

// div event mouseup
div.addEventListener(
  "mouseup",
  function (e) {
    // mouse state set to false
    mousedown = false;
  },
  true
);

// element mousemove to stop
elem.addEventListener(
  "mousemove",
  function (e) {
    // Is mouse pressed
    if (mousedown) {
      // Now we calculate the difference upwards
      div.style.left = e.clientX + x + "px";
      div.style.top = e.clientY + y + "px";
    }
  },
  true
);
