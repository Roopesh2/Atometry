const Views = [
  // "loader",
  "periodicTable",
  "elementData",
  "colorGuide",
];

function showView(view) {
  for (let v of Views) {
    if (v != view) document.getElementById(v).style.display = "none";
  }
  document.getElementById(view).style.display = "block";
}

function info(atomicNumber) {
  showView("elementData");
}
