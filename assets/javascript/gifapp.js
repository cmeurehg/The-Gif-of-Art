$(document).ready(function() {
    
    var topics = ["Vincent van Gogh", "Pablo Picasso", "Rembrandt van Rijn", "Damien Hirst", "Francis Bacon", "Leonardo da Vinci", "Caravaggio"];
    
    function showButtons()  {
    
        $("#button-place").empty();

    for (i=0; i < topics.length; i++) {

        var buttons = $("<button>");
        //buttons.addClass("name-to-click");
        //buttons.attr("data-name", topics[i]);
        buttons.text(topics[i]);
        $("#button-place").append(buttons);
        }

    }
    
    showButtons(); // -----look at the placement of this call in relation to the last commented call, just in case.

   // $("#confirm-artist").on("click", function(event) {
    //    event.preventDefault();
      //  var newArtist = $("#new-artist").val().trim();
      //  topics.push(newArtist);

        // showButtons();
   // })
    
    //showButtons(); -----Look at the placement of this function call if things don't work
    
    
//api key = XHTj6YMhkDfZvYfpzr7eTKiKw3GE9d09

//var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
//xhr.done(function(data) { console.log("success got data", data); });



});
