(function() {
 
  var getSpecificPlumber = function(slot, day) {
    var url = "http://localhost:5000/api/employers/shift/" + slot +
      "/day/" +
      day;
    $.post(url)
      .then(function(plumber) {
        console.log(plumber);
         });
  };

 
  // //   //adding event to drop down list
  var employers = document.querySelector('.employers');
  employers.addEventListener('click', function() {
    // get the references in the Event Listener as these elements are added dynamically
    var days = document.querySelector('.day');
    var slots = document.querySelector('.slot');
    //getting the value of selected in drop down list
    var daysSelected = days.value;
    var slotsSelected = slots.value;
    alert(slotsSelected)
    alert(daysSelected)
      //calling our filters
    getSpecificPlumber(slotsSelected, daysSelected)

  })
})();
