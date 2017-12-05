(function() {
  //template compiler function
  // function initTemplate(templateSelector) {
  //   var templateText = document.querySelector(templateSelector).innerHTML;
  //   return Handlebars.compile(templateText);
  // }
  //calling template compiler function passing selector
  // var filterTemplate = initTemplate('.dropDownsTemplates');
  //
  // var tableTemplate = initTemplate('.tableTemplate')
  // var shoeDetailsHtml = document.querySelector('.shoeDetails');
  // var showAll = document.querySelector('#showall')

  //filter size only brand and size
  var getSpecificPlumber = function(slot, day) {
    var url = "https://localhost:5000/api/employers/shift/" + slot +
      "/day/" +
      day;
    $.post(url)
      .then(function(plumber) {
        console.log(plumber);
        // shoeDetailsHtml.innerHTML = tableTemplate({
        //   shoeDetails: brandSize
        // })
      });
  };

  // var purchase = function(shoeId, shoeQuantity) {
  //   var url = "https://shoecatapi.herokuapp.com/api/shoes/sold/" +
  //     shoeId +
  //     "/qty/" + shoeQuantity;
  //   $.post(url)
  //     .then(function(bought) {
  //       // alert(bought)
  //       console.log(bought);
  //       // shoeDetailsHtml.innerHTML = tableTemplate({
  //       //   shoeDetails: brandSize
  //       // })
  //     });
  // };
  //
  //
  // var upDate = function(shoeId, shoeQuantity) {
  //   var url = "https://shoecatapi.herokuapp.com/api/shoes/stockadd/" +
  //     shoeId +
  //     "/qty/" + shoeQuantity;
  //   $.post(url)
  //     .then(function(bought) {
  //
  //     });
  // };
  // //displaying data by calling all functions
  // sizesBrandsDropDowns();
  // allShoes();
  // // upDate(109, 100)
  //
  // // purchase(108, 9)
  // showAll.addEventListener('click', allShoes)
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


  //
  // var updateForm = document.querySelector('.updateForm')
  // updateForm.addEventListener('click', function(evt) {
  //   if (evt.target.name === 'update') {
  //     // Selecting dom elements for
  //     var shoeId = document.querySelector('.IDup');
  //     var shoeQuantity = document.querySelector('.quantyup');
  //     //getting the values of text inputs
  //     var shoeIdTyped = shoeId.value;
  //     var shoeQuantityTyped = shoeQuantity.value;
  //     //calling update function
  //     if (shoeIdTyped && shoeQuantityTyped) {
  //       upDate(shoeIdTyped, shoeQuantityTyped);
  //     } else {
  //       alert("Fields Required");
  //     }
  //   }
  //   allShoes();
  //
  // })

})();
