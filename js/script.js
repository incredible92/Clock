// selectprs
const hrsElement = document.getElementById("hrs");
const minsElement = document.getElementById("mins");
const secsElement = document.getElementById("secs");
const mElement = document.getElementById("m");

let hrs = 0;
let mins = 0;
let secs = 0;
let m = "--";

// utilities
const renderClock = () => {
  hrsElement.textContent = hrs;
  minsElement.textContent = twoDigits(mins);
  secsElement.textContent = twoDigits(secs);
  mElement.textContent = m;
};

const twoDigits = (num) => {
  num = String(num);
  return num.length < 2 ? `0${num}` : num;
};

renderClock();

const clockInstance = setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  mins = now.getMinutes();
  secs = now.getSeconds();
  hrs = hours % 12;
  m = hours > 12 ? "pm" : "am";

  renderClock();
}, 1000);

setTimeout(() => {
  clearInterval(clockInstance);
}, 5000);

// Stopwatch
/*
1. set every field to zero
2. listen to the start button
3. setInterval of seconds or milliseconds, be increasing the time based on the duration to truly reflect time spent
4. save the interval as a variable
5. listen for the stop button, on click, clear the saved interval and that show the zero states
*/
