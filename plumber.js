  $(".addStock").submit(function(e) {
    var url = "https://localhost:5000/api/plumber/slot"; // the script where you handle the form input.
    $.ajax({
      type: "POST",
      url: url,
      data: $(".addPlumber").serialize(), // serializes the form's elements.
      success: function(data) {
        console.log(data);

      }
    });
    e.preventDefault(); // avoid to execute the actual submit of the form.
  });
