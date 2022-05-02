// write js code here corresponding to index.html
// You should add submit event on the form
var masterData = JSON.parse(localStorage.getItem("schedule")) || [];
  var form = document.querySelector("form");
  form.addEventListener("submit", myFunction);
  function myFunction() {
    event.preventDefault();

    var objData = {
      matchNumber: masaiForm.matchNum.value,
      teamA: masaiForm.teamA.value,
      teamB: masaiForm.teamB.value,
      date: masaiForm.date.value,
      venue: masaiForm.venue.value,
    };
    // console.log(objData)
    masterData.push(objData);
    localStorage.setItem("schedule", JSON.stringify(masterData));
  }