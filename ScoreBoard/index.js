let homeEl = document.getElementById("home");
let guestEl = document.getElementById("guest");

// add + 1 to home score
function plusOne() {
  homeEl.innerHTML = parseInt(homeEl.innerHTML) + 1;
}

// add + 2 to home score
function plusTwo() {
  homeEl.innerHTML = parseInt(homeEl.innerHTML) + 2;
}

// add + 3 to home score
function plusThree() {
  homeEl.innerHTML = parseInt(homeEl.innerHTML) + 3;
}

// add + 1 to guest score
function plusOneG() {
  guestEl.innerHTML = parseInt(guestEl.innerHTML) + 1;
}

// add + 2 to guest score
function plusTwoG() {
  guestEl.innerHTML = parseInt(guestEl.innerHTML) + 2;
}

// add + 3 to guest score
function plusThreeG() {
  guestEl.innerHTML = parseInt(guestEl.innerHTML) + 3;
}
