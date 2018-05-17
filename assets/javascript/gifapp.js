$(document).ready(function() {
    
    var topics = ["Vincent van Gogh", "Picasso", "Rembrandt van Rijn", "Damien Hirst", "Francis Bacon", "El Greco", "Caravaggio"];

    var newArtist
    
    function showButtons()  {
        $("#button-place").empty();
        for (i=0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("name-to-click");
            buttons.attr("data-name", topics[i]);
            buttons.text(topics[i]);
            $("#button-place").append(buttons);
        }
    }
    showButtons()

    // Function for adding new artist to list of buttons
    function addArtist(){
        newArtist = $("#new-artist").val();
        topics.push(newArtist);
        showButtons()
    }

    // adding event listener for the submit button
    $('#confirm-artist').on('click', function(event){
        event.preventDefault();
        addArtist()
    })

    // function for adding the gifs to the page
    $(document).on('click', '.name-to-click', function(){
        $("#gif-place").empty();
        var artist = $(this).attr("data-name");
        var artistURL = encodeURIComponent(artist.trim());
        var apiKey = "O2vVGnEDjNNy3RiaCdaeGIc1UATF3Za3";
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + artistURL + "&api_key=" + apiKey + "&limit=10";
        console.log(queryURL)
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).then(function(response){
            var data = response.data

            for (i=0; i < data.length; i++) {
                var divImage = $("<div class='image-place'>")
                var rating = data[i].rating;
                var textLine = $("<p>").text("Rating:" + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", data[i].images.fixed_height.url);
                divImage.append(gifImage);
                divImage.prepend("Rating:" + rating);
                $("#gif-place").append(divImage);
            }
        })
    })
});