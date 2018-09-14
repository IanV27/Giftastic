$("button").on("click", function() {
  // Grabbing and storing the data-comedy property value from the button
  var comedy = $(this).attr("data-comedy");

  // Constructing a queryURL using the comedy name
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    comedy + "&api_key=yYzxXmzM0JJiOROiIif2ut7eQWi76TTf&limit=10";
  console.log(queryURL);
    // Performing an AJAX request with the queryURL
    $.ajax({
      url: queryURL,
      method: "GET" 
    })
    .then(function(response) {
             
      // storing the data from the AJAX request in the results variable
      var results = response.data;
       
      // Looping through each result item
      for (var i = 0; i < results.length; i++) {

        // Creating and storing a div tag
        var comedyDiv = $("<div>");
        console.log(results[i].rating);
        // Creating a paragraph tag with the result item's rating
        var p = $("<p>");
        
        p.text("Rating: " + results[i].rating);
        
        // Creating and storing an image tag
        var comedyImage = $("<img>");
        console.log(results);

        comedyImage.addClass("anImg")
        // Setting the src attribute of the image to a property pulled off the result item
        comedyImage.attr("src", results[i].images.fixed_height.url);

        comedyImage.attr("data-still", results[i].images.fixed_height_still.url)

        comedyImage.attr("data-animate", results[i].images.fixed_height.url)

        .attr("data-state", "still");
        
        // Appending the paragraph and image tag to the comedyDiv
        comedyDiv.append(p);

        comedyDiv.append(comedyImage);
        
        // Prependng the comedyDiv to the HTML page in the "#gifs-appear-here" div
        comedyDiv.prependTo($("#gifs"));

      }

      $(".anImg").on("click", function() {
            
        var state = $(this).attr("data-state"); 
        console.log(this);

        if (state == "still") {
        
        $(this).attr("src", $(this).data("animate"));
        
        $(this).attr("data-state", "animate");

        } else {
                
        $(this).attr("src", $(this).data("still"));
        
        $(this).attr("data-state", "still");
        
      }
    });
});

var comedy = [""];

    
      //This function "adds" the buttons 

      // handles the event when clicked
      $("#theButton").on("click", function(){
          var comedyButton = $("#gif-input").val();
          //adds the new comedy

          var newButton = $("<button/>").addClass( "btn btn-info comedy").attr('data-name',comedyButton).html(comedyButton).css({'margin': '5px'});
          
          $("#comedybutton").append(newButton);
              console.log("Work");

          queryURL = "https://api.giphy.com/v1/gifs/search?q=" + comedyButton + "&api_key=yYzxXmzM0JJiOROiIif2ut7eQWi76TTf&limit=10";
              console.log(comedyButton);

    $.ajax({
    url: queryURL,
    method: "GET"
    })

    .done(function(response) {

      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        var comedyDiv = $("<div>");
        
        var p = $("<p>");

        p.text("Rating: " + results[i].rating);

        var comedyImage = $("<img>");

        comedyImage.addClass("anImg")

        comedyImage.attr("src", results[i].images.fixed_height.url);

        comedyImage.attr("data-still", results[i].images.fixed_height_still.url)

        comedyImage.attr("data-animate", results[i].images.fixed_height.url)

        .attr("data-state", "still");
        
        comedyDiv.append(p);

        comedyDiv.append(comedyImage);
        
        comedyDiv.prependTo($("#gifs"));

      }

      $(".anImg").on("click", function() {
    
        var state = $(this).attr("data-state"); 
        console.log(this);

        if (state == "still") {
        
        $(this).attr("src", $(this).data("animate"));
        
        $(this).attr("data-state", "animate");

        } else {
                
        $(this).attr("src", $(this).data("still"));
        
        $(this).attr("data-state", "still");
        
      }
    });
});
  
$("#gif-input").val("");
            return false;
  })
  

});
