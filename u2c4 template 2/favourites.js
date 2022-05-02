// write js code here corresponding to favourites.html

var favMasterData = JSON.parse(localStorage.getItem("favourites")) || [];
  // console.log(favMasterData);
  displayData(favMasterData);
  function displayData(data) {
    data.forEach(function (elm, index) {
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
      fav.style.color = "red";
      fav.innerText = "Delete";
      fav.style.cursor = "pointer";
      fav.addEventListener("click", function () {
        deleteFav(index);
      });
      tr.append(td1, td2, td3, td4, td5, fav);
      document.querySelector("tbody").append(tr);
    });
  }
  function deleteFav(index) {
    favMasterData.splice(index, 1);
    localStorage.setItem("favourites", JSON.stringify(favMasterData));
    window.location.reload();
  }