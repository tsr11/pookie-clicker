var cookies = 0;
var increment = 1;
var cps = 0;
var cursors = 0;
quotes = [
  "I love balls",
  "Them balls are cool",
  "Yaargh, skibidi",
  "Rizzler's gyat",
];

function skibidiya() {
  cookies += increment;
  document.getElementById("pookies").innerHTML = cookies;
  document.getElementById("quotesbox").innerHTML =
    quotes[Math.floor(Math.random() * 4)];
}

function buycursor() {
  if (cookies >= 15) {
    cookies -= 15;
    cps += 0.1;
    document.getElementById("pps").innerHTML = cps;
    document.getElementById("pookies").innerHTML = cookies;
    document.getElementById("noofcursors").innerHTML = cursors += 1;
  }
}
