// write js code here corresponding to matches.html

var masterMatchData = JSON.parse(localStorage.getItem("schedule")) || [];
var favData = JSON.parse(localStorage.getItem("favourites")) || [];
displayData(masterMatchData);

function displayData(data) {
  document.querySelector("tbody").innerHTML = "";
  data.forEach(function (elm) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    td1.innerText = elm.matchNumber;
    var td2 = document.createElement("td");
    td2.innerText = elm.teamA;
    var td3 = document.createElement("td");
    td3.innerText = elm.teamB;
    var td4 = document.createElement("td");
    td4.innerText = elm.date;
    var td5 = document.createElement("td");
    td5.innerText = elm.venue;
    var fav = document.createElement("td");
    fav.style.color = "green";
    fav.innerText = "Add as Favourites";
    fav.style.cursor = "pointer";
    fav.addEventListener("click", function (e) {
      addAsFavourite(elm);
      e.target.innerText = "Added as Favourites";
    });
    tr.append(td1, td2, td3, td4, td5, fav);
    document.querySelector("tbody").append(tr);
  });
}

function addAsFavourite(elm) {
  favData.push(elm);
  localStorage.setItem("favourites", JSON.stringify(favData));
}

// sorting
var select = document.querySelector("#filterVenue");
select.addEventListener("change", function (c) {
  // console.log(c.target.value)
  let check = c.target.value;
  if (check == "none" || check == null) {
    window.location.reload();
  }
  var update = masterMatchData.filter(function (elem) {
    return elem.venue == check;
  });
  console.log(update);
  displayData(update);
});
